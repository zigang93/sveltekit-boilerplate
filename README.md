# svelte-boilerplate

Sveltekit application boilerplate with tailwindcss, scss, typescript, vitest, playwright, vite, husky, semantic-release, eslint, prettier, commitlint and docker

> :warning: [Sveltekit](https://github.com/sveltejs/kit) still under beta version ( updated until 1.0.0-next.395 ), use it at your own risk. I will try keep update until 1.0 stable release

## Preparation

run `corepack enable` for preparing the required `pnpm` package manager for our projects ( required Node.js >=16.10 )

```bash
corepack enable
```

Corepack isn't included with Node.js in versions before the 16.10; to address that, run:

```bash
npm i -g corepack
```

After success enable corepack, you should able to run `pnpm install`:

```bash
pnpm install
```

Install PlayWright for E2E testing framework

```bash
npx playwright install
```

## Developing

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev --open
```

## Commitlint

```bash
pnpm cz
```

## Building

To create a production version of your app:

```bash
pnpm build
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
