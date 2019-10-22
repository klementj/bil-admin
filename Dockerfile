FROM node:lts

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn", "serve"]