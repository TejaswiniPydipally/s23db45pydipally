const mongoose = require("mongoose")
const onionsSchema = mongoose.Schema({
onions_type: String,
Onions_quantity: String,
onions_cost: Number
})
module.exports = mongoose.model("onions", 
onionsSchema)