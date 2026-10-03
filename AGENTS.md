# Hodiy-avto-api

Express + MongoDB asosidagi avtosalon API'si. Groq AI integratsiyasi mavjud.

## Buyruqlar

- `npm run dev` — serverni watch rejimida ishga tushirish (http://localhost:3000)
- `npm start` — oddiy rejimda ishga tushirish
- Testlar hozircha yo'q (`npm test` ishlamaydi)

## Tuzilma

- `server.js` — kirish nuqtasi. Middleware'lar va route'larni ulaydi. MongoDB ulanmaguncha server ochilmaydi
- `routes/` — marshrutlar: `carRoutes.js` (/cars), `aiRoutes.js` (/ai)
- `controllers/` — so'rov logikasi: `carController.js`, `aiController.js`
- `models/` — Mongoose schemalari: `Car.js`
- `middlewares/` — `logger.js` (so'rov loglari), `validateCar.js` (validatsiya)
- `config/db.js` — MongoDB ulanishi (`MONGO_URI`)
- `ai/aiService.js` — Groq integratsiyasi (groq-sdk, model: `openai/gpt-oss-20b`)
- `data/` — statik ma'lumotlar

## Konventsiyalar

- CommonJS ishlatiladi (`require` / `module.exports`), ESM yo'q
- Izohlar o'zbek tilida yoziladi
- Xatolar `{ message }` formatida JSON qaytariladi
- Validatsiya xatolari 400, server xatolari 500 status bilan qaytadi

## Muhim eslatmalar

- `.env` faylida kerakli o'zgaruvchilar: `PORT`, `MONGO_URI`, `GROQ_API_KEY`
- `.env` git kuzatuvidan tashqarida (`.gitignore`da) — uni hech qachon commit qilmaslik kerak
- AI so'rovlari: `POST /ai` → `{"prompt": "..."}` → `{"response": "..."}`
- Groq model nomini o'zgartirishdan oldin kalit ochadigan modellar ro'yxatini tekshirish kerak

## Cheklovlar

- Foydalanuvchi aniq so'ramaguncha `git commit` / `git push` qilmang
- `.env` va `node_modules`ga tegmang
- Yangi paket o'rnatishdan oldin foydalanuvchidan ruxsat so'rang
