const Post = require("../models/post")

exports.getPosts = (req, res) => {
    // res.send("Hello world from NodeJS");
    const posts = Post.find().select("_id title body")
        .then(posts => {
            res.json({
                posts: posts
            })
        })
        .catch(err => console.log(err))

}

exports.createPost = (req, res) => {
    const post = new Post(req.body)
    // console.log("Creating POST: ", req.body);
    //before using express-validator
    // post.save((err, result) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error: err
    //         })
    //     }
    //     res.status(200).json({
    //         post: result
    //     })
    // })

    //using express-validator
    post.save().then(result => {
        res.json({
            post: result
        })
    })


}