const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require("./router/api");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/blogPosts', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
})
app.use(morgan('tiny'));
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Listenign at port ${PORT}`)
})

//[{"_id":"5e65dcaaeabe070a64ed32d4","title":"jannat","post":"123","__v":0}]