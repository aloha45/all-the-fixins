const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema ({
    postedBy: String,
    avatar: String,
    body: String,
    flair: String,
}, {
    timestamps: true,
})

const messageSchema = new Schema ({
    postedBy: String,
    avatar: String,
    title: String,
    body: String,
    flair: String,
    replies: [replySchema],
}, {
    timestamps: true,
})


module.exports = mongoose.model('Message', messageSchema)