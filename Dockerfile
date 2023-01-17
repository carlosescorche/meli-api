FROM node:18.13.0 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run tsc

FROM node:18.13.0-alpine

RUN apk add --no-cache tzdata

WORKDIR /app

COPY --from=builder /app/build/ .

COPY --from=builder /app/package*.json .

RUN npm install --production

EXPOSE 8080

CMD ["node","index.js"]
