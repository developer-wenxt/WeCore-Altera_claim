const express = require('express')
const cors = require("cors");
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
const limiter = rateLimit({ windowMs: 15*60*1000, max: 100000000000 });
app.use(limiter);
app.use(responseFormatter);  
// Public endpoints
app.post('/api/register', register);
app.post('/api/login', login);
app.use('/api', routes); // UNCOMMENT LINE 22 after KT
// Protected endpoints
//app.use('/api/v1', auth, routes);
app.use(errorHandler);
 app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: false, // must be false when origin is "*"
    })
  );

sequelize.authenticate()
  .then(() => {
    console.log('Authenticated');
    //return sequelize.sync({ alter: true });// Only for Dev
  })
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('DB connection failed:', err));

module.exports = app;
