import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./globals.css"
import Home from './routes/home.tsx';
import ErrorPage from './routes/error-page.tsx';
import Contact from './routes/contact.tsx';
import Blog from './routes/blog-page.tsx';
import Profile from './routes/profile-page.tsx';
import Dashboard from './routes/dashboard.tsx';
import { TooltipProvider } from '@radix-ui/react-tooltip';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
  {
    path: "blogs/:id",
    element: <Blog />,
  },
  {
    path: "profile/",
    element: <Profile />,
  }, {
    path: "dashboard/",
    element: <Dashboard />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TooltipProvider>
      <RouterProvider router={router} />
    </TooltipProvider>

  </React.StrictMode>,
)
