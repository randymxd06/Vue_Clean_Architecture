FROM node:20-alpine AS dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM nginx:1.23.3 AS prod
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html
# COPY assets/ /usr/share/nginx/html/assets
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

CMD [ "nginx", "-g", "daemon off;" ]