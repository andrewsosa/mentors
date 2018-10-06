
module.exports = {
  post: (req, res) => {
    const post = req.body;
    post.created = new Date();
    req.io.emit('ticket', { ...post });
    res.status(201).json('OK!');
  },
};
