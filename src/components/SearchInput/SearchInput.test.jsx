import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchInput from ".";

describe("The Search component", () => {
  test("should be visible", () => {
    render(<SearchInput />);

    const input = screen.getByTestId("search-input");

    expect(input).toBeInTheDocument();
  });

  test("should allow typing", () => {
    render(<SearchInput />);

    const input = screen.getByTestId("search-input");

    fireEvent.change(input, { target: { value: "Buscando" } });
    expect(input.value).toBe("Buscando");
  });
});
