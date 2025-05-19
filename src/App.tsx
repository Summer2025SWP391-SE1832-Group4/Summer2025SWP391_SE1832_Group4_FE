import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout";
import HomePage from "./pages/home-page";
import './index.css'
import LoginPage from "./pages/authentication-pages/login-page";
import RegisterPage from "./pages/authentication-pages/register-page";
import DashboardManagement from "./pages/dashboard-management/dashboard";
import DashboardStatistic from "./pages/dashboard-management/admin/statistic";
import CustomerManagement from "./pages/dashboard-management/staff/customer-management";
import BlogManagement from "./pages/dashboard-management/staff/blog-management";
import DoctorManagement from "./pages/dashboard-management/staff/doctor-management";
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
    },
    {
      path: "/dashboard",
      element: <DashboardManagement />,
      children: [
        {
          path: 'statistic',
          element: <DashboardStatistic />,
        },
        {
          path: '',
          element: <></>,
        },
        
        {
          path: 'customer-management',
          element: <CustomerManagement />,
        },
        {
          path: 'blog-management',
          element: <BlogManagement />,
        },
         {
          path: 'doctor-management',
          element: <DoctorManagement />,
        },

      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App