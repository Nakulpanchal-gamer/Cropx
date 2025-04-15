const orderModel = require("../models/OrderModels");
const UserModels = require("../models/UserModels");
const ProductModel = require("../models/ProductModels"); 

const getAllOrders = async(req , res) => {
    try{
        const orders = await orderModel.find().populate('buyerId', 'name email');
res.status(200).json({ success: true, data: orders });

    }catch(err){
        res.status(500).json({ message: "Server Error", error: err.message })
    }
}

const getOrdersByBuyerId = async (req, res) => {
    try {
      const orders = await orderModel.find({ buyerId: req.params.buyerId }).populate("buyerId");
  
      const updatedOrders = orders.map(order => {
        const orderObj = order.toObject();
        orderObj.totalAmount = order.totalAmount.toString();  // Convert Decimal128 to string
        return orderObj;
      });
  
      res.status(200).json({
        message: "Orders fetched successfully for buyer",
        data: updatedOrders
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error", error: err.message });
    }
  };


// const addOrder = async(req, res) => {
//     try{
//     const {buyerId , farmerId , totalAmount , status} = req.body;

//     const buyer = await UserModels.findById(buyerId)
//     // const farmer = await UserModels.findById(farmerId)

//     if(!buyer){
//         return res.status(404).json({message: "Buyer and Farmer not found"})
//     }

//     const newOrder = await orderModel.create({
//         buyerId,
//         farmerId,
//         totalAmount,
//         status: status || "Pending"
//     });
    
//     res.status(201).json({
//         message:"Order Added Successfully",
//         orderId:newOrder._id,
//         data: newOrder
//     })
//     }catch(err){
//         res.status(500).json({message: "Failed to add order", error: err.message})
//         console.log(err);
        
//     }
// }

const addOrder = async (req, res) => {
    try {
      const { buyerId, items, status } = req.body;
  
      if (!buyerId || !items || !items.length) {
        return res.status(400).json({ message: "buyerId and items are required" });
      }
  
      // Check if buyer exists
      const buyer = await UserModels.findById(buyerId);
      if (!buyer) {
        return res.status(404).json({ message: "Buyer not found" });
      }
  
      // Optional: Validate products and farmerIds
      for (const item of items) {
        if (!item.productId || !item.quantity || !item.price || !item.farmerId) {
          return res.status(400).json({ message: "Each item must include productId, quantity, price, and farmerId" });
        }
      }
  
      // Calculate total amount
      const totalAmount = items.reduce((sum, item) => {
        return sum + parseFloat(item.price) * item.quantity;
      }, 0);
  
      const newOrder = await orderModel.create({
        buyerId,
        items,
        totalAmount,
        status: status || "Pending"
      });
  
      res.status(201).json({
        message: "Order Added Successfully",
        orderId: newOrder._id,
        data: newOrder
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to add order", error: err.message });
    }
  };

const getOrderById = async(req ,res) => {
    try{
        const getOrder = await orderModel.findById(req.params.id).populate("buyerId farmerId");
        if (!getOrder) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({
            message:"Order fetched",
            data:getOrder
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const updateOrderStatus = async (req, res) => {
    try {
      const { status } = req.body;
      const orderId = req.params.id;
  
      // Find the order by ID and update the status
      const updatedOrder = await orderModel.findByIdAndUpdate(
        orderId,
        { status }, // Update the status
        { new: true } // This will return the updated document
      );
  
      if (!updatedOrder) {
        return res.status(404).json({ message: "Order not found" });
      }
  
      res.status(200).json({
        message: "Order status updated successfully",
        data: updatedOrder,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  
const deleteOrderById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedOrder = await orderModel.findByIdAndDelete(id);
  
      if (!deletedOrder) {
        return res.status(404).json({ success: false, message: "Order not found" });
      }
  
      res.status(200).json({
        success: true,
        message: "Order deleted successfully",
        data: deletedOrder
      });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  
  const getOrderCount = async (req, res) => {
    try {
      const totalOrders = await orderModel.countDocuments();
      res.status(200).json({ totalOrders });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching total orders' });
    }
  };

  const getTotalRevenue = async (req, res) => {
    try {
      const revenue = await orderModel.aggregate([
        { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } }
      ]);
      res.status(200).json({ totalRevenue: revenue[0]?.totalRevenue || 0 });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching total revenue' });
    }
  };

  const getPendingOrders = async (req, res) => {
    try {
      const pendingOrders = await orderModel.countDocuments({ status: "Pending" });
      res.status(200).json({ pendingOrders });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching pending orders' });
    }
  };

  const getDeliveredOrders = async (req, res) => {
    try {
      const deliveredOrders = await orderModel.countDocuments({ status: "delivered" });
      res.status(200).json({ deliveredOrders });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching pending orders' });
    }
  };
module.exports = {
    addOrder,
    getAllOrders,
    getOrderById,
    deleteOrderById,
    getOrdersByBuyerId,
    updateOrderStatus,
    getOrderCount, getTotalRevenue, getPendingOrders,  getDeliveredOrders
}