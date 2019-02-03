const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  name: { type: String, index: { unique: true, dropDups: true } },
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
