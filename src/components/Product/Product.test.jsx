import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Product from "./Product";
import { INITIAL_BUTTON_TEXT } from "./utils";

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
        <Product data={data} quantity={0} onChangeQuantity={null} />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", `/${data.id}`);
    expect(screen.getByText(data.title)).not.toBe(null);
    expect(screen.getByText("5.00")).not.toBe(null);
    expect(screen.getByText(INITIAL_BUTTON_TEXT)).not.toBe(null);
  });
});
