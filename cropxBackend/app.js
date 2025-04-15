const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

const roleRoutes = require("./src/routes/RoleRoutes")
app.use(roleRoutes)

const userRoutes = require("./src/routes/UserRoutes")
app.use(userRoutes)

const productRoutes =require('./src/routes/ProductRoutes')
app.use('/product',productRoutes)

const categoryRoutes = require('./src/routes/CategoryRoutes')
app.use('/category' , categoryRoutes)

const subcategoryRoutes = require('./src/routes/SubcategoryRoutes')
app.use('/subcategory',subcategoryRoutes)

const orderRoutes = require('./src/routes/OrderRoutes')
app.use('/order',orderRoutes)

const CartRoutes = require('./src/routes/CartRoutes')
app.use(CartRoutes)

app.use((req, res, next) => {
  console.log(`➡️ Incoming Request: ${req.method} ${req.url}`);
  console.log("📩 Request Body:", req.body);
  next();
});

mongoose.connect("mongodb://127.0.0.1:27017/Crop").then(() => {
  console.log("database connected");
})

const PORT = 5000
app.listen(PORT, () => {
    console.log("Server started on port number" , PORT);
}) 