FROM node:11
WORKDIR /src/hackoverflow/backend
EXPOSE 3000
ADD package-lock.json .
RUN npm ci
ADD . .
CMD [ "node", "server.js" ]

