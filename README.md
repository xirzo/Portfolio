<img width="2560" height="1440" alt="portfolio" src="https://github.com/user-attachments/assets/3b43be06-520a-45d1-9ce1-bf44e9ab74eb" />

# Development

```sh
npm install
```

```sh
npm run dev
```

# Deployment

By default ci/cd builds the image and pushes it to *ghcr.io*, if you want to
build it manually follow the next step.

## Manual Build (Optional)

```sh
docker build --build-arg VITE_BLOG_URL=https://blog.xirzo.ru -t ghcr.io/xirzo/portfolio:latest .
```

```sh
docker push ghcr.io/xirzo/portfolio:latest
```

## Deployment

*docker-stack.yml* uses image from *ghcr*


```sh
docker context use <context_name>
```

```sh
docker stack deploy <stack_name> -c docker-stack.yaml --with-registry-auth
```
