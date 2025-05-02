import { createBrowserRouter } from "react-router";
import Main from "../main/Main";
import Home from "../home/main-home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        }
      ]
    },
  ]);

  export default router