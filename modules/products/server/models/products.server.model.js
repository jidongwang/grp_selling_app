'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
  name: {
    type: String,
    default: '',
    trim: true,
    required: 'name cannot be blank',
    max: 15
    // validate: [validation.len(40), 'name must be 40 chars in length or less']
  },
  description: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
    // , required: 'invalid category' // TODO: make tests pass valid category
  },
    // quantityPerUnit: {
    //    type: String
    // },
  unitPrice: {
    type: Number,
    default: 0
  },
  unitsInStock: {
    type: Number,
    default: 0,
    min: 0
  },
    // unitsOnOrder: {
    //    type: Number,
    //    default: 0,
    //    min: 0
    // },
  discontinued: {
    type: Boolean,
    default: false
  },
  seller: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Product', ProductSchema);
