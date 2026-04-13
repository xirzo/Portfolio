FROM node:20-alpine AS builder

WORKDIR /app

ARG VITE_BLOG_URL
ENV VITE_BLOG_URL=${VITE_BLOG_URL}

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine3.23

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
