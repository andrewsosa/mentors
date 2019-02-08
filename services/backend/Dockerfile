FROM node:11
WORKDIR /src/backend
EXPOSE 3000
ADD package-lock.json .
RUN npm ci
ADD ./src/ .
CMD [ "node", "server.js" ]

