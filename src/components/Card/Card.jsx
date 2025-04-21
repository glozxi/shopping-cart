import styles from "./Card.module.css";

export default function Card({ className, children }) {
  return <div className={`${className} ${styles.card}`}>{children}</div>;
}
