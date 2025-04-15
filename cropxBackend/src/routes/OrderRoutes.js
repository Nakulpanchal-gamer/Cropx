const routes = require('express').Router()
const orderController  = require("../controller/OrderController")

routes.post('/add' , orderController.addOrder)
routes.get('/order/:id' , orderController.getOrderById)
routes.get('/allorders' , orderController.getAllOrders)
routes.delete('/deleteorder/:id' , orderController.deleteOrderById)
routes.put('/updateorder/:id', orderController.updateOrderStatus); // PUT request to update the status
routes.get('/totalOrders', orderController.getOrderCount);       // Get total orders count
routes.get('/totalRevenue', orderController.getTotalRevenue);   // Get total revenue
routes.get('/pendingOrders', orderController.getPendingOrders); 
routes.get('/deliveredOrders', orderController.getDeliveredOrders); 
routes.get('/buyer/:buyerId', orderController.getOrdersByBuyerId);


module.exports = routes