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
  console.log(req.user)
  User.findById(req.user._id)
  .then(() => {
    res.render('users/profile', { 
      title: 'User Profile', 
      user: req.user});
  })
}

function update(req, res){
  User.findByIdAndUpdate(req.params._id, req.body, { new: true})
  console.log('this works')
  .then(() => {
    res.redirect('/users/profile')
  })
}