FROM node:20.18.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1278

CMD [ "npm", "run", "start:prod" ]