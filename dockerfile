FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /standalone

COPY ["package.json", "./"]

RUN npm install

RUN npm run build

RUN rm package.json

COPY ./dist .

EXPOSE 7777

CMD ["node", "main.js"]

