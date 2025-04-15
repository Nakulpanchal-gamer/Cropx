const routes = require("express").Router()
const userController = require('../controller/UserController')
routes.get("/users",userController.getAllUser)
// routes.post("/user" , userController.addUser)
routes.post("/user" , userController.signUp)
routes.delete("/user/:id",userController.deleteUser)
routes.get("/user/:id" , userController.findUser)
routes.post("/user/login" , userController.loginUser)
routes.post("/user/forgotpassword" , userController.forgotPassword)
routes.put("/user/resetpassword" , userController.resetPassword)


// Admin Dashboard related routes for users
// routes.get("/users/count/buyers", userController.getBuyerCount);
routes.get("/users/count", userController.getTotalUserCount);



module.exports = routes 