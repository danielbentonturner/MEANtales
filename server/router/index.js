// Route index

module.exports = function (app) {
  app.use('/start-tale', require('./routes/start-tale'));
};
