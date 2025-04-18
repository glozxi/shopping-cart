import App from "./pages/App";
import Shop from "./pages/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
];

export default routes;
