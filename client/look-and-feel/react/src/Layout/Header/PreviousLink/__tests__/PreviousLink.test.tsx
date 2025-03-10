import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PreviousLink } from "../PreviousLink";

describe("PreviousLink", () => {
  it("should render previous link", async () => {
    const handleClick = vi.fn();

    render(<PreviousLink handleClick={handleClick}>Retour</PreviousLink>);

    const previousLinkText = screen.getByText("Retour");

    expect(previousLinkText).toBeInTheDocument();

    await userEvent.click(previousLinkText);

    expect(previousLinkText).toHaveBeenCalled();
  });
});
