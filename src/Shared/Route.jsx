import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Error from "../Components/Error";
import Gallery from "../Pages/Gallery";
import Members from "../Pages/Members";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/members", element: <Members /> },
    ],
  },
]);

export default Route;
