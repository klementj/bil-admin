FROM node:lts

WORKDIR /app

# split the project up so i don't install react-native in the docker container, or make another package.json file.
COPY package*.json ./

run npm install

copy . .

EXPOSE 8080

CMD ["npm", "run", "serve"]