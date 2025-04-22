import { render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Recommendation from "./Recommendation";
import { CartContext } from "../../contexts/CartContext";

const data = {
  id: 0,
  title: "Cat Feather",
  price: 5.0,
  description: "A very funny feather for your cat",
  category: "Pets",
  image: "test",
};

describe("Recommendation", () => {
  it("renders for quantity 0", () => {
    render(
      <MemoryRouter>
        <CartContext.Provider value={{ cart: [], setCart: vitest.fn() }}>
          <Recommendation data={data} />
        </CartContext.Provider>
      </MemoryRouter>,
    );
    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", `/${data.id}`);
    expect(links[1]).toHaveAttribute("href", `/${data.id}`);
    expect(screen.getByText(data.title)).not.toBe(null);
    expect(screen.getByText(/5.00/)).not.toBe(null);
    expect(screen.getByRole("button")).not.toBe(null);
  });
});
