var express = require('express');
const onions_controllers= require('../controllers/onions');
var router = express.Router();
const passport = require('passport');
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
/* GET onionss */
router.get('/', onions_controllers.onions_view_all_Page);
/* GET detail onions page */
router.get('/detail', secured,  onions_controllers.onions_view_one_Page);
/* GET create onions page */
router.get('/create', secured,  onions_controllers.onions_create_Page);
/* GET create update page */
router.get('/update', secured, onions_controllers.onions_update_Page);
/* GET delete onions page */
router.get('/delete', secured,  onions_controllers.onions_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });   

module.exports = router;
