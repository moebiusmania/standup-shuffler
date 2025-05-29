import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/preact";
import List from "../List";

describe("List", () => {
  it("renders empty state when no items provided", () => {
    render(<List items={[]} />);

    expect(screen.getByText("No people in queue")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Add people to the list above to get started with your standup rotation."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("👥")).toBeInTheDocument();
  });

  it("renders all items in the list", () => {
    const items = ["john", "jane", "doe"];
    render(<List items={items} />);

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders cards for each item", () => {
    const items = ["alice", "bob"];
    render(<List items={items} />);

    // Assuming each Card renders an avatar image
    const avatars = screen.getAllByRole("img");
    expect(avatars).toHaveLength(items.length);
  });
});
