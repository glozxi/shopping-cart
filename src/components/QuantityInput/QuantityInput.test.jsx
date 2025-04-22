import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import QuantityInput from "./QuantityInput";

describe("Quantity Input", () => {
  let onChangeQuantity;
  beforeEach(() => {
    onChangeQuantity = vitest.fn();
  });
  it("renders a button for quantity 0", () => {
    render(<QuantityInput quantity={0} onChangeQuantity={onChangeQuantity} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders an input for quantity 1", () => {
    render(<QuantityInput quantity={1} onChangeQuantity={onChangeQuantity} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
  });
});
