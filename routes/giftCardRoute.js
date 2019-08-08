'use strict'

var express  =  require('express');
var giftController = require('../controllers/giftCardController');
var router = express.Router();

router.get('/home',giftController.home);
router.post('/test',giftController.test);
router.post('/gift-card/store', giftController.store);
router.get('/gift-card/:id?', giftController.getGiftCardEdit);
router.get('/cards/list', giftController.CardList);



module.exports = router;