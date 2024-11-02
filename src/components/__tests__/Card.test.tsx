import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/preact";
import Card from "../Card";

describe("Card", () => {
  it("renders with default styling", () => {
    render(<Card>john</Card>);

    const card = screen.getByText("john");
    expect(card).toBeInTheDocument();
    expect(card.closest(".card")).toHaveClass(
      "card shadow compact rounded-none my-5"
    );
  });

  it("renders with active styling when active prop is true", () => {
    render(<Card active={true}>jane</Card>);

    const cardElement = screen.getByText("jane").closest(".card");
    expect(cardElement).toHaveClass("bg-primary text-white");
  });

  it("renders avatar image with correct source", () => {
    render(<Card>alice</Card>);

    const avatar = screen.getByAltText("alice");
    expect(avatar).toHaveAttribute(
      "src",
      "https://api.dicebear.com/9.x/pixel-art/svg?seed=alice"
    );
  });
});
