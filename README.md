<img width="2560" height="1440" alt="portfolio" src="https://github.com/user-attachments/assets/3b43be06-520a-45d1-9ce1-bf44e9ab74eb" />

# Development

```sh
npm install
```

```sh
npm run dev
```

# Deployment

```sh
docker build -t ghcr.io/xirzo/portfolio:latest .
```

```sh
docker push ghcr.io/xirzo/portfolio:latest
```

```sh
docker context use <context_name>
```

```sh
docker stack deploy <stack_name> -c docker-stack.yaml --with-registry-auth
```
