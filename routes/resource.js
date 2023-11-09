var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var onions_controller = require('../controllers/onions');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// onions ROUTES ///
// POST request for creating a onions.
router.post('/onions', onions_controller.onions_create_post);
// DELETE request to delete onions.
router.delete('/onions/:id', onions_controller.onions_delete);
// PUT request to update onions.
router.put('/onions/:id', onions_controller.onions_update_put);
// GET request for one onions.
router.get('/onions/:id', onions_controller.onions_detail);
// GET request for list of all onions items.
router.get('/onions', onions_controller.onions_list);
module.exports = router;