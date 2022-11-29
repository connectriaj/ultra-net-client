import { createBrowserRouter } from "react-router-dom";
import Login from "../authentication/Login/Login";
import SignUp from "../authentication/SignUp/SignUp.js";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/Home/About/About";
import Home from "../Pages/Home/Home/Home";
import Orders from "../Pages/Orders/Orders";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://ultra-net-server.vercel.app/all-services/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://ultra-net-server.vercel.app/all-services/${params.id}`),
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
