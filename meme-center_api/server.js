const express = require('express');
const mongoose = require('mongoose');
const jsonwebtoken = require("jsonwebtoken");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));
var cors = require('cors');
app.use(cors())


app.use(function (req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});


mongoose.set('debug', true);
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});


app.listen(PORT, () => console.log(`API server running on port ${PORT}!`));