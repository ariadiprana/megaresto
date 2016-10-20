var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/order', function(req, res, next) {
  res.render('order');
});

router.get('/history', function(req, res, next) {
  res.render('history');
});

router.get('/historyadmin', function(req, res, next) {
  res.render('historyAdmin');
});

module.exports = router;
