var onions = require('../models/onions');
// List of all onions
exports.onions_list = function(req, res) {
res.send('NOT IMPLEMENTED: onions list');
};
// for a specific onions.
exports.onions_detail = function(req, res) {
res.send('NOT IMPLEMENTED: onions detail: ' + req.params.id);
};

// for a specific Costume.
//onions_controller = require('../controllers/onions');
exports.onions_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await onions.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   }
// Handle onions create on POST.
exports.onions_create_post = async function(req, res) {
    console.log(req.body)
let document = new onions();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"onions_type":"goat", "cost":12, "size":"large"}
document.style = req.body.style;
document.color = req.body.color;
document.price = req.body.price;
try{
    let result = await document.save();
    res.send(result);
}
catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
}
};
// Handle onions delete form on DELETE.

exports.onions_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await onions.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.onions_view_one_Page = async function(req, res) {
 console.log("single view for id " + req.query.id)
 try{
 result = await onions.findById( req.query.id)
 res.render('onionsdetail', 
{ title: 'onions Detail', toShow: result });
 }
 catch(err){
 res.status(500)
 res.send(`{'error': '${err}'}`);
 }
};
// Handle Costume update form on PUT.
exports.onions_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body 
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await onions.findById( req.params.id)
    // Do updates of properties
    if(req.body.onions_type) toUpdate.onions_type = req.body.onions_type;
    if(req.body.onions_cost) toUpdate.onions_cost = req.body.onions_cost;
    if(req.body.onions_quantity) toUpdate.onions_quantity = req.body.onions_quantity;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
   failed`);
    }
    };
    

exports.onions_list = async function(req, res) {
    try{
    theonions = await onions.find();
    res.send(theonions);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    exports.onions_view_all_Page = async function(req, res) {
        try{
        theonions = await onions.find();
        res.render('onions', { title: 'onions Search Results', DBresults: theonions });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };