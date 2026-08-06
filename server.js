require("dotenv").config()

const express = require("express");

const cors = require("cors");

const connectDB = require('./config/db')

const carRoutes = require("./routes/carRoutes");

const logger = require("./middlewares/logger")

const app = express();

connectDB()

app.use(cors());

app.use(express.json());

app.use(logger)

app.use("/cars", carRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});