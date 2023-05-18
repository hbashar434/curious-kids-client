import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import MyToys from "../pages/MyToys/MyToys";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://curious-kids-server.vercel.app/all-toys"),
      },
      {
        path: "/toy-details/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) =>
          fetch(
            `https://curious-kids-server.vercel.app/toy-details/${params.id}`
          ),
      },
      {
        path: "/my-toys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
