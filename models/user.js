var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  tribe: String,
  flair: String,
  favoriteSeason: {type: Number, min: 1, max: 40}
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);