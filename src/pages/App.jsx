import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import "./App.css";
import styles from "./App.module.css";
import lightStyles from "./LightTheme.module.css";
import darkStyles from "./DarkTheme.module.css";
import { useEffect, useState } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import useFetchProducts from "./useFetchProducts";

function App() {
  const [cart, setCart] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const productData = useFetchProducts();
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    if (mq.matches) {
      setIsDark(true);
    }

    // This callback will fire if the perferred color scheme changes without a reload
    mq.addEventListener("change", (evt) => setIsDark(evt.matches));
  }, []);
  return (
    <div
      className={`${styles.body} ${isDark ? darkStyles.body : lightStyles.body}`}
    >
      <div
        className={`${styles.app} ${isDark ? darkStyles.body : lightStyles.body}`}
      >
        <NavBar />
        <ProductsContext.Provider value={productData}>
          <CartContext.Provider value={{ cart, setCart }}>
            <Outlet />
          </CartContext.Provider>
        </ProductsContext.Provider>
      </div>
    </div>
  );
}

export default App;
