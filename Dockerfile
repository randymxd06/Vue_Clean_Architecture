FROM node:20-alpine AS dev-deps
WORKDIR /app

# Copy package files explicitly to avoid glob pattern security risks
COPY package.json ./

# Install dependencies
RUN npm install

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

# Copy built application
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]