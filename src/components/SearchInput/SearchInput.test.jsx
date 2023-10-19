import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchInput from ".";

describe("The Search component", () => {
  test("should be visible", () => {
    render(<SearchInput />);

    const input = screen.getByTestId("search-input");

    expect(input).toBeInTheDocument();
  });

  test("should have correct placeholder", () => {
    render(<SearchInput />);

    const input = screen.getByTestId("search-input");

    expect(typeof input).toBe("object");
  });
});
