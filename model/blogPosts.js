const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let blogPost = new Schema({
    title: 'String',
    post: 'String',
    user: 'String',
    date: {
        type: 'Date',
        default: Date.now()
    }
})

module.exports = mongoose.model('BlogPost', blogPost);