import App from "./pages/App";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "shop/:id",
        element: <ProductPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
