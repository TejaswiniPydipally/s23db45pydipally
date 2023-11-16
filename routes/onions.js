var express = require('express');
var router = express.Router();
const onions_controllers = require('../controllers/onions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('onions', { title: 'Search Result onions' });
});

/* GET detail onions page */
router.get('/detail', onions_controllers.onions_view_one_Page);

/* GET create onions page */
router.get('/create', onions_controllers.onions_create_Page);

/* GET create update page */
router.get('/update', onions_controllers.onions_update_Page);

/* GET delete onions page */
router.get('/delete', onions_controllers.onions_delete_Page);
router.get('/create', onions_controllers.onions_create_Page);
/* GET create update page */
router.get('/update', onions_controllers.onions_update_Page);
/* GET delete costume page */
router.get('/delete', onions_controllers.onions_delete_Page);



module.exports = router;
