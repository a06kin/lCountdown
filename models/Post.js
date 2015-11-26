var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = new Schema({
    name: String,
    wish: String,
    time: { type : Date, default: Date.now }
});

module.exports = mongoose.model('Post', Post);