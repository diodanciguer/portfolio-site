# Fase 1: Instalar dependências e construir o projeto
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Fase 2: Produção - Servir a aplicação construída
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Se você tiver um arquivo .env.production, pode copiá-lo também
# COPY --from=builder /app/.env.production ./

# Copiar o build do Next.js da fase 'builder'
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]