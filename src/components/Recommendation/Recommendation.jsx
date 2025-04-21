import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { INITIAL_BUTTON_TEXT, toFloat } from "./utils";
import styles from "./Recommendation.module.css";

export default function Recommendation({ data, quantity, onChangeQuantity }) {
  return (
    <Card className={styles.card}>
      <div className={styles.title}>
        <h3>
          <Link to={`/${data.id}`}>{data.title}</Link>
        </h3>
      </div>
      <Link to={`/${data.id}`} className={styles.imgContainer}>
        <img src={data.image} alt="image" className={styles.img} />
      </Link>

      <div className={styles.price}>${toFloat(data.price)}</div>
      <button onClick={onChangeQuantity} className={styles.button}>
        {quantity === 0 ? INITIAL_BUTTON_TEXT : quantity}
      </button>
    </Card>
  );
}
