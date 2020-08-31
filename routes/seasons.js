const router = require('express').Router();
const seasonsCtrl = require('../controllers/seasons');

router.get('/', isLoggedIn, seasonsCtrl.index)
router.get('/:id', isLoggedIn, seasonsCtrl.show);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;