## Fichier : ./react-docker/Dockerfile
FROM node:20.8-alpine3.17

WORKDIR /usr/src/app/front

COPY package*.json ./

RUN npm install

CMD ["npm", "run" ,"dev"]