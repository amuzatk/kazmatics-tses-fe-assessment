# 🚀 TSES Frontend Developer Technical Assessment

A responsive frontend dashboard application built with **Next.js (App
Router)**, **React**, **TypeScript**, **Tailwind CSS**, **Redux
Toolkit**, and **RTK Query**, based on the provided Figma design.

This project was completed as part of the **Stage Two Technical
Assessment for TSES Ltd, Abuja**.

------------------------------------------------------------------------

## 🔗 Live Deployment

-   **Vercel URL:**\
    👉 https://kazmatics-tses-fe-assessment-vk48.vercel.app/

-   **Demo Walkthrough (Screen Recording):**\
    👉 *\[Add Demo Video Link Here\]*

------------------------------------------------------------------------

## 🧰 Tech Stack

-   Next.js 16 (App Router)
-   React 19
-   TypeScript
-   Tailwind CSS
-   Redux Toolkit
-   RTK Query
-   Vercel (Deployment)

------------------------------------------------------------------------

## 📌 Project Overview

This application demonstrates:

-   Accurate translation of Figma UI into reusable components
-   Scalable frontend architecture
-   Proper Redux Toolkit setup with a dummy user slice
-   RTK Query configuration with typed endpoints
-   Clean, accessible, and responsive layout implementation
-   Modern frontend best practices

All visible sections from the provided design were implemented with
close attention to spacing, typography, layout consistency, and
responsiveness.

------------------------------------------------------------------------

## 🏗️ Project Structure

``` bash
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
```

The structure follows a **feature-based modular architecture** for
scalability and maintainability.

------------------------------------------------------------------------

## 🧠 State Management

### ✅ Redux Toolkit

A dummy user slice was implemented as required:

``` ts
{
  user: {
    id: string
    name: string
    email: string
    isAuthenticated: boolean
  }
}
```

### Included Actions

-   `setUser`
-   `clearUser`
-   `login`
-   `logout`

The store is configured using `configureStore` with proper middleware
integration.

------------------------------------------------------------------------

### ✅ RTK Query

RTK Query is configured using:

-   `createApi`
-   `fetchBaseQuery`
-   Fully typed endpoints
-   `tagTypes` for cache invalidation
-   `providesTags` pattern for scalable revalidation

### Example Endpoints

-   `getUsers`
-   `getPosts`

Public API (JSONPlaceholder) was used for demonstration.

------------------------------------------------------------------------

## 🎨 Styling Approach

-   Tailwind CSS utility-first styling
-   No inline styles
-   Consistent spacing scale
-   Semantic HTML for accessibility
-   Reusable layout components (Sidebar, Topbar, Cards, etc.)

The UI closely follows the provided Figma design in typography, color
usage, layout spacing, and responsiveness.

------------------------------------------------------------------------

## 🔄 Routing

-   Implemented using Next.js App Router
-   Shared layout components reused across pages
-   Proper file-based routing structure

------------------------------------------------------------------------

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

``` bash
git clone <your-repo-url>
cd <project-folder>
```

### 2️⃣ Install Dependencies

``` bash
npm install
```

### 3️⃣ Run Development Server

``` bash
npm run dev
```

Visit:\
http://localhost:3000

------------------------------------------------------------------------

## 🧪 Production Build

``` bash
npm run build
npm run start
```

------------------------------------------------------------------------

## 🚀 Deployment

The project is deployed on Vercel:

👉 https://kazmatics-tses-fe-assessment-vk48.vercel.app/

The deployed version matches the GitHub repository codebase.

------------------------------------------------------------------------

## 🎯 Assessment Requirements Coverage

  Requirement               Status
  ------------------------- --------
  Next.js App Router        ✅
  TypeScript Usage          ✅
  Tailwind CSS Styling      ✅
  Redux Toolkit Setup       ✅
  Dummy User Slice          ✅
  RTK Query Configuration   ✅
  Responsive UI             ✅
  Clean Architecture        ✅
  Vercel Deployment         ✅
  README Documentation      ✅

------------------------------------------------------------------------

## 💡 Architectural Decisions

-   Feature-based folder organization for scalability
-   Centralized store configuration with middleware composition
-   Strong TypeScript typing for API responses
-   RTK Query tag-based caching strategy
-   Component composability for reusability
-   Path aliasing (`@/`) for cleaner imports

------------------------------------------------------------------------

## 📎 Notes

-   No backend integration was required.
-   Public API (JSONPlaceholder) was used for RTK Query demonstration.
-   No authentication logic was implemented beyond dummy Redux state as
    requested.

------------------------------------------------------------------------

## 👤 Author

**Kazeem Amuzat**\
Full-Stack Engineer\
Abuja, Nigeria
