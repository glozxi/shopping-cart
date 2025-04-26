import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "./Cart.module.css";
import Product from "../components/Product/Product";
import { ProductsContext } from "../contexts/ProductsContext";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const { products, error, loading } = useContext(ProductsContext);
  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>A network error has occurred</p>;
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Cart</h1>
      {cart.length ? (
        <ul className={styles.products}>
          {cart.map((cartItem) => {
            const prod = products.find((prod) => prod.id === cartItem.id);
            return (
              <li key={cartItem.id}>
                <Product data={{ ...cartItem, ...prod }} />
              </li>
            );
          })}
        </ul>
      ) : (
        "Nothing in your cart yet!"
      )}
    </main>
  );
}
