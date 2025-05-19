import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout";
import HomePage from "./pages/home-page";
import './index.css'
import LoginPage from "./pages/authentication-pages/login-page";
import RegisterPage from "./pages/authentication-pages/register-page";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        }

      ]
    },
    {
      path: "/login-page",
      element: <LoginPage />
    },
    {
      path: "/register-page",
      element: <RegisterPage />
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App