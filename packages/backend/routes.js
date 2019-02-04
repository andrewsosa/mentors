const express = require('express');
const logger = require('morgan');

const router = express.Router();

const tickets = require('./views/tickets');
const topics = require('./views/topics');

router.use(logger('dev'));

router.get('/tickets', tickets.get);
router.post('/tickets', tickets.post);

router.get('/topics', topics.get);
router.post('/topics', topics.post);

module.exports = router;
