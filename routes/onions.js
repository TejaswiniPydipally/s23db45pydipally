var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('onions', { title: 'Search Results onions' });
});

module.exports = router;
