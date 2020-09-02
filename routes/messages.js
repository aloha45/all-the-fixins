const router = require('express').Router();
const messagesCtrl = require('../controllers/messages');

router.get('/', messagesCtrl.index);
router.post('/', messagesCtrl.create);

module.exports = router;