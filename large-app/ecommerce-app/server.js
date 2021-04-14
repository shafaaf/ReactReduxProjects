const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use this after the variable declaration

const dotenv = require('dotenv');
dotenv.config();
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSSWORD;
const clusterUrl = process.env.CLUSTER_URL;

const url = `mongodb+srv://${username}:${password}@${clusterUrl}/EcommerceApp`

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!");
}).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});

// Product related apis
const Product = mongoose.model("products", new mongoose.Schema({
    _id : {type: String, default: shortid.generate},
    title : String,
    description : String,
    image : String,
    price : Number,
    availableSizes : [String]
}));

app.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});

// Order related apis
const Order = mongoose.model(
    "orders",
    new mongoose.Schema(
        {
            _id: {type: String, default: shortid.generate},
            email: String,
            name: String,
            address: String,
            total: Number,
            cartItems: [
                {
                    _id: String,
                    title: String,
                    price: Number,
                    count: Number,
                },
            ],
        },
        {
            timestamps: true,
        }
    )
);

app.post("/api/orders", async (req, res) => {
    if (!(req.body.name && req.body.email && req.body.address && req.body.total && req.body.cartItems)) {
        return res.send({ message: "Data is required." });
    }
    const order = await Order(req.body).save();
    res.send(order);
});
app.get("/api/orders", async (req, res) => {
    const orders = await Order.find({});
    res.send(orders);
});
app.delete("/api/orders/:id", async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.send(order);
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to ecommerce app" });
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Running server at http://localhost:5000");
});
