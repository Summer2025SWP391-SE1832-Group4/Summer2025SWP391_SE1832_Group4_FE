import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout";
import HomePage from "./pages/home-page";
import './index.css'
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
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App