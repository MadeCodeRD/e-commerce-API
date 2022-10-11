const mongoose = require('mongoose');

const SingleOrderItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    product:{
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

const OrderSchema = mongoose.Schema({
  tax: {
    type: Number,
    require: true,
  },
  shippingFee: {
    type: Number,
    require: true,
  },
  subTotal: {
    type: Number,
    require: true,
  },
  total: {
    type: Number,
    require: true,
  },
  orderItems: [SingleOrderItemSchema],
  status:{
    type: String,
    enum: ['pending', 'failed', 'paid', 'delivered', 'canceled'],
    default: 'pending'
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  clientSecret: {
    type: String,
    required: true,
  },
  paymentIntentId: {
    type: String
  },
}, {timestamps: true});


module.exports = mongoose.model('Order', OrderSchema);