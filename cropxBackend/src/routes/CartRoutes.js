const express = require('express');
const mongoose = require('mongoose');
const Cart = require('../models/CartModel');
const Product = require('../models/ProductModels');

const router = express.Router();

// Add a product to the cart
router.post('/add-to-cart', async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (cart) {
      const existingProduct = cart.products.find(item => item.product.toString() === productId);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.products.push({ product: productId, quantity });
      }
      await cart.save();
      return res.status(200).json({ message: 'Product added to cart', cart });
    } else {
      const newCart = new Cart({
        userId,
        products: [{ product: productId, quantity }],
      });
      await newCart.save();
      return res.status(201).json({ message: 'Cart created and product added', cart: newCart });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error adding to cart', error });
  }
});

// Remove product from cart
router.delete('/remove-from-cart', async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (cart) {
      cart.products = cart.products.filter(item => item.product.toString() !== productId);
      await cart.save();
      return res.status(200).json({ message: 'Product removed from cart', cart });
    } else {
      return res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error removing from cart', error });
  }
});

// Get the user's cart
router.get('/get-cart/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId }).populate('products.product');
    if (cart) {
      return res.status(200).json({ cart });
    } else {
      return res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching cart', error });
  }
});

module.exports = router;
