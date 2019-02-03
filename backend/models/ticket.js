const mongoose = require('mongoose');

const { ticketStatus } = require('./lib');

const ticketSchema = new mongoose.Schema({
  name: String,
  created: { type: Date, default: Date.now },
  topics: [String],
  location: String,
  status: { type: String, default: ticketStatus.open },
});


const Ticket = mongoose.model('Ticket', ticketSchema);

Ticket.ticketStatus = ticketStatus;

module.exports = Ticket;
