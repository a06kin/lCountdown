var express = require('express');
var router = express.Router();
var Post = require('../models/Post');

router.get('/', function (req, res, next) {
    Post
        .find()
        .sort('-time')
        .exec(function (error, posts) {
            res.render('index', {posts: posts});
        });
});

router.post('/add', function (req, res, next) {
    post = new Post({
        'name': req.body.name,
        'wish': req.body.wish
    });
    post.save(function (err) {
        res.redirect('/');
    });

});

module.exports = router;
