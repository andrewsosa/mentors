const { GraphQLDateTime } = require('graphql-iso-date');
const Ticket = require('./models/ticket');

module.exports = {
  Date: GraphQLDateTime,
  Query: {
    tickets: async () => {
      return await Ticket.find();
    },
    // tickets: () => [],
  },
};
