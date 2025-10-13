
# Development

```sh
npm install
```

```sh
npm run dev
```

# Deploy

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
