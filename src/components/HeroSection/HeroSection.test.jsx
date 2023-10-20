import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import HeroSection from ".";

describe("HeroSection on Home page", () => {
  test("should have the title shown", () => {
    render(<HeroSection />);
    const title = screen.getByText("Touching hundreds of lives");

    expect(title).toBeInTheDocument();
  });

  test("should have five images displayed", () => {
    render(<HeroSection />);
    const imageList = screen.getAllByRole("img");

    expect(imageList).toHaveLength(5);
  });
});
