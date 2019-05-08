const express = require('express')
const {
    getPosts,
    createPost
} = require('../controllers/post')
const validator = require('../validator')

const router = express.Router();

router.get('/', getPosts);
router.post('/post', validator.createPostValidator, createPost);


//now we do that in COntroller
// exports.getPosts = (req, res) => {
//     // res.send("Hello world from NodeJS")
// }

module.exports = router;