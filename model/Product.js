const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
  name: {
    type: String
  },
  categoryID:{
     type:String
  },
  restaurantID:{
    type:String
  },
  description:{
    type:String
  },
  price:{
    type:String
  },
  img:{
      type:String
  },
  uploaded:{
      type:Date,default: Date.now
  }
}, {
  collection: 'products'
})

module.exports = mongoose.model('Product', Product)