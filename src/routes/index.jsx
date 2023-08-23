import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Auth from "../pages/Auth";
import Home from "../pages/Home";

const root = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
