const router = require('express').Router();
const usersCtrl = require('../controllers/users');

// GET /users
router.get('/', usersCtrl.index);
router.get('/profile', isLoggedIn, usersCtrl.showProfile);
router.get('/:id', isLoggedIn, usersCtrl.show);
router.put('/profile/:id', isLoggedIn, usersCtrl.update);
router.get('/:id/alliance', isLoggedIn, usersCtrl.alliance)
router.get('/:id/betray', isLoggedIn, usersCtrl.betray)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;
