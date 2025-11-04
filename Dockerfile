FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json* ./
COPY . .

RUN if [ -f package.json ]; then npm install; fi

CMD ["node", "app.js"]