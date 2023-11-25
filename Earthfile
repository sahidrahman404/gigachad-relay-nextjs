VERSION 0.7
FROM node:20-alpine

WORKDIR /app

build:
        ENV NODE_ENV=production
        RUN npm install -g pnpm@8.10.5
        COPY package.json pnpm-lock.yaml ./
        RUN pnpm install --frozen-lockfile --prod=false
        COPY . .
        RUN pnpm run build
        RUN pnpm prune --prod

        SAVE ARTIFACT node_modules
        SAVE ARTIFACT package.json
        SAVE ARTIFACT pnpm-lock.yaml
        SAVE ARTIFACT .next

docker:
        COPY public ./
        COPY +build/node_modules ./
        COPY +build/package.json ./
        COPY +build/pnpm-lock.yaml ./
        COPY +build/.next ./
        EXPOSE 8080
        CMD [ "npm", "run" ,"start" ]
        SAVE IMAGE gigachad-frontend:latest
