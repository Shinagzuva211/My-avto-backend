require("dotenv").config() // .env faylidagi maxfiy ma'lumotlarni (masalan PORT) yuklaydi.

const express = require("express"); //  Express ramkasini import qiladi.

const cors = require("cors"); // boshqa domendan kelgan so'rovlarga ruxsat beruvchi CORS middleware'ini import qiladi

const connectDB = require('./config/db') // MongoDB'ga ulanish funksiyasini import qiladi (hali chaqirilmagan).

const carRoutes = require("./routes/carRoutes"); // avtomobillar bilan bog'liq marshrutlarni import qiladi.

const logger = require("./middlewares/logger") //  so'rovlarni log qiluvchi middleware'ni import qiladi.

const app = express(); //  Express ilovasini yaratadi.

app.use(cors()); //  barcha so'rovlarga CORS ruxsatini yoqadi.

app.use(express.json()); // so'rovlar body'sini JSON formatida parslaydi.

app.use(logger) // har bir so'rov uchun logger middleware'ni ishga tushiradi.

app.use("/cars", carRoutes); //  barcha /cars bilan boshlanadigan so'rovlarni carRoutes'ga yo'naltiradi.

const PORT = process.env.PORT || 3000; //  portni .env dan oladi, yo'q bo'lsa 3000.

async function startServer() {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}

startServer();