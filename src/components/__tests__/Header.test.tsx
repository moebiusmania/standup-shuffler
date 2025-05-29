import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/preact";
import Header from "../Header";
import styles from "../Header.module.css";

describe("Header", () => {
  it("renders header with correct title", () => {
    render(<Header />);

    expect(screen.getByText("Standup Shuffler")).toBeInTheDocument();
  });

  it("has correct CSS module classes", () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toHaveClass(styles.header);
  });

  it("renders dice icon", () => {
    render(<Header />);

    expect(screen.getByText("🎲")).toBeInTheDocument();
  });
});
