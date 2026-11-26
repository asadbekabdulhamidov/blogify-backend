# Blogify Backend

Figma dizayndagi Blogify sayti uchun oddiy backend.
**Express + JSON fayl + JWT**. Baza (MongoDB) kerak emas, Vercel'ga hech qanday sozlamasiz deploy qilinadi.

## Papkalar tuzilishi

```
blogify-back/
├── api/index.js          ← Vercel shu faylni ishga tushiradi
├── server.js             ← kompyuterda ishga tushirish uchun
├── vercel.json
├── data/posts.json       ← barcha postlar shu yerda (20 ta)
└── src/
    ├── app.js            ← express ilova, barcha yo'llar shu yerda ulanadi
    ├── config.js         ← admin login/parol, JWT kaliti
    ├── store.js          ← posts.json ni o'qish va yozish
    ├── swagger.js        ← Swagger hujjati (/api/docs)
    ├── middleware/auth.js← token tekshirish
    └── routes/           ← auth, posts, categories, stats
```

## Ishga tushirish

```bash
npm install
npm run dev    # http://localhost:5000
```

`.env` fayl ixtiyoriy. Berilmasa: login `admin`, parol `admin123`.

## Vercel'ga deploy

GitHub'ga push qiling → Vercel'da **Add New → Project** → repozitoriyni tanlang → **Deploy**. Tamom.

Xohlasangiz **Settings → Environment Variables** ga `ADMIN_PASSWORD` va `JWT_SECRET` qo'yib, parolni o'zgartirishingiz mumkin (keyin **Redeploy**).

## ⚠️ Muhim: Vercel'da ma'lumot saqlanishi

- **Kompyuterda** post qo'shsangiz, tahrirlasangiz yoki o'chirsangiz — `data/posts.json` fayli o'zgaradi.
- **Vercel'da** fayl yozib bo'lmaydi. Yangi/tahrirlangan postlar faqat server xotirasida turadi va
  server qayta ishga tushganda (bir necha daqiqa so'rov bo'lmasa yoki qayta deploy qilinganda) **asl `posts.json` holatiga qaytadi**.

O'quv loyihasi uchun bu yetarli: frontendda CRUD'ni sinab ko'rish mumkin.
Doimiy postlar kerak bo'lsa, ularni `data/posts.json` ga qo'shib, GitHub'ga push qiling.

## API yo'llari

📘 **Swagger:** brauzerda `/api/docs` ni oching (masalan `http://localhost:5000/api/docs`).
Token kerak bo'lsa, login qilib olingan tokenni **Authorize** tugmasiga yozing.

🔒 — admin token kerak (`Authorization: Bearer <token>`)

| Metod | Yo'l | Nima qiladi | Dizayndagi joyi |
|---|---|---|---|
| POST | `/api/auth/login` | Kirish `{login, password}` → `{ token }` | Login |
| GET | `/api/posts` | Postlar ro'yxati | Home, Posts |
| GET | `/api/posts/:id` | Bitta post + `related` (3 ta) | Post sahifasi |
| POST | `/api/posts` 🔒 | Yangi post | Create Post |
| PUT | `/api/posts/:id` 🔒 | Postni tahrirlash | Edit |
| DELETE | `/api/posts/:id` 🔒 | Postni o'chirish | Delete |
| GET | `/api/categories` | Kategoriyalar va soni | Categories tablari |
| GET | `/api/stats` 🔒 | Total Posts, Total Views, Published/Draft | Admin Dashboard |

**`/api/posts` parametrlari:** `?search=web&category=Design&page=1&limit=9`
(`category=all` — hammasi). Admin token bilan so'rasa Draft postlar ham keladi (`?status=Draft`).

**Post maydonlari:** `id`, `title`, `excerpt`, `content`, `category` (Technology | Productivity | Design),
`image` (rasm URL), `status` (Published | Draft), `views`, `author`, `createdAt`, `updatedAt`.

> 💡 Logout uchun frontendda tokenni `localStorage`dan o'chirish kifoya.

## Frontenddan misol

```js
const API = "https://blogify-oquvchi.vercel.app";

// Postlar
const res = await fetch(`${API}/api/posts?category=Design`);
const { posts } = await res.json();

// Login
const login = await fetch(`${API}/api/auth/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ login: "admin", password: "admin123" }),
});
const { token } = await login.json();
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
