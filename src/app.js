const express = require('express');
const app = express();
const routes = require('./routes');
const rateLimit = require('express-rate-limit');
const errorHandler = require('./middlewares/errorHandler');
const db = require('./models');
const auth = require('./middlewares/auth');
const { login, register } = require('./controllers/authController');
const responseFormatter = require('./middlewares/responseFormatter');
const sequelize = db.sequelize;


app.use(express.json());
const limiter = rateLimit({ windowMs: 15*60*1000, max: 100 });
app.use(limiter);
app.use(responseFormatter);  
// Public endpoints
app.post('/api/v1/register', register);
app.post('/api/v1/login', login);
app.use('/api/v1', routes); // UNCOMMENT LINE 22 after KT
// Protected endpoints
//app.use('/api/v1', auth, routes);
app.use(errorHandler);

sequelize.authenticate()
  .then(() => {
    console.log('Authenticated');
    //return sequelize.sync({ alter: true });// Only for Dev
  })
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('DB connection failed:', err));

module.exports = app;
