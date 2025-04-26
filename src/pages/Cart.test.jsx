import { render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import Cart from "./Cart";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import { MemoryRouter } from "react-router-dom";

const data = {
  id: 0,
  title: "Cat Feather",
  price: 5.0,
  description: "A very funny feather for your cat",
  category: "Pets",
  image: "test",
};

describe("Cart", () => {
  it("shows cart items", () => {
    render(
      <MemoryRouter>
        <ProductsContext.Provider
          value={{ products: [data], error: null, loading: false }}
        >
          <CartContext.Provider
            value={{
              cart: [{ id: data.id, quantity: 1 }],
              setCart: vitest.fn(),
            }}
          >
            <Cart />
          </CartContext.Provider>
        </ProductsContext.Provider>
      </MemoryRouter>,
    );
    expect(screen.getByText(data.title)).not.toBe(null);
    expect(screen.getByText(data.description)).not.toBe(null);
    expect(screen.getByText("$5.00")).not.toBe(null);
  });
});
