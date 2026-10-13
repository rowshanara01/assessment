import { IBlogs } from "@/types/blogs.type";

export const blogs: IBlogs[] = [
  {
    slug: "mern",
    title: "MERN Stack Guide",
    content: `
      The MERN stack consists of MongoDB, Express.js, React, and Node.js. 
      It enables full-stack JavaScript development with a unified language across 
      frontend and backend. MERN is highly scalable and ideal for building 
      single-page applications, RESTful APIs, and real-time platforms like chat apps.
    `,
  },
  {
    slug: "nextjs",
    title: "Next.js Tips",
    content: `
      Next.js is a React framework that supports server-side rendering (SSR), 
      static site generation (SSG), and hybrid applications. 
      It offers automatic code splitting, image optimization, and seamless 
      deployment on platforms like Vercel, making it perfect for fast, SEO-friendly 
      web applications.
    `,
  },
  {
    slug: "typescript",
    title: "TypeScript Guide",
    content: `
      TypeScript adds static typing to JavaScript, enabling better code safety 
      and maintainability. It supports interfaces, enums, generics, and type 
      inference, helping developers catch errors early. 
      TypeScript integrates with modern frameworks like React and Node.js 
      for scalable applications.
    `,
  },
  {
    slug: "javascript",
    title: "JavaScript Essentials",
    content: `
      JavaScript is the core language of the web, enabling dynamic content 
      and interactive experiences. Modern JavaScript includes ES6+ features 
      like arrow functions, async/await, modules, and classes, 
      enhancing performance and developer productivity.
    `,
  },
  {
    slug: "react",
    title: "React Best Practices",
    content: `
      React is a powerful library for building component-based UIs. 
      Best practices include using reusable components, hooks for state 
      management, context API for global state, and libraries like React Query 
      for server state management.
    `,
  },
  {
    slug: "nodejs",
    title: "Node.js Overview",
    content: `
      Node.js is a JavaScript runtime built on Chrome's V8 engine. 
      It allows developers to build scalable backend applications 
      using non-blocking, event-driven architecture. 
      With npm, it supports a vast ecosystem of packages 
      for fast development.
    `,
  },
  {
    slug: "express",
    title: "Express.js Framework",
    content: `
      Express.js is a lightweight web application framework for Node.js 
      that simplifies building APIs and web applications. 
      It provides middleware support, routing, and easy integration 
      with databases, authentication, and templating engines.
    `,
  },
  {
    slug: "mongodb",
    title: "MongoDB Basics",
    content: `
      MongoDB is a NoSQL database that stores data in JSON-like documents. 
      It offers scalability, high performance, and flexibility 
      for handling large volumes of unstructured data, 
      making it a popular choice for modern applications.
    `,
  },
  {
    slug: "redux",
    title: "Redux State Management",
    content: `
      Redux is a predictable state container for JavaScript apps. 
      It manages global state with actions, reducers, and a single store, 
      ensuring predictable behavior. Redux Toolkit simplifies 
      boilerplate code and improves development speed.
    `,
  },
  {
    slug: "tailwindcss",
    title: "Tailwind CSS Guide",
    content: `
      Tailwind CSS is a utility-first CSS framework 
      that speeds up UI development. 
      It allows developers to style components directly in markup 
      using predefined classes, reducing custom CSS 
      and improving responsiveness and maintainability.
    `,
  },
];
