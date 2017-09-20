/* Worker dependencies */
const express = require('express');
const helmet = require('helmet');

/* ExpressJS stuff */
const app = express();

/* Setting up views */
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/views/assets`));
app.set('views', `${__dirname}/views`);

/* Helmet middleware */
app.use(helmet());

/* Setting up controllers */
app.use(require('./controllers'));

app.listen(global.config.port, () => {
  console.log(`Listening on port ${global.config.port}`);
});