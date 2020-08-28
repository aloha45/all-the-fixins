const router = require('express').Router();
const seasonsCtrl = require('../controllers/seasons');

router.get('/', isLoggedIn, seasonsCtrl.index)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;