FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /standalone

COPY ["package.json", "."]

# COPY ["tsconfig.build.json", "./"]

RUN npm install glob rimraf

RUN npm install -g @nestjs/cli

RUN npm install -g webpack

RUN npm install --production=true

COPY . .

RUN npm run build

RUN rm package.json


# EXPOSE 7777

CMD ["node", "./dist/main.js"]
