const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Restaurant = new Schema({
  name: {
    type: String
  },
  rating: {
      type:String
  },
  peopleRated:{
      type:String
  },
  address:{
     type:String
  },
  description:{
    type:String
  },
  img:{
      type:String
  },
  uploaded:{
      type:Date,default: Date.now
  }
}, {
  collection: 'restaurants'
})

module.exports = mongoose.model('Restaurant', Restaurant)