FROM node:latest

RUN npm install -g nodemon

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]