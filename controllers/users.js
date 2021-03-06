const User = require('../models/user');

module.exports = {
  index,
  showProfile,
  update,
  show,
  alliance,
  betray
};

function index(req, res) {
  User.find({}).then(users => {
    res.render('users/index', { title: 'Castaways', user: req.user, users })
  })
}

function showProfile (req, res) {
  console.log(req.user)
  User.findById(req.user._id).populate('allianceMembers')
  .then((user) => {
    res.render('users/profile', { 
      title: 'Castaway Profile', 
      user});
  })
}

function update(req, res){
  User.findByIdAndUpdate(req.params.id, req.body, { new: true}).then((result) => {
    res.redirect('/users/profile')
  })
}

function show(req, res){
  User.findById(req.params.id).populate('allianceMembers')
  .then((userInfo) => {
    res.render('users/show', {
      title: 'Castaway Details',
      userInfo,
      user: req.user
    })
  })
}

function alliance(req, res) {
  req.user.allianceMembers.push(req.params.id);
  req.user.save().then(() => {
    res.redirect(`/users/${req.params.id}`);
  });
}

function betray(req, res) {
  let idx = req.user.allianceMembers.indexOf(req.params.id);
  req.user.allianceMembers.splice(idx, 1);
  req.user.save().then(() => {
    res.redirect(`/users/${req.params.id}`)
  })
}