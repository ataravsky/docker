FROM node:14.17.0-alpine3.13

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
