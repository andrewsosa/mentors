const Ticket = require('../models/ticket');

module.exports = {
  post: (req, res) => {
    console.log('POST', req.body);
    const ticket = new Ticket(req.body);
    ticket.save((err) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }

      req.io.emit('ticket', ticket);
      return res.status(201).json('OK!');
    });
  },

  get: (req, res) => {
    Ticket.find((err, tickets) => {
      if (err) return res.sendStatus(500);
      return res.json(tickets);
    });
  },
};
