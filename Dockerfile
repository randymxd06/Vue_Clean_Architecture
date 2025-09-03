FROM node:20-alpine AS dev-deps
WORKDIR /app

# Copy package files explicitly to avoid glob pattern security risks
COPY package.json ./
COPY bun.lock ./

# Install dependencies with --ignore-scripts to prevent execution of potentially malicious post-install scripts
RUN yarn install --frozen-lockfile --ignore-scripts

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules

# Copy only necessary files for building
COPY package.json ./
COPY bun.lock ./
COPY tsconfig*.json ./
COPY vite.config.ts vitest.config.ts ./
COPY biome.json ./
COPY index.html ./
COPY env.d.ts shims-vue.d.ts ./

# Copy source code and public assets
COPY src/ ./src/
COPY public/ ./public/

RUN yarn build

FROM nginx:1.23.3 AS prod

# Create a non-root user and set up directories with proper permissions
RUN groupadd -r nginx-user && useradd -r -g nginx-user nginx-user && \
    mkdir -p /var/cache/nginx /var/run /var/log/nginx /etc/nginx/conf.d && \
    chown -R nginx-user:nginx-user /var/cache/nginx /var/run /var/log/nginx /etc/nginx/conf.d && \
    chmod -R 755 /var/cache/nginx /var/run /var/log/nginx /etc/nginx/conf.d

# Copy built application and set permissions
COPY --from=builder /app/dist /usr/share/nginx/html
# COPY assets/ /usr/share/nginx/html/assets

# Remove default config, copy custom config, and set proper permissions
RUN rm /etc/nginx/conf.d/default.conf && \
    chown -R nginx-user:nginx-user /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d

# Set correct permissions for config file
RUN chown nginx-user:nginx-user /etc/nginx/conf.d/nginx.conf && \
    chmod 644 /etc/nginx/conf.d/nginx.conf

# Switch to non-root user
USER nginx-user

EXPOSE 8080
CMD [ "nginx", "-g", "daemon off;" ]