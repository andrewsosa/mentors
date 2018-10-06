const express = require('express');
const tickets = require('./controllers/tickets');

const router = express.Router();

router.post('/ticket', tickets.post);

module.exports = router;
