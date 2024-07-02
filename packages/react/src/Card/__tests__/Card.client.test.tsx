import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from "../Card.client";

describe("Card", () => {
  it("should render children", () => {
    render(<Card>A card</Card>);

    const card = screen.getByText("A card");
    expect(card).toHaveClass("af-card");
  });

  it("should have custom class", () => {
    render(<Card className="custom-class">A card</Card>);

    expect(screen.getByText("A card")).toHaveClass("custom-class");
  });

  it("should have custom class with modifier", () => {
    render(
      <Card className="custom-class" classModifier="modifier">
        A card
      </Card>,
    );

    expect(screen.getByText("A card")).toHaveClass(
      "custom-class custom-class--modifier",
    );
  });

  it("should call onClick when card button clicked", async () => {
    const onClick = vi.fn();

    render(<Card onClick={onClick}>A card</Card>);

    userEvent.click(screen.getByRole("button", { name: "A card" }));

    await waitFor(() => {
      expect(onClick).toHaveBeenCalled();
    });
  });
});
