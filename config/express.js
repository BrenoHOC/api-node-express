const express = require('express');
const config = require('config');

module.exports = () => {
  const app = express();

  app.set('port', process.env.PORT || config.get('server.port'));
  
  app.use(express.json())
  app.use(express.urlencoded({ extended: true}))

  require('../api/routes/Alunos.routes')(app);

  return app;
};