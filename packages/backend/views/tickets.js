const TicketController = require('../controllers/ticket');
const TopicController = require('../controllers/topic');

const sliceTicket = ({ _id, created, name, location, status, topics }) => ({
  _id,
  created,
  name,
  location,
  status,
  topics,
});

module.exports = {
  post: async (req, res, next) => {
    try {
      const ticket = await TicketController.create(req.body);
      // Add the topic if it isn't there
      ticket.topics.map(async name => {
        await TopicController.create({ name });
      });

      return res.status(201).json(sliceTicket(ticket));
    } catch (err) {
      // Make sure that this is a validation error and send it back to the caller
      if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
      }
      // This is an unexpected error, so pass it on
      return next(err);
    }
  },

  get: (req, res) => {
    TicketController.model.find((err, tickets) => {
      if (err) return res.sendStatus(500);
      return res.json({ tickets: tickets.map(sliceTicket) });
    });
  },
};
