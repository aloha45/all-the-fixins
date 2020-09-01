const User = require('../models/user');

module.exports = {
  index,
  show,
  update
};

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { title: 'User Index', user: req.user, users })
  })
}

function show (req, res) {
  User.findById(req.user._id)
  .then((user) => {
    console.log(user)
    res.render('users/profile', { 
      title: 'User Profile', 
      user: req.user});
  })
}

function update(req, res){
  User.findByIdAndUpdate(req.user._id, req.body, { new: true})
  .then(() => {
    res.redirect('/users/profile')
  })
  .catch((err) => {
    console.log(err)
  })
}