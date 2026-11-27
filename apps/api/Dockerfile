# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

COPY apps/api/package*.json ./

RUN npm install

COPY apps/api/ ./

RUN npm run build

RUN npm prune --omit=dev

# Stage 2: Production
FROM node:22-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder --chown=node:node /app ./

USER node

EXPOSE 3000

CMD ["node", "src/index.js"]
