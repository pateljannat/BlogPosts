const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require("./router/api");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const MONGODB_URI = "mongodb+srv://jannat:webnote@webnote.2o5v9.mongodb.net/<dbname>?retryWrites=true&w=majority"
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/blogPosts', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
})
app.use(morgan('tiny'));
app.use('/', routes);

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"))
}

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})
