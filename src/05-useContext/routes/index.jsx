import { createBrowserRouter, Navigate } from "react-router-dom";
import { AboutPage } from "../AboutPage";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
 
export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/*",
      element: <Navigate to="/about"/>
    }
  ]);   