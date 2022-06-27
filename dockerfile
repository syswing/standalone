FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /standalone

COPY ["package.json", "./"]

COPY ["tsconfig.build.json", "./"]

RUN npm install glob rimraf

RUN npm install -g @nestjs/cli

RUN npm install --only=development

RUN npm install

RUN npm run build

RUN rm package.json

# COPY ./dist .

# EXPOSE 7777

CMD ["node", "main.js"]
