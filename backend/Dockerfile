FROM node:latest

RUN npm install -g nodemon

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]