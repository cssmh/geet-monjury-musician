import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Error from "../Components/Error";
import Gallery from "../Pages/Gallery";
import Monjory from "../Pages/Monjory";
import AboutUs from "../Pages/AboutUs";
import Albums from "../Pages/Albums";
import Videos from "../Pages/Videos";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/monjory", element: <Monjory /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/albums", element: <Albums /> },
      { path: "/videos", element: <Videos /> },
    ],
  },
]);

export default Route;
