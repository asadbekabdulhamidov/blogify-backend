// Bazaga qo'shiladigan namunaviy postlar (npm run seed)
// Yangi post qo'shish uchun shu ro'yxatga yana bitta obyekt yozing.

const img = (n) => `https://picsum.photos/seed/blogify${n}/1200/700`;

module.exports = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development in 2024.",
    category: "Technology",
    image: img(1),
    views: 1240,
    createdAt: "2025-11-20",
    content: `The landscape of web development is constantly evolving, and 2024 promises to bring exciting new changes that will shape how we build and interact with web applications.

## The Rise of AI Integration
Artificial intelligence is becoming increasingly integrated into web applications, from chatbots and recommendation systems to advanced analytics and personalization features. This trend is only expected to grow as AI technologies become more accessible.

## Modern Frameworks and Tools
The rise of modern frameworks like React, Vue, and Svelte has revolutionized how developers approach building user interfaces. These tools provide powerful abstractions that make it easier to create complex, interactive applications while maintaining clean and maintainable code.

## Performance and User Experience
Web performance has become more critical than ever. Users expect lightning-fast load times and smooth interactions. Modern web development focuses heavily on optimizing performance through techniques like code splitting, lazy loading, and efficient caching strategies.

## Web3 and Decentralization
The concept of Web3 and decentralized applications is gaining traction. Blockchain technology is being explored for various use cases beyond cryptocurrency, including identity management, content distribution, and more.

## Conclusion
The future of web development is bright and full of possibilities. By staying up-to-date with the latest technologies and best practices, developers can create amazing experiences that push the boundaries of what's possible on the web.`,
  },
  {
    title: "Mastering Productivity",
    excerpt: "Proven strategies and tools to boost your productivity and achieve your goals faster.",
    category: "Productivity",
    image: img(2),
    views: 860,
    createdAt: "2025-11-18",
    content: `Productivity is not about doing more things — it is about doing the right things consistently.

## Start With One Priority
Every morning, choose the single most important task of the day and finish it before checking messages. One finished task is worth more than ten started ones.

## Time Blocking
Split your day into focused blocks of 60–90 minutes. During a block, close extra tabs, silence your phone and work on one thing only.

## Use Simple Tools
A notebook, a calendar and a to-do app are enough. The best system is the one you actually use every day.

## Rest Is Part of the Work
Sleep, sport and short breaks keep your mind sharp. Burnout is the biggest enemy of long-term productivity.

## Conclusion
Small habits, repeated daily, create big results. Pick one idea from this post and try it this week.`,
  },
  {
    title: "Design Principles That Matter",
    excerpt: "Essential design principles every creator should know to build stunning user experiences.",
    category: "Design",
    image: img(3),
    views: 640,
    createdAt: "2025-11-15",
    content: `Good design is invisible: users simply feel that everything works the way they expect.

## Hierarchy
Make the most important element the most visible. Size, color and spacing tell the user where to look first.

## Consistency
Use the same buttons, colors and fonts across every page. Consistency builds trust and makes an interface easier to learn.

## White Space
Empty space is not wasted space. It gives content room to breathe and makes reading comfortable.

## Feedback
Every action needs a reaction — a loading spinner, a success message, a hover state. Users should never wonder whether something happened.

## Conclusion
Master these basics before chasing trends. Strong fundamentals make every design better.`,
  },
  {
    title: "Building Scalable Applications",
    excerpt: "Learn how to architect and build applications that can scale to millions of users.",
    category: "Technology",
    image: img(4),
    views: 520,
    createdAt: "2025-11-12",
    content: `Scalability is the ability of your application to handle more users without breaking or slowing down.

## Start Simple
Don't build for millions of users on day one. A clean, well-organized monolith is easier to scale later than a messy set of microservices.

## Use the Database Wisely
Add indexes to fields you search often, avoid loading data you don't need, and paginate long lists.

## Cache What You Can
Frequently requested data can be stored in memory (for example with Redis) so the database isn't hit on every request.

## Go Serverless
Platforms like Vercel automatically run more copies of your code when traffic grows, so you don't have to manage servers yourself.

## Conclusion
Scalability is a journey. Measure first, then improve the slowest part.`,
  },
  {
    title: "The Art of Remote Work",
    excerpt: "Tips and best practices for thriving in a remote work environment.",
    category: "Productivity",
    image: img(5),
    views: 410,
    createdAt: "2025-11-10",
    content: `Remote work gives freedom, but it also needs discipline.

## Create a Workspace
Work from the same desk every day. Your brain will connect that place with focus.

## Keep a Routine
Start and finish at the same time. Dress as if you were going to the office — it really helps.

## Communicate Clearly
Write short, clear messages and share progress often. In remote teams, silence is easily misunderstood.

## Stay Connected
Schedule video calls with colleagues, not only for work. Human connection prevents loneliness.

## Conclusion
With the right habits, remote work can be the most productive way to work.`,
  },
  {
    title: "Color Theory in Digital Design",
    excerpt: "Understanding how color affects user perception and behavior in digital products.",
    category: "Design",
    image: img(6),
    views: 330,
    createdAt: "2025-11-08",
    content: `Colors carry meaning. The right palette improves usability and creates emotion.

## The 60-30-10 Rule
Use a main color for 60% of the interface, a secondary color for 30% and an accent color for 10% — usually buttons and links.

## Meaning of Colors
Blue feels calm and trustworthy, green means success, red signals danger or errors, and yellow draws attention.

## Contrast and Accessibility
Text must be readable for everyone. Check contrast ratios so people with weak eyesight can use your product too.

## Conclusion
Start with a small palette and use it consistently. Less is usually more.`,
  },
  {
    title: "Getting Started with Node.js",
    excerpt: "A beginner-friendly introduction to building your first backend with Node.js and Express.",
    category: "Technology",
    image: img(7),
    views: 290,
    createdAt: "2025-11-06",
    content: `Node.js lets you run JavaScript on the server. If you already know frontend JavaScript, you are halfway to becoming a fullstack developer.

## Why Node.js?
One language for frontend and backend, a huge npm ecosystem, and great performance for APIs.

## Your First Server
With Express you can create an API in a few lines: install express, create an app, define a route and call listen().

## Connecting a Database
MongoDB with Mongoose is a popular choice for beginners because data is stored as JSON-like documents.

## Conclusion
Build a small project — like this blog — and you will learn more than from any tutorial.`,
  },
  {
    title: "Why Every Developer Should Learn Git",
    excerpt: "Version control is a must-have skill. Here is why Git will save your projects.",
    category: "Technology",
    image: img(8),
    views: 210,
    createdAt: "2025-11-04",
    content: `Git is a time machine for your code.

## Never Lose Work
Every commit is a saved snapshot. If something breaks, you can go back to a working version in seconds.

## Work in a Team
Branches let several developers work on different features at the same time without disturbing each other.

## Deploy Easily
Services like Vercel deploy your project automatically every time you push to GitHub.

## Conclusion
Learn the basic commands — add, commit, push, pull — and use them in every project.`,
  },
  {
    title: "Deep Work: Focus in a Distracted World",
    excerpt: "How to train your attention and do your best work without constant interruptions.",
    category: "Productivity",
    image: img(9),
    views: 150,
    createdAt: "2025-11-02",
    content: `Deep work is the ability to focus without distraction on a difficult task.

## Remove Distractions
Turn off notifications and put your phone in another room during focus sessions.

## Train Your Focus
Start with 25 minutes of uninterrupted work and increase the time gradually.

## Plan Shallow Work
Answer messages and emails in fixed time slots instead of all day long.

## Conclusion
Focus is a skill. The more you practise, the stronger it becomes.`,
  },
  {
    title: "Typography Basics for Web Designers",
    excerpt: "Choosing and pairing fonts that make your website clear, readable and beautiful.",
    category: "Design",
    image: img(10),
    status: "Draft",
    views: 0,
    createdAt: "2025-11-01",
    content: `Typography is about 90% of web design, because most of the web is text.

## Choose Readable Fonts
For body text, pick simple sans-serif or serif fonts with comfortable letter spacing.

## Limit Font Families
Two fonts are usually enough: one for headings and one for body text.

## Size and Line Height
Use at least 16px for body text and a line height around 1.5 for easy reading.

## Conclusion
Good typography makes content easy to read — and that is the main job of any website.`,
  },
];
