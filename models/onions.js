const mongoose = require("mongoose")
const onionsSchema = mongoose.Schema({
onions_type: String,
Onions_quantity: String,

onions_cost:  {
    type: Number,
    required: true,
    min: [0, 'Price must be at least 0'],
    max: [100, 'Price cannot exceed 100'],
  }
})
module.exports = mongoose.model("onions", 
onionsSchema)