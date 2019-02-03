const Ticket = require('../models/ticket');
const Topic = require('../models/topic');

module.exports = {
  post: (req, res) => {
    const ticket = new Ticket(req.body);
    ticket.save((err) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }

      // Add the topic if it isn't there
      const topics = ticket.topics || [];

      topics.map(async (t) => {
        try {
          const topic = new Topic({ name: t });
          topic.save();
        } catch {
          console.log(`topic ${t} already exists`);
        }
      });

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
