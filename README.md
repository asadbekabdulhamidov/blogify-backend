# Blogify Backend

Figma dizayndagi Blogify sayti uchun oddiy backend.
**Express + MongoDB (Mongoose) + JWT**. Vercel'ga to'g'ridan-to'g'ri deploy qilinadi.

## Papkalar tuzilishi

```
blogify-back/
├── api/index.js          ← Vercel shu faylni ishga tushiradi
├── server.js             ← kompyuterda ishga tushirish uchun
├── seed.js               ← namunaviy postlarni bazaga yozish
├── data/posts.js         ← 10 ta namunaviy post
├── vercel.json
└── src/
    ├── app.js            ← express ilova, barcha yo'llar shu yerda ulanadi
    ├── db.js             ← MongoDB'ga ulanish
    ├── swagger.js        ← Swagger hujjati (/api/docs)
    ├── middleware/auth.js← token tekshirish, admin tekshirish
    ├── models/           ← Post
    └── routes/           ← auth, posts, categories, stats
```

## 1. Ishga tushirish (kompyuterda)

1. [MongoDB Atlas](https://www.mongodb.com/atlas)'da bepul cluster oching va ulanish havolasini (connection string) oling.
   *Network Access* bo'limida `0.0.0.0/0` ni qo'shing (Vercel ham ulana olishi uchun).
2. `.env.example` faylidan nusxa olib, `.env` deb nomlang va qiymatlarni to'ldiring.
3. Terminalda:

```bash
npm install
npm run seed   # 10 ta namunaviy post
npm run dev    # http://localhost:5000
```

## 2. Vercel'ga deploy

1. Loyihani GitHub'ga yuklang (`.env` yuklanmaydi — `.gitignore`da bor).
2. [vercel.com](https://vercel.com) → **Add New → Project** → repozitoriyni tanlang.
3. **Environment Variables** bo'limiga `MONGODB_URI`, `JWT_SECRET`, `ADMIN_LOGIN`, `ADMIN_PASSWORD` ni qo'shing.
4. **Deploy** tugmasini bosing. Tayyor: `https://sizning-loyiha.vercel.app/api/posts`

## API yo'llari

📘 **Swagger:** server ishlayotganda brauzerda `/api/docs` ni oching (masalan `http://localhost:5000/api/docs`).
U yerda har bir yo'lni sinab ko'rish mumkin. Token kerak bo'lsa, login qilib olingan tokenni **Authorize** tugmasiga yozing.

🔒 — token kerak (`Authorization: Bearer <token>`), 👑 — faqat admin

| Metod | Yo'l | Nima qiladi | Dizayndagi joyi |
|---|---|---|---|
| POST | `/api/auth/login` | Kirish `{login, password}` → `{ token }` | Login |
| GET | `/api/posts` | Postlar ro'yxati | Home, Posts |
| GET | `/api/posts/:id` | Bitta post + `related` (3 ta) | Post sahifasi |
| POST | `/api/posts` 🔒👑 | Yangi post | Create Post |
| PUT | `/api/posts/:id` 🔒👑 | Postni tahrirlash | Edit |
| DELETE | `/api/posts/:id` 🔒👑 | Postni o'chirish | Delete |
| GET | `/api/categories` | Kategoriyalar va soni | Categories tablari |
| GET | `/api/stats` 🔒👑 | Total Posts, Total Views, Published/Draft | Admin Dashboard |

**`/api/posts` parametrlari:** `?search=web&category=Design&page=1&limit=9`
(`category=all` — hammasi). Admin token bilan so'rasa Draft postlar ham keladi (`?status=Draft`).

**Post maydonlari:** `title`, `excerpt`, `content`, `category` (Technology | Productivity | Design),
`image` (rasm URL), `status` (Published | Draft). `views` va sana (`createdAt`) avtomatik.

> 💡 Loyihada bitta admin bor. Login va parol `.env` dagi `ADMIN_LOGIN` / `ADMIN_PASSWORD` (berilmasa `admin` / `admin123`).
> Ro'yxatdan o'tish yo'q. Logout uchun frontendda tokenni `localStorage`dan o'chirish kifoya.

> 💡 Rasm: Vercel fayl saqlamaydi, shuning uchun `image` maydoniga tayyor rasm havolasi (URL) yoziladi.
> Frontendda rasmni Cloudinary yoki ImgBB'ga yuklab, havolasini yuborish mumkin.

## Frontenddan misol

```js
const API = "https://sizning-loyiha.vercel.app";

// Login
const res = await fetch(`${API}/api/auth/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ login: "admin", password: "admin123" }),
});
const { token } = await res.json();
localStorage.setItem("token", token);

// Post yaratish
await fetch(`${API}/api/posts`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  body: JSON.stringify({ title: "Salom", content: "Matn...", category: "Technology" }),
});
```
