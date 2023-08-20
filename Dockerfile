FROM node:apline
WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci
COPY . .
CMD [ "npm","start"]