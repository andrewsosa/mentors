const Topic = require('../models/topic');

class TopicController {
  static create({ name }) {
    return new Promise(async (res, rej) => {
      try {
        const ticket = new Topic({ name });
        await ticket.save();
      } catch (err) {
        if (err.name !== 'ValidationError') rej();
      }
      res();
    });
  }
}

module.exports = TopicController;
