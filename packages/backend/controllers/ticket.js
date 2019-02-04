const Ticket = require('../models/ticket');

class TicketController {
  static create({ name, topics, location }) {
    return new Ticket({ name, topics, location }).save();
  }
}

TicketController.model = Ticket;

module.exports = TicketController;
