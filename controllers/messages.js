const Message = require('../models/message');
const { deleteOne } = require('../models/message');

module.exports = {
    index,
    create,
    show,
    reply,
    delete: deleteMessage,
    update
}

function index (req, res) {
    Message.find({})
    .then ((messages) => {
        res.render("messages/index", {
            title: "Message Board",
            user: req.user, 
            messages: messages.reverse()
        })
    })
}

function create (req, res) {
    req.body.postedBy = req.user.name;
    req.body.avatar = req.user.avatar;
    Message.create(req.body)
    .then(() => {
        res.redirect('/messages');
    });
}

function show (req, res) {
    Message.findById(req.params.id)
    .then((message) => {
        res.render('messages/show', {
            title: 'Message Details',
            user: req.user,
            message
        });
    });
}

function reply (req, res) {
    Message.findById(req.params.id)
    .then((message) => {
        req.body.postedBy = req.user.name;
        req.body.avatar = req.user.avatar;
        message.replies.push(req.body);
        message.save().then(() => {
            res.redirect(`/messages/${req.params.id}`)
        });
    });
};

function deleteMessage (req, res) {
    Message.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/messages');
    });
};

function update (req, res) {
    res.render('messages/edit', {
        title: 'Edit Message',
        user: req.user,
        id: req.params.id,
        message: req.body,
    });
};