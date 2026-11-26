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
  {
    title: "React Hooks Explained Simply",
    excerpt: "useState, useEffect and custom hooks explained with simple examples for beginners.",
    category: "Technology",
    image: img(11),
    views: 980,
    createdAt: "2025-10-30",
    content: `Hooks let you use state and other React features inside function components.

## useState
useState stores a value that can change, like a counter or the text in an input. When the value changes, React re-renders the component.

## useEffect
useEffect runs code after rendering — for example, loading data from an API or setting a timer.

## Custom Hooks
When you repeat the same logic in several components, move it into your own hook, like useFetch or useLocalStorage.

## Conclusion
Master useState and useEffect first. They cover most of what you need in everyday React work.`,
  },
  {
    title: "REST API Design Best Practices",
    excerpt: "How to design clean, predictable APIs that frontend developers will love to use.",
    category: "Technology",
    image: img(12),
    views: 730,
    createdAt: "2025-10-28",
    content: `A good API is easy to understand without reading the documentation twice.

## Use Nouns for Routes
Use /posts and /posts/:id instead of /getPosts or /deletePost. The HTTP method already says what happens.

## Use the Right Methods
GET reads data, POST creates, PUT updates and DELETE removes. Keep it consistent across the whole API.

## Return Clear Status Codes
200 for success, 201 for created, 400 for bad input, 401 for not logged in, 404 for not found.

## Document Everything
Tools like Swagger let other developers try your API right in the browser.

## Conclusion
Predictable APIs save time for everyone on the team.`,
  },
  {
    title: "CSS Flexbox vs Grid",
    excerpt: "When to use Flexbox, when to use Grid, and how to combine them in real layouts.",
    category: "Design",
    image: img(13),
    views: 610,
    createdAt: "2025-10-26",
    content: `Flexbox and Grid are both powerful, but they solve different problems.

## Flexbox: One Direction
Flexbox is perfect for laying items out in a row or a column — navigation bars, buttons, card content.

## Grid: Two Directions
Grid controls rows and columns at the same time. It is ideal for page layouts and card galleries.

## Use Them Together
A common pattern: Grid for the page structure, Flexbox inside each card.

## Conclusion
Don't choose one forever. Learn both and pick the right tool for each part of the page.`,
  },
  {
    title: "Morning Routines of Successful People",
    excerpt: "Simple morning habits that set the tone for a focused and productive day.",
    category: "Productivity",
    image: img(14),
    views: 570,
    createdAt: "2025-10-24",
    content: `How you start your morning often decides how the whole day goes.

## Wake Up at the Same Time
A stable wake-up time keeps your energy steady during the week.

## Move Your Body
A short workout, a walk or a few minutes of stretching wakes up both body and mind.

## Plan Before You Check Your Phone
Spend five minutes writing down the three most important tasks of the day before opening social media.

## Conclusion
You don't need a perfect two-hour routine. Start with one small habit and keep it.`,
  },
  {
    title: "UX Writing: Words That Guide Users",
    excerpt: "Why button labels, error messages and hints matter as much as visual design.",
    category: "Design",
    image: img(15),
    views: 440,
    createdAt: "2025-10-22",
    content: `Users read words before they notice colors and shapes.

## Be Clear, Not Clever
"Save changes" is better than "Let's go!". Users should know exactly what will happen.

## Write Helpful Errors
Instead of "Error 400", say "Please enter a valid email address".

## Keep It Short
Remove every word that does not help the user take the next step.

## Conclusion
Good UX writing makes an interface feel friendly and easy to use.`,
  },
  {
    title: "JavaScript Async/Await in 5 Minutes",
    excerpt: "Understand promises and async/await with simple, practical examples.",
    category: "Technology",
    image: img(16),
    views: 890,
    createdAt: "2025-10-20",
    content: `Many things in JavaScript take time: loading data, reading files, waiting for a timer.

## Promises
A promise is a value that will be ready later. It can succeed (resolve) or fail (reject).

## Async/Await
The await keyword pauses a function until the promise is ready, so asynchronous code reads like normal code.

## Handling Errors
Wrap await calls in try/catch to handle failed requests gracefully.

## Conclusion
Once async/await clicks, working with APIs becomes much easier.`,
  },
  {
    title: "How to Stop Procrastinating",
    excerpt: "Practical tricks to start tasks you keep postponing — and actually finish them.",
    category: "Productivity",
    image: img(17),
    views: 760,
    createdAt: "2025-10-18",
    content: `Procrastination is rarely about laziness. It is usually about a task feeling too big or unclear.

## The Two-Minute Rule
If something takes less than two minutes, do it now.

## Make the First Step Tiny
Instead of "build the website", start with "create the project folder".

## Use a Timer
Work for 25 minutes, then take a 5-minute break. Starting is easier when the end is visible.

## Conclusion
Action creates motivation, not the other way around. Start small and keep moving.`,
  },
  {
    title: "Designing for Mobile First",
    excerpt: "Why starting with the smallest screen leads to better designs on every device.",
    category: "Design",
    image: img(18),
    views: 380,
    createdAt: "2025-10-16",
    content: `Most people visit websites from their phones. Designing for mobile first puts them at the center.

## Focus on What Matters
A small screen forces you to choose the most important content and remove the rest.

## Make Touch Targets Big
Buttons and links should be at least 44px tall so they are easy to tap.

## Scale Up, Not Down
Adding space and columns for larger screens is easier than squeezing a desktop design onto a phone.

## Conclusion
Mobile-first design leads to simpler, faster and more focused products.`,
  },
  {
    title: "MongoDB for Beginners",
    excerpt: "Documents, collections and queries — everything you need to start with MongoDB.",
    category: "Technology",
    image: img(19),
    views: 520,
    createdAt: "2025-10-14",
    content: `MongoDB stores data as JSON-like documents, which feels natural for JavaScript developers.

## Documents and Collections
A document is one record, like a single blog post. A collection is a group of documents, like all posts.

## Basic Queries
find() reads documents, insertOne() adds a new one, updateOne() changes it and deleteOne() removes it.

## Mongoose
Mongoose adds schemas and validation on top of MongoDB, so your data always has the right shape.

## Conclusion
With MongoDB Atlas you can create a free database in minutes and connect it to your Node.js app.`,
  },
  {
    title: "Building a Personal Brand as a Developer",
    excerpt: "Share what you learn, build in public and let opportunities find you.",
    category: "Productivity",
    image: img(20),
    status: "Draft",
    views: 0,
    createdAt: "2025-10-12",
    content: `Your skills matter, but people also need to know about them.

## Share What You Learn
Write short posts or record videos about problems you solved this week. Teaching others helps you learn faster.

## Build in Public
Show your projects while you build them. Progress is more interesting than perfection.

## Be Consistent
One post every week for a year is better than ten posts in one week and then silence.

## Conclusion
A personal brand is simply your work, shared regularly with the right people.`,
  },
];
