const { GraphQLDateTime } = require('graphql-iso-date');
const Ticket = require('./models/ticket');
const Topic = require('./models/topic');

module.exports = {
  Date: GraphQLDateTime,
  Query: {
    tickets: async (parent, args) => {
      return await Ticket.find(args);
    },
    ticket: async (parent, args, context, info) => {
      return await Ticket.findOne(args);
    },
    topics: async (parent, args) => {
      return await Topic.find(args);
    },
    // topic: async(parent, args, context, info) => {
    //   return await Tickets.find()
    // }
  },
  Mutation: {
    createTicket: async (root, args) => {
      const { name, location, topics } = args;
      return new Ticket({ name, topics, location }).save();
    },
  },
};
