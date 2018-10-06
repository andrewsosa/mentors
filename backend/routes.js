const express = require('express');
const logger = require('morgan');
const tickets = require('./controllers/tickets');

const router = express.Router();
router.use(logger('dev'));

router.post('/ticket', tickets.post);
router.get('/ticket', tickets.get);

module.exports = router;
