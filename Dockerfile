# PREPARATION
FROM node:16-alpine AS preparation
COPY package.json pnpm-lock.yaml ./
# Create temporary package.json where version is set to 0.0.0
# – this way the cache of the build step won't be invalidated
# if only the version changed.
RUN ["node", "-e", "\
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));\
fs.writeFileSync('package.json', JSON.stringify({ ...pkg, version: '0.0.0' }));\
"]

# Install dependencies only when needed
FROM node:16-alpine AS deps
WORKDIR /app
COPY --from=preparation package.json pnpm-lock.yaml ./
RUN corepack enable
RUN pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable
RUN pnpm build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 svelte

COPY --from=builder --chown=svelte:nodejs /app/build ./build
COPY --from=builder --chown=svelte:nodejs /app/package.json .
COPY --from=builder --chown=svelte:nodejs /app/node_modules ./node_modules

USER svelte

EXPOSE 3000

CMD ["node", "build"]