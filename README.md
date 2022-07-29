# svelte-boilerplate

## Developing

Once you've created a project and installed dependencies with `pnpm install` ( remember run `corepack enable` for the first time), start a development server:

```bash
corepack enable
```

Install PlayWright for E2E testing framework

```bash
npx playwright install
```

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

## Docker Build

```bash
docker build -t my-app .
```

## Docker Run

```bash
docker run --name my-app -p 4000:3000 my-app
```

## Stop and Remove all docker image

```bash
docker stop my-app && docker rm my-app && docker rmi my-app
```
