FROM node:14

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN yarn install
EXPOSE 8001

CMD ["yarn", "start"]