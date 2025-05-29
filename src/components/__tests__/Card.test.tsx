import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/preact";
import Card from "../Card";

describe("Card", () => {
  it("renders with default styling", () => {
    render(<Card>john</Card>);

    const name = screen.getByText("john");
    expect(name).toBeInTheDocument();

    const avatar = screen.getByAltText("Avatar for john");
    expect(avatar).toBeInTheDocument();
  });

  it("renders with current styling when current prop is true", () => {
    render(<Card current={true}>jane</Card>);

    const name = screen.getByText("jane");
    expect(name).toBeInTheDocument();

    const status = screen.getByText("Speaking now");
    expect(status).toBeInTheDocument();
  });

  it("renders avatar image with correct source", () => {
    render(<Card>alice</Card>);

    const avatar = screen.getByAltText("Avatar for alice");
    expect(avatar).toHaveAttribute(
      "src",
      "https://api.dicebear.com/9.x/pixel-art/svg?seed=alice"
    );
  });

  it("does not render status when current prop is false", () => {
    render(<Card current={false}>bob</Card>);

    const name = screen.getByText("bob");
    expect(name).toBeInTheDocument();

    const status = screen.queryByText("Speaking now");
    expect(status).not.toBeInTheDocument();
  });
});
