const express = require('express');
const router = express.Router();
const seasonsCtrl = require('../controllers/api/seasons')

router.get('/seasons', seasonsCtrl.index);
router.get('/seasons/:id', seasonsCtrl.show);
router.post('/seasons', seasonsCtrl.create);
router.put('/seasons/:id', seasonsCtrl.update);
router.delete('/seasons/:id', seasonsCtrl.delete);

module.exports = router;