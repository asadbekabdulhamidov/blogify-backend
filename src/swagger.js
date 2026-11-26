// Swagger (OpenAPI) hujjati — brauzerda: /api/docs
const router = require("express").Router();

const postBody = {
  type: "object",
  properties: {
    title: { type: "string", example: "Salom dunyo" },
    excerpt: { type: "string", example: "Qisqa tavsif" },
    content: { type: "string", example: "Postning to'liq matni..." },
    category: { type: "string", enum: ["Technology", "Productivity", "Design"] },
    image: { type: "string", example: "https://picsum.photos/800/500" },
    status: { type: "string", enum: ["Published", "Draft"] },
  },
};

const Post = {
  type: "object",
  properties: {
    id: { type: "string", example: "1" },
    ...postBody.properties,
    views: { type: "number" },
    author: { type: "string", example: "Admin" },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" },
  },
};

const AuthResponse = {
  type: "object",
  properties: { token: { type: "string" } },
};

const json = (schema) => ({ content: { "application/json": { schema } } });
const idParam = { name: "id", in: "path", required: true, schema: { type: "string" } };
const secured = [{ bearerAuth: [] }];

const spec = {
  openapi: "3.0.3",
  info: {
    title: "Blogify API",
    version: "1.0.0",
    description:
      "Blogify uchun backend. 🔒 belgili yo'llar uchun avval /api/auth/login orqali token oling va yuqoridagi **Authorize** tugmasiga yozing.",
  },
  servers: [{ url: "/" }],
  tags: [
    { name: "Auth", description: "Admin login" },
    { name: "Posts", description: "Postlar" },
    { name: "Categories" },
    { name: "Stats", description: "Admin Dashboard" },
  ],
  components: {
    securitySchemes: { bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" } },
    schemas: { Post, PostInput: postBody, AuthResponse },
  },
  paths: {
    "/api/auth/login": {
      post: {
        tags: ["Auth"],
        summary: "Kirish (Login)",
        requestBody: json({
          type: "object",
          required: ["login", "password"],
          properties: {
            login: { type: "string", example: "admin" },
            password: { type: "string", example: "admin123" },
          },
        }),
        responses: { 200: { description: "OK", ...json({ $ref: "#/components/schemas/AuthResponse" }) }, 401: { description: "Login yoki parol noto'g'ri" } },
      },
    },
    "/api/posts": {
      get: {
        tags: ["Posts"],
        summary: "Postlar ro'yxati (qidiruv, kategoriya, sahifalash)",
        parameters: [
          { name: "search", in: "query", schema: { type: "string" }, description: "Sarlavha bo'yicha qidiruv" },
          { name: "category", in: "query", schema: { type: "string", enum: ["all", "Technology", "Productivity", "Design"] } },
          { name: "status", in: "query", schema: { type: "string", enum: ["Published", "Draft"] }, description: "Faqat admin uchun ishlaydi" },
          { name: "page", in: "query", schema: { type: "integer", default: 1 } },
          { name: "limit", in: "query", schema: { type: "integer", default: 9 } },
        ],
        responses: {
          200: {
            description: "OK",
            ...json({
              type: "object",
              properties: {
                posts: { type: "array", items: { $ref: "#/components/schemas/Post" } },
                total: { type: "integer" },
                page: { type: "integer" },
                pages: { type: "integer" },
              },
            }),
          },
        },
      },
      post: {
        tags: ["Posts"],
        summary: "🔒 Yangi post yaratish (admin)",
        security: secured,
        requestBody: json({ ...postBody, required: ["title", "content", "category"] }),
        responses: { 201: { description: "Yaratildi", ...json({ $ref: "#/components/schemas/Post" }) }, 401: { description: "Token yo'q" }, 403: { description: "Admin emas" } },
      },
    },
    "/api/posts/{id}": {
      get: {
        tags: ["Posts"],
        summary: "Bitta post + o'xshash postlar",
        parameters: [idParam],
        responses: {
          200: {
            description: "OK",
            ...json({
              type: "object",
              properties: {
                post: { $ref: "#/components/schemas/Post" },
                related: { type: "array", items: { $ref: "#/components/schemas/Post" } },
              },
            }),
          },
          404: { description: "Topilmadi" },
        },
      },
      put: {
        tags: ["Posts"],
        summary: "🔒 Postni tahrirlash (admin)",
        security: secured,
        parameters: [idParam],
        requestBody: json(postBody),
        responses: { 200: { description: "OK", ...json({ $ref: "#/components/schemas/Post" }) }, 404: { description: "Topilmadi" } },
      },
      delete: {
        tags: ["Posts"],
        summary: "🔒 Postni o'chirish (admin)",
        security: secured,
        parameters: [idParam],
        responses: { 200: { description: "O'chirildi" }, 404: { description: "Topilmadi" } },
      },
    },
    "/api/categories": {
      get: {
        tags: ["Categories"],
        summary: "Kategoriyalar va postlar soni",
        responses: {
          200: {
            description: "OK",
            ...json({ type: "array", items: { type: "object", properties: { name: { type: "string" }, count: { type: "integer" } } } }),
          },
        },
      },
    },
    "/api/stats": {
      get: {
        tags: ["Stats"],
        summary: "🔒 Dashboard statistikasi (admin)",
        security: secured,
        responses: {
          200: {
            description: "OK",
            ...json({
              type: "object",
              properties: {
                totalPosts: { type: "integer" },
                published: { type: "integer" },
                drafts: { type: "integer" },
                totalViews: { type: "integer" },
                recentPosts: { type: "array", items: { $ref: "#/components/schemas/Post" } },
              },
            }),
          },
        },
      },
    },
  },
};

// JSON ko'rinishi: /api/docs.json
router.get("/docs.json", (req, res) => res.json(spec));

// Swagger UI sahifasi: /api/docs  (CDN orqali — Vercel'da ham ishlaydi)
router.get("/docs", (req, res) => {
  res.send(`<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Blogify API Docs</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui.css" />
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui-bundle.js"></script>
  <script>
    SwaggerUIBundle({ url: "/api/docs.json", dom_id: "#swagger-ui", persistAuthorization: true });
  </script>
</body>
</html>`);
});

module.exports = router;
