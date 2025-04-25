import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { toFloat } from "../../utils";
import styles from "./Product.module.css";
import QuantityInput from "../QuantityInput/QuantityInput";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { onChangeQuantity } from "../../utils";

export default function Product({ data }) {
  const { cart, setCart } = useContext(CartContext);
  const quantity = cart.find((item) => item.id === data.id)?.quantity ?? 0;

  return (
    <Card className={styles.card}>
      <Link to={`/${data.id}`} className={styles.imgContainer}>
        <img src={data.image} alt={data.title} className={styles.img} />
      </Link>
      <div className={styles.title}>
        <h3>
          <Link to={`/${data.id}`}>{data.title}</Link>
        </h3>
      </div>
      <div className={styles.description}>
        <p>{data.description}</p>
      </div>
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
