import { useContext } from "react";
import Recommendation from "../components/Recommendation/Recommendation";
import styles from "./Home.module.css";
import { ProductsContext } from "../contexts/ProductsContext";

export default function Home() {
  const { products, error, loading } = useContext(ProductsContext);
  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>A network error has occurred</p>;
  }
  const recommendations = products.slice(0, 6);
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Recommendations</h1>
      <ul className={styles.recommendations}>
        {recommendations.map((rec) => (
          <li key={rec.id}>
            <Recommendation data={rec} quantity={0} onChangeQuantity={null} />
          </li>
        ))}
      </ul>
    </main>
  );
}
