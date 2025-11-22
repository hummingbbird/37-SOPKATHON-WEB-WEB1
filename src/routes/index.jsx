import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts";
import MainPage from "../pages/main-page/main-page";
import AddVideo from "../pages/add-video/add-video";
import MyPage from "../pages/my-page/my-page";
import { SignUpPage } from "../pages/sign-up/sign-up";
import { DetailPage } from "../pages/detail/detail";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "add-video",
        element: <AddVideo />,
      },
      {
        path: "my-page",
        element: <MyPage />,
      },
      {
        path: "detail",
        element: <DetailPage />,
      },
    ],
  },
  {
    path: "sign-up",
    element: <SignUpPage />,
  },
]);
