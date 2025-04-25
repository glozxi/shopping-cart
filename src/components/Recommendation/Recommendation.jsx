import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { onChangeQuantity, toFloat } from "../../utils";
import styles from "./Recommendation.module.css";
import QuantityInput from "../QuantityInput/QuantityInput";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export default function Recommendation({ data }) {
  const { cart, setCart } = useContext(CartContext);
  const quantity = cart.find((item) => item.id === data.id)?.quantity ?? 0;

  return (
    <Card className={styles.card}>
      <div className={styles.title}>
        <h3>
          <Link to={`/${data.id}`}>{data.title}</Link>
        </h3>
      </div>
      <Link to={`/${data.id}`} className={styles.imgContainer}>
        <img src={data.image} alt={data.title} className={styles.img} />
      </Link>
      <div className={styles.price}>${toFloat(data.price)}</div>
      <QuantityInput
        quantity={quantity}
        onChangeQuantity={(newVal) =>
          onChangeQuantity(newVal, setCart, cart, data)
        }
      />
    </Card>
  );
}
