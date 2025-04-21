import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NavBar from "./NavBar";
import { MemoryRouter } from "react-router-dom";

describe("NavBar", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    expect(screen.getByRole("navigation"));
    expect(screen.getAllByRole("link").length).toBe(3);
  });
});
