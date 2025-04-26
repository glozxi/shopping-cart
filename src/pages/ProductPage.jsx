import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";
import FullProduct from "../components/FullProduct/FullProduct";

export default function ProductPage() {
  const { id } = useParams();
  const { products, error, loading } = useContext(ProductsContext);
  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>A network error has occurred</p>;
  }

  const productData = products.find((p) => p.id.toString() === id);

  return (
    <main>
      <h1>Product</h1>
      {productData ? <FullProduct data={productData} /> : products}
    </main>
  );
}
