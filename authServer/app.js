const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const tokenAuth = require('./auth/auth')
const UserModel = require('./models/user');
const cors = require('cors');

mongoose.connect('mongodb+srv://rishwi:ma2510ri@cluster0.ytd5e.mongodb.net/NewsAppUsers?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> console.log("DB connected..."));
mongoose.set("useCreateIndex", true);
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;

require('./auth/auth');

const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes);


     

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use('/user',tokenAuth , secureRoute);

// Handle errors.
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(8000, () => {
  console.log('Server started.')
});