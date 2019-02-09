// require('dotenv').config();

const path = require('path');
const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const mongoose = require('mongoose');

mongoose.Promise = Promise;

const typeDefs = importSchema(path.join(__dirname, './schema.graphql'));
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.connect = async () => {
  return mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
};

module.exports = server;
