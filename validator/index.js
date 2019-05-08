exports.createPostValidator = (req, res, next) => {
    req.check('title', 'TITLE IS REQUIRED').notEmpty()
    req.check('title', 'TITLE must be between 4 - 150 characters').isLength({
        min: 4,
        max: 150
    })

    req.check('body', 'BODY IS REQUIRED').notEmpty()
    req.check('body', 'BODY must be between 4 - 2000characters').isLength({
        min: 4,
        max: 2000
    })


    //checking errors
    const errors = req.validationErrors()
    //if error show the first error occured
    if (errors) {
        const firstError = errors.map((err) =>
            err.msg
        )[0]
        return res.status(400).json({
            error: firstError
        })
    }

    //proceed to next middle ware
    next();
}