import Main from "../main/Main";
import Home from "../home/main-home/Home";
import { createBrowserRouter } from "react-router";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ProductForm from "../product/ProductForm";
import ProductDetails from "../AllDetails/ProductDetails";
import RecommendationFrom from "../Recomendaction/RecomendationFrom";
import RecommendationDetails from "../AllDetails/RecommendationDetails";
import MyProduct from "../product/MyProduct";
import AllProduct from "../product/AllProduct";
import AboutPage from "../AboutPage/AboutPage";
import DocumentationPage from "../AboutPage/DocumentationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-product",
        element: <ProductForm />,
      },
      {
        path: "/all-product",
        element: <AllProduct />,
      },
      {
        path: "/My-product",
        element: <MyProduct />,
      },
      {
        path: "/about-page",
        element: <AboutPage />,
      },
      {
        path: "/about-documentation",
        element: <DocumentationPage />,
      },

      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/add-recommendation",
        element: <RecommendationFrom />,
      },
      {
        path: "/recommendation-Details-page",
        element: <RecommendationDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
