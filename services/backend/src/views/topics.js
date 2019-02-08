const Topic = require('../models/topic');

module.exports = {
  get: (req, res) => {
    Topic.find((err, tickets) => {
      if (err) return res.sendStatus(500);
      return res.json(tickets.map(t => t.name));
    });
  },
  post: (req, res) => {
    const topic = new Topic(req.body);
    topic.save(err => {
      if (err) return res.sendStatus(500);
      return res.sendStatus(201);
    });
  },
};
