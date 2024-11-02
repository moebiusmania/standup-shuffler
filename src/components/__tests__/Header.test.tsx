import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/preact";
import Header from "../Header";

describe("Header", () => {
  it("renders header with correct title", () => {
    render(<Header />);

    expect(screen.getByText("Standup shuffler")).toBeInTheDocument();
  });

  it("has correct styling classes", () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toHaveClass(
      "navbar mb-2 shadow-lg bg-neutral text-neutral-content"
    );
  });
});
