🚀 TSES Frontend Developer Technical Assessment

A responsive frontend dashboard application built with Next.js (App Router), React, TypeScript, Tailwind CSS, Redux Toolkit, and RTK Query, based on the provided Figma design.

This project was completed as part of the Stage Two Technical Assessment for TSES Ltd, Abuja.

🔗 Live Deployment

Vercel URL:
👉 https://kazmatics-tses-fe-assessment-vk48.vercel.app/

Demo Walkthrough (Screen Recording):
👉 [Add Demo Video Link Here]


🧰 Tech Stack

Next.js 16 (App Router)

React 19

TypeScript

Tailwind CSS

Redux Toolkit

RTK Query

Vercel (Deployment)


📌 Project Overview

This application demonstrates:

Accurate translation of Figma UI into reusable components

Scalable frontend architecture

Proper Redux Toolkit setup with a dummy user slice

RTK Query configuration with typed endpoints

Clean, accessible, and responsive layout implementation

Modern frontend best practices

All visible sections from the provided design were implemented with close attention to spacing, typography, layout consistency, and responsiveness.


🏗️ Project Structure
src/
│
├── app/                 # Next.js App Router pages & layouts
│   ├── layout.tsx
│   └── page.tsx
│
├── components/          # Reusable UI components
│   ├── layout/
│   └── ui/
│
├── features/            # Redux feature modules
│   ├── user/            # Dummy user slice
│   └── api/             # RTK Query API slice
│
├── store/               # Redux store configuration
│   ├── index.ts
│   ├── provider.tsx
│   └── hooks.ts
│
├── types/               # TypeScript interfaces & API models
│
└── styles/              # Global styles
The structure follows a feature-based modular architecture for scalability and maintainability.


🧠 State Management
✅ Redux Toolkit

A dummy user slice was implemented as required:

{
  user: {
    id: string
    name: string
    email: string
    isAuthenticated: boolean
  }
}


Included actions:

setUser

clearUser

login

logout

The store is configured using configureStore with proper middleware integration.

✅ RTK Query

RTK Query is configured using createApi with:

fetchBaseQuery

Fully typed endpoints

tagTypes for cache invalidation

providesTags pattern for scalable revalidation

Example endpoints:

getUsers

getPosts

This demonstrates proper API slice configuration even though backend integration was not required.


🎨 Styling Approach

Tailwind CSS utility-first styling

No inline styles used

Consistent spacing scale

Semantic HTML for accessibility

Reusable layout components (Sidebar, Topbar, Cards, etc.)

The UI closely follows the provided Figma design in:

Typography

Color usage

Layout spacing

Responsiveness


🔄 Routing

Implemented using Next.js App Router

Shared layout components reused across pages

Proper file-based routing structure


⚙️ Setup Instructions
1️⃣ Clone the Repository

git clone <your-repo-url>
cd <project-folder>

2️⃣ Install Dependencies

npm install

3️⃣ Run Development Server

npm run dev

Visit:
http://localhost:3000

🧪 Production Build
npm run build
npm run start


🚀 Deployment

The project is deployed on Vercel.

Deployment link:

👉 https://kazmatics-tses-fe-assessment-vk48.vercel.app/

The deployed version matches the GitHub repository codebase.


🎯 Assessment Requirements Coverage
Requirement	Status
Next.js App Router	✅
TypeScript usage	✅
Tailwind CSS styling	✅
Redux Toolkit setup	✅
Dummy user slice	✅
RTK Query configuration	✅
Responsive UI	✅
Clean architecture	✅
Vercel deployment	✅
README documentation	✅


💡 Architectural Decisions

Feature-based folder organization for scalability

Centralized store configuration with middleware composition

Strong TypeScript typing for API responses

RTK Query tag-based caching strategy

Component composability for reusability

Path aliasing (@/) for cleaner imports


📎 Notes

No backend integration was required.

Public API (JSONPlaceholder) was used for RTK Query demonstration.

No authentication logic was implemented beyond dummy Redux state as requested.


👤 Author

Amuzat Kazeem
Frontend Developer
Abuja, Nigeria





<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
