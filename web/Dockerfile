FROM node:16

WORKDIR /web

COPY package.json .

RUN npm install

COPY . /web

CMD ["npm", "run", "start"]