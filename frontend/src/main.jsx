import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import VerifyEmailPage from "./pages/VerifyEmailPage.jsx";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/signup",
          element: <Signup />,
        },

        {
          path: "/login",
          element: <Login />,
        },

        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },

        {
          path: "/verify-email",
          element: <VerifyEmailPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
