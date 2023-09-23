import { Navigate, createBrowserRouter } from "react-router-dom";

import Auth from "../pages/Auth";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import Profile from "../pages/Profile";
import DetailReview from "../pages/DetailReview";
import CreateReview from "../pages/CreateReview";
import EditReview from "../pages/EditReview";

const user = localStorage.getItem("profile")
  ? JSON.parse(localStorage.getItem("profile"))
  : null;

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
        element: user ? <Profile /> : <Navigate to="/auth" replace />,
      },
      {
        path: "/review/:id",
        element: <DetailReview />,
      },
      {
        path: "review/create",
        element: user ? <CreateReview /> : <Navigate to="/auth" replace />,
      },
      {
        path: "review/edit/:id",
        element: user ? <EditReview /> : <Navigate to="/auth" replace />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

export default root;
