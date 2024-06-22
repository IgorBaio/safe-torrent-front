import { createBrowserRouter } from "react-router-dom";
import { Catalog } from "../screens/Catalog";
// import { Login } from "../screens/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import { TabBar } from "../Layouts/TabBar";
import { Welcome } from "../screens/Welcome";
import { Show } from "../screens/Show";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/catalog",
      element: <Catalog />,
    },
    {
      path: "/show",
      element: <Show />,
    },
    {
      element: <Welcome />,
      children: [
        {
          path: "/catalog",
          element: <Catalog />,
        },
        {
          path: "/show",
          element: <Show />,
        },
      ],
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ],
  { basename: "/" }
);

export default router;
