const express = require('express');

const app = express();
const mongoose = require('mongoose')

const morgan = require('morgan');

const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

//package to use .env variables
const dotenv = require('dotenv');
dotenv.config()


//database
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('DB CONNECTED')
    })

mongoose.connection.on('error', err => {
    console.log(`DB CONNECTION ERROR: ${err.message}`)
})
//bring in routes => required function callsing
const postRoutes = require('./routes/post');

//middleware sample
// const myMiddleware = (req, res, next) => {
//     console.log('MIDDLEWARE IN USE');
//     next();
// }

//middleware
app.use(morgan('dev'));
// app.use(myMiddleware);
app.use(bodyParser.json())
app.use(expressValidator())


app.use("/", postRoutes);


const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`PORT: ${port}`);
});