const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        //before express-validator
        // required: "Title is required field",
        // minlength: 4,
        // maxlength: 150
        required: true
    },
    body: {
        type: String,
        //before express-validator
        // required: "Body is required field",
        // minlength: 4,
        // maxlength: 2000
        required: true
    }
})

module.exports = mongoose.model("Post", postSchema)