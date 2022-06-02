const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Category = new Schema({
  name: {
    type: String
  },
  value: {
      type:String
  },
  img:{
      type:String
  },
  uploaded:{
      type:Date,default: Date.now
  }
}, {
  collection: 'categories'
})

module.exports = mongoose.model('Category', Category)