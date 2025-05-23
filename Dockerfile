FROM node:18.3.0

# ENV NODE_ENV=production

WORKDIR /standalone

COPY . .
# COPY [".", "."]
# COPY ["package.json", "."]

# COPY ["tsconfig.build.json", "./"]

#RUN npm install glob rimraf

#RUN npm install -g @nestjs/cli

#RUN npm install -g webpack

#RUN npm install -g webpack-cli

#RUN npm run build

EXPOSE 3000

CMD ["node", "./dist/main.js"]
