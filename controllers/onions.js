var onions = require('../models/onions');
// List of all onions
exports.onions_list = function(req, res) {
res.send('NOT IMPLEMENTED: onions list');
};
// for a specific onions.
exports.onions_detail = function(req, res) {
res.send('NOT IMPLEMENTED: onions detail: ' + req.params.id);
};
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
exports.onions_delete = function(req, res) {
res.send('NOT IMPLEMENTED: onions delete DELETE ' + req.params.id);
};
// Handle onions update form on PUT.
exports.onions_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: onions update PUT' + req.params.id);
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