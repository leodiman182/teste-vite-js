import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Logo from ".";

describe("The Logo", () => {
  test("should be visible", () => {
    render(<Logo />);

    const logo = screen.getByTestId("logo");

    expect(logo).toBeInTheDocument();
  });

  test("should have correct text value", () => {
    render(<Logo />);

    const logo = screen.getByTestId("logo");

    expect(logo).toHaveTextContent("MeuLogo.");
  });
});
