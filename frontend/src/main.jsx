import React, { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import VerifyEmailPage from "./pages/VerifyEmailPage.jsx";
import { useAuthStore } from "./store/authStore.js";
import About from "./pages/About.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }
  return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function AppRouter() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  // console.log("isAuthenticated", isAuthenticated);
  // console.log("user", user);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },

        {
          path: "/signup",
          element: (
            <RedirectAuthenticatedUser>
              <Signup />
            </RedirectAuthenticatedUser>
          ),
        },

        {
          path: "/login",
          element: (
            <RedirectAuthenticatedUser>
              <Login />
            </RedirectAuthenticatedUser>
          ),
        },

        {
          path: "/forgot-password",
          element: (
            <RedirectAuthenticatedUser>
              <ForgotPassword />
            </RedirectAuthenticatedUser>
          ),
        },

        {
          path: "/verify-email",
          element: <VerifyEmailPage />,
        },

        {
          path: "/about",
          element: (
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          ),
        },
        {
          path: "/reset-password/:token",
          element: (
            <RedirectAuthenticatedUser>
              <ResetPassword />
            </RedirectAuthenticatedUser>
          ),
        },
        // catch all routes
        {
          path: "*",
          element: <Navigate to={"/"} replace />,
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
