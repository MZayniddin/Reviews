import { createBrowserRouter } from "react-router-dom";

import Auth from "../pages/Auth";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import Profile from "../pages/Profile";
import DetailReview from "../pages/DetailReview";
import CreateReview from "../pages/CreateReview";
import EditReview from "../pages/EditReview";

const root = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/review/:id",
        element: <DetailReview />,
      },
      {
        path: "review/create",
        element: <CreateReview />,
      },
      {
        path: "review/edit/:id",
        element: <EditReview />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

export default root;
