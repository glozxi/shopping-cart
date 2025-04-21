import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import "./App.css";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://fakestoreapi.com/products`, { signal })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        if (!controller.signal.aborted) {
          setError(error);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { products, error, loading };
}

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <ProductsContext.Provider value={useFetchProducts()}>
        <Outlet />
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
