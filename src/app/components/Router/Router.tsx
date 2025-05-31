import Main from "../main/Main";
import Home from "../home/main-home/Home";
import { createBrowserRouter } from "react-router";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ProductForm from "../product/ProductForm";
import ProductDetails from "../AllDetails/ProductDetails";
import RecommendationDetails from "../AllDetails/RecommendationDetails";
import MyProduct from "../product/MyProduct";
import AllProduct from "../product/AllProduct";
import AboutPage from "../AboutPage/AboutPage";
import DocumentationPage from "../AboutPage/DocumentationPage";
import ProtectedRoute from "./ProtectedRoute";
import UserProfile from "../user/UserProfile";
import MyDetails from "../AllDetails/MyDetails";
import UpdateProduct from "../product/UpdateProduct";
import RecommendationFrom from "../Recomendaction/RecomendationFrom";
import MyRecommended from "../Recomendaction/MyRecommended";
import MyRecommendedDetails from "../AllDetails/MyRecommendedDetails";
import UpdateRecommended from "../Recomendaction/UpdateRecommended";
import AllUser from "../contact/AllUser";
import AllRecommended from "../Recomendaction/AllRecommended";
import { ChangePasswordForm } from "../auth/ChangePasswordForm";
import UpdateProfile from "../auth/UpdateProfile";
import ResetPasswordPage from "../auth/ResetPasswordPage";

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
        element: (
          <ProtectedRoute>
            <ProductForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
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
        path: "/all-recommended",
        element: <AllRecommended />,
      },
      {
        path: "/reset-from",
        element: <ResetPasswordPage />,
      },

      {
        path: "/product-details/:_id",
        element: <ProductDetails />,
      },
      {
        path: "/product-update/:_id",
        element: (
          <ProtectedRoute>
            <UpdateProduct />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/update-password",
        element: (
          <ProtectedRoute>
            <ChangePasswordForm />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <ProtectedRoute>
            <UpdateProfile />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-product-details/:_id",
        element: (
          <ProtectedRoute>
            <MyDetails />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-recommended-Details/:_id",
        element: (
          <ProtectedRoute>
            <MyRecommendedDetails />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-recommended",
        element: (
          <ProtectedRoute>
            <MyRecommended />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-recommendation/:_id",
        element: (
          <ProtectedRoute>
            <RecommendationFrom />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/recommendation-Details-page",
        element: (
          <ProtectedRoute>
            <RecommendationDetails />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/update-recommendation/:_id",
        element: (
          <ProtectedRoute>
            <UpdateRecommended />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <ProtectedRoute>
            <UpdateRecommended />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/all-user",
        element: (
          <ProtectedRoute>
            <AllUser />,
          </ProtectedRoute>
        ),
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
