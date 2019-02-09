const mongoose = require('mongoose');
const { ticketStatus } = require('./lib');

const ticketSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  created: { type: Date, default: Date.now },
  topics: { type: [String], required: true, default: [] },
  location: { type: String, required: true },
  status: { type: String, default: ticketStatus.open },
});

const Ticket = mongoose.model('Ticket', ticketSchema);
Ticket.ticketStatus = ticketStatus;

module.exports = Ticket;
