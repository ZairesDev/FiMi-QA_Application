const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3307;
const app = express();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

//lines 24-31 need to be uncommented when handlebars is ready//
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// knows to automatically look for an index folder.
app.use(require(`./controllers/`));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
});
