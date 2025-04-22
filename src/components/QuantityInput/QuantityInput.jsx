import styles from "./QuantityInput.module.css";

export const INITIAL_BUTTON_TEXT = "Add to cart";

export default function QuantityInput({ quantity, onChangeQuantity }) {
  const handleChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (re.test(e.target.value)) {
      onChangeQuantity(parseInt(e.target.value));
    } else if (e.target.value === "") {
      onChangeQuantity(0);
    }
  };
  return quantity === 0 ? (
    <button className={styles.button} onClick={() => onChangeQuantity(1)}>
      {INITIAL_BUTTON_TEXT}
    </button>
  ) : (
    <div className={styles.inputDiv}>
      <button
        onClick={() => onChangeQuantity(quantity - 1)}
        className={styles.button}
      >
        -
      </button>
      <input
        value={quantity}
        type="text"
        onChange={handleChange}
        maxLength={3}
      />
      <button
        onClick={() => onChangeQuantity(quantity + 1)}
        className={styles.button}
      >
        +
      </button>
    </div>
  );
}
