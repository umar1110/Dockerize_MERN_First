const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const connectDB = require('./config/connect_db.js');

const app = express();


try {
    connectDB();
} catch (error) {
    console.error("Database connection failed:", error);
}

app.use(express.json()); // Middleware to parse JSON bodies
app.get("/", (req, res) => {
    return res.status(200).json({ success: true, message: "Welcome to the API" });
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
