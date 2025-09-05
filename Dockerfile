FROM node:20-alpine AS dev-deps
WORKDIR /app

# Copy package files explicitly to avoid glob pattern security risks
COPY package.json ./

# Install dependencies with --ignore-scripts for security
RUN npm install --ignore-scripts

FROM node:20-alpine AS builder
WORKDIR /app

# Define build arguments for environment variables
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

COPY --from=dev-deps /app/node_modules ./node_modules

# Copy only necessary files for building
COPY package.json ./
COPY tsconfig*.json ./
COPY vite.config.ts vitest.config.ts ./
COPY biome.json ./
COPY index.html ./
COPY env.d.ts shims-vue.d.ts ./
COPY .env ./

# Copy source code and public assets
COPY src/ ./src/
COPY public/ ./public/

RUN npm run build

FROM nginx:1.23.3 AS prod

# Create a non-root user for nginx
RUN addgroup -g 1001 -S nginx && \
    adduser -S -D -H -u 1001 -h /var/cache/nginx -s /sbin/nologin -G nginx -g nginx nginx

# Copy built application
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Change ownership of nginx files to non-root user
RUN chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    chown -R nginx:nginx /usr/share/nginx/html && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

# Switch to non-root user
USER nginx

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]