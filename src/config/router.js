import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Users from "../components/Users"
import Tasks from "../components/Tasks"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Users />,
    },
    {
      path: "/Tasks/:id",
      element: <Tasks />,
    },

  ]);
  function Router() {
    return <RouterProvider router={router} />;
  }
  export default Router;