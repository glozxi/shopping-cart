import { useContext } from "react";
import styles from "./Shop.module.css";
import { ProductsContext } from "../contexts/ProductsContext";
import Product from "../components/Product/Product";

function Shop() {
  const { products, error, loading } = useContext(ProductsContext);
  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>A network error has occurred</p>;
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Shop</h1>
      <ul className={styles.products}>
        {products.map((rec) => (
          <li key={rec.id}>
            <Product data={rec} quantity={0} onChangeQuantity={null} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Shop;
