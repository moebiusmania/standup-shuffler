import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/preact";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders nothing when visible is false", () => {
    const { container } = render(
      <Footer visible={false} next={() => {}} clear={() => {}} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders footer when visible is true", () => {
    render(<Footer visible={true} next={() => {}} clear={() => {}} />);

    expect(screen.getByText("clear list")).toBeInTheDocument();
    expect(screen.getByText("next one!")).toBeInTheDocument();
  });

  it("calls next function when next button is clicked", () => {
    const nextMock = vi.fn();
    render(<Footer visible={true} next={nextMock} clear={() => {}} />);

    fireEvent.click(screen.getByText("next one!"));
    expect(nextMock).toHaveBeenCalledTimes(1);
  });

  it("calls clear function when clear button is clicked", () => {
    const clearMock = vi.fn();
    render(<Footer visible={true} next={() => {}} clear={clearMock} />);

    fireEvent.click(screen.getByText("clear list"));
    expect(clearMock).toHaveBeenCalledTimes(1);
  });
});
