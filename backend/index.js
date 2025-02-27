require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');
const { SignupModel } = require("./model/SignupModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB!");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error("MongoDB Connection Error:", err));

app.post("/register", async (req, res) => {
    try {
        const { number, password } = req.body;

        // Check if the user already exists
        const existingUser = await SignupModel.findOne({ number });
        if (existingUser) {
            return res.status(400).json({ message: "User already registered!" });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new SignupModel({
            number,
            password: hashedPassword
        });

        await newUser.save();
        res.json({ message: "User registered successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Error registering user", error: err });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { number, password } = req.body;

        const user = await SignupModel.findOne({ number });
        if (!user) {
            return res.status(400).json({ message: "User not found. Please register." });
        }

      
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password!" });
        }

        res.json({ message: "Successfully logged in!" });
    } catch (err) {
        res.status(500).json({ message: "Error during login", error: err });
    }
});
