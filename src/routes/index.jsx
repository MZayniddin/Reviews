import { createBrowserRouter } from "react-router-dom";

import Auth from "../pages/Auth";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";

const root = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

export default root;
