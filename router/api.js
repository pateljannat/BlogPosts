const express = require("express");
const BlogPost = require("../model/blogPosts");
const SignUp = require("../model/signUp");
const router = express.Router();
const UserSession = require("../model/userSession");
const mongodb = require('mongodb');

//const blogPosts = new BlogPost();
router.post('/api/accounts/register', (req, res) => {
    const { body } = req;
    const { name, password, password1 } = body;
    let { email } = body;

    if (!email || !password || !password1 || !name) {
        return res.send({
            success: false,
            message: 'All the fields are mandatory'
        });
    }
    if (password != password1) {
        return res.send({
            success: false,
            message: "Passwords don't match. Please try again."
        })
    }

    email = email.toLowerCase() && email.trim();

    SignUp.find({
        email: email
    }, (error, previousUsers) => {
        if (error) {
            return res.status(500).json("Internal server error.");
        }
        else if (previousUsers.length > 0) {
            return res.status(200).json('Account already exists');
        }
    })
    const newUser = new SignUp();
    newUser.email = email;
    newUser.password = newUser.generateHash(password);
    newUser.name = name;

    newUser.save((error, user) => {
        if (error) {
            return res.send({
                success: false,
                message: "Internal server error"
            })
        }
        else {
            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Error: Server Error',
                        respId: 'LIE6',
                    });
                } else {
                    return res.json({
                        success: true,
                        message: 'Valid sign in',
                        token: doc._id,
                        email: user.email,
                        respId: 'LIS',
                    });
                }

            });
        }
    })
})

router.post('/api/accounts/login', (req, res, next) => {
    const { body } = req;
    const { password } = body;
    let { email } = body;

    if (!email) {
        return res.status(300).send({
            message: 'Error: Email cannot be blank.',
            respId: 'LIE1'
        });
    }

    if (!password) {
        return res.send({
            success: false,
            message: 'Error Password cannot be blank.',
            respId: 'LIE2',
        });
    }

    email = email.toLowerCase() && email.trim();

    SignUp.find({
        email: email
    }, (err, users) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: server error',
                respId: 'LIE3',
            });
        }

        if (users.length != 1) {
            return res.send({
                success: false,
                message: 'Error: Invalid',
                respId: 'LIE4',
            });
        } else {
            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Wrong Email or Password',
                    respId: 'LIE5',
                });
            } else {
                const userSession = new UserSession();
                userSession.userId = user._id;
                userSession.save((err, doc) => {
                    if (err) {
                        return res.send({
                            success: false,
                            message: 'Error: Server Error',
                            respId: 'LIE6',
                        });
                    } else {
                        return res.send({
                            success: true,
                            message: 'Valid sign in',
                            token: doc._id,
                            email: user.email,
                            respId: 'LIS',
                        });
                    }

                });
            }
        }
    });
});

router.get('/api/accounts/logout', (req, res) => {
    const { query } = req;
    const { token } = query;

    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false,
    }, {
        $set: {
            isDeleted: true,
        }
    }, null, (err, sessions) => {
        if (err) {
            console.log(err);
            return res.send({
                success: false,
                message: 'Error: Server Error',
            });
        } else {
            return res.send({
                success: true,
                message: 'Logged Out',
            });
        }
    });
});

router.get('/api/account/verify', (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test
    // Verify the token is one of a kind and it's not deleted.
    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if (err) {
            console.log(err);
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        if (sessions.length != 1) {
            return res.send({
                success: false,
                message: 'Error: Invalid'
            });
        } else {
            // DO ACTION
            return res.send({
                success: true,
                message: 'Good'
            });
        }
    });
});

router.get('/api', (req, res) => {
    BlogPost.find({
        'user': req.query.email
    }).then((data) => {
        res.json(data);
    }).catch(error => {
        console.log(error);
    });
});

router.get('/api/:id', (req, res) => {
    const id = req.params.id;
    BlogPost.findById(id, (error, data) => {
        if (error) {
            console.log(error)
        }
        else {
            res.json(data);
        }
    })
});

router.post('/api/add', (req, res) => {
    const blogPosts = new BlogPost(req.body);
    blogPosts.save().then(data => {
        res.status(200).json("Post added!!!");
    })
});

router.delete('/api/delete/:id', (req, res) => {
    BlogPost.deleteOne({ '_id': new mongodb.ObjectID(req.params.id) }).then(data => {
        BlogPost.find({
            'user': req.query.email
        }).then((data) => {
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }).catch(error => {
        console.log(error);
    });
})

router.post('/api/:id', (req, res) => {
    BlogPost.findById(req.params.id, (error, data) => {
        if (!data) {
            res.status(404).json("Post not found");
        }
        else {
            data.title = req.body.title;
            data.post = req.body.post;

            data.save().then(data => {

                res.status(200).send("Post updated!!!");
            }).catch(error => {
                res.status(400).json("Internal server error");
            })
        }
    })
})



module.exports = router;