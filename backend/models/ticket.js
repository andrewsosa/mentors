const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  name: String,
  created: { type: Date, default: Date.now },
  topics: [{ name: String }],
  location: String,
});

const Ticket = mongoose.model('Ticket', ticketSchema);

Ticket.schema = ticketSchema;

module.exports = Ticket;
