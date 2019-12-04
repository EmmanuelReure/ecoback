var mongoose = require('../models/bdd');

// Creation of a new schema for our shops
var shopSchema = mongoose.Schema({
  category: String,
  name: String,
  address: String,
  zipCode: String,
  city: String,
  latitude: Number,
  longitude: Number,
  phone: Number,
  Desc: String,
  webLink: String,
  facebookLink: String,
  instagramLink: String,

});

// Creation of a new model for our shops
var shopModel = mongoose.model('shop', shopSchema);

module.exports = shopModel;