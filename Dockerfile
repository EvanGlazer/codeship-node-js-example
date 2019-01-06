FROM node:7.7.2-alpine

WORKDIR /usr/app

RUN apk update && apk add postgresql

COPY package.json .
RUN npm install --quiet
RUN npm install -g jasmine-node
COPY . .
