var express = require('express');
var router = express.Router();
const onions_controllers= require('../controllers/onions'); 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('onions', { title: 'Search Results onions' });
});
var onions_controller = require('../controllers/onions');
router.get('/onions/:id', onions_controller.onions_detail);
/* GET detail costume page */
router.get('/detail', onions_controllers.onions_view_all_Page);

module.exports = router;
