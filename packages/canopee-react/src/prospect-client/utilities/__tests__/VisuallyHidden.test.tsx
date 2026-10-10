import { render, screen } from "@testing-library/react";
import { VisuallyHidden } from "../VisuallyHidden";

describe("<VisuallyHidden />", () => {
  it("is read by assistive technologies but takes no visible space", () => {
    render(
      <a href="https://www.axa.fr" target="_blank" rel="noreferrer">
        Mentions légales <VisuallyHidden>(nouvelle fenêtre)</VisuallyHidden>
      </a>,
    );

    expect(screen.getByRole("link")).toHaveAccessibleName(
      "Mentions légales (nouvelle fenêtre)",
    );
    expect(screen.getByText("(nouvelle fenêtre)")).toHaveStyle({
      position: "absolute",
      margin: "-1px",
      padding: "0px",
      overflow: "hidden",
    });
  });
});
