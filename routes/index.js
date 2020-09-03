const router = require('express').Router();

router.get('/', function (req,res) {
    res.render('index', { title: "Welcome to All-the Fixins", user: req.user ? req.user : null });
});

module.exports = router;