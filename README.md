# 🎮 GameHub React App

A modern, feature-rich gaming discovery platform built with React, React Query, Zustand, and the RAWG Games API. Deployed on **Vercel**, fully open-source on **GitHub**, and engineered with performance, scalability, and clean architecture in mind.

## 🚀 Live Demo

**Vercel Deployment:** _https://game-craft-advanced.vercel.app/_  
**GitHub Repository:** _https://github.com/pakeeza29/game-craft-advanced_  
**Project Video & Screenshots:** Available in the repository’s media section.

## ✨ Features

### ⚡ Smart Data Fetching with React Query

- Fully managed data fetching, caching, refetching, and retry logic.
- Query cancellation on component unmount to prevent side effects and duplicate requests.
- Automatic retry of failed requests and background refetching.
- Configurable stale times using the `ms` library.
- Parameterized, paginated, and infinite queries supported.
- Custom hooks encapsulate API logic for better reusability and separation of concerns.
- React Query DevTools included for production debugging.

### 🧠 State Management with Context + Zustand

- Lightweight, scalable global store using Zustand.
- Eliminates prop drilling and reduces unnecessary re-renders.
- Clean separation between UI state, server state, and app logic.
- Context used intentionally in isolated areas for improved performance.

### 🧭 Seamless Navigation with React Router

- Structured routing architecture using `createBrowserRouter`.
- Dynamic routes for game details via URL parameters.
- Search state and filters persisted using query string parameters.
- Comprehensive navigation UX:
  - Navigate between home and game details smoothly
  - Searching from anywhere always returns to the search page
  - Full 404 and network error pages included
- Layout routes, nested routes, index routes, and `<Outlet>` used correctly.
- `<Link>`, `<NavLink>`, and `useNavigate` implemented for intuitive navigation.

### 🎨 Polished User Experience

- Light and dark mode support.
- Detailed game pages include:
  - Platforms
  - Genres
  - Publishers
  - Metascore
  - Screenshots
  - Trailers
- Optimized loading strategy that avoids sending unnecessary page content to the client.
- Error handling across the app for network and route-level failures.

### 🧩 Technical Highlights

- Advanced TypeScript with correct generics and return types.
- Component hierarchy designed for maintainability.
- Clean separation of data management, UI updates, and side effects.
- Efficient caching to reduce bandwidth and improve performance.
- RAWG Games API integration.

## 📁 Suggested Project Structure

```
src/
  api/
  components/
  hooks/
  pages/
  state/
  routing/
  utils/
  styles/
```

## 🛠️ Tech Stack

**Frontend:**

- React
- TypeScript
- React Query
- Zustand
- React Router
- ms

**API:**

- RAWG Video Games Database API

**Deployment:**

- Vercel

## 📦 Installation

```bash
git clone https://github.com/pakeeza29/game-craft-advanced.git
cd game-craft-advanced
npm install
npm run dev
```

## 🔧 Environment Variables

Create a `.env` file:

```
VITE_RAWG_API_KEY=your_rawg_api_key
```

## ▶️ Running the App

For development:

```bash
npm run dev
```

For production:

```bash
npm run build
npm run preview
```

## 🧪 Development Tools

React Query DevTools enable inspection of cache states, stale times, retries, and background refetches.

## 💡 Future Enhancements

- User login + favorites
- Infinite scrolling
- Offline caching with service workers
- Expanded media viewer

## 📜 License

MIT License.
