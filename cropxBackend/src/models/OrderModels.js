const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Decimal128 = mongoose.Types.Decimal128;

const orderSchema = new Schema({
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  items: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "products",
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      price: {
        type: Decimal128,
        required: true
      },
      farmerId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
      }
    }
  ],
  totalAmount: {
    type: Decimal128,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("orders", orderSchema);
