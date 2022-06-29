FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /standalone

COPY . .

# COPY ["package.json", "."]

# COPY ["tsconfig.build.json", "./"]

RUN npm install glob rimraf

RUN npm install -g @nestjs/cli

RUN npm install -g webpack

RUN npm install -g webpack-cli

RUN npm install --production=true

RUN npm run build

# EXPOSE 7777

CMD ["node", "./dist/main.js"]
