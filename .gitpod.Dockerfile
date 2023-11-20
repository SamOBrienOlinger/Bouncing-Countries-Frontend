FROM node:14

WORKDIR /backend

COPY . /backend

RUN npm install

WORKDIR /frontend

RUN npm install
