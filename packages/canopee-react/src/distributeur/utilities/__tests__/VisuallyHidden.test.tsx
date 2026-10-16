import { render, screen } from "@testing-library/react";
import { VisuallyHidden } from "../VisuallyHidden";

describe("<VisuallyHidden />", () => {
  it("adds its text to the accessible name without displaying it", () => {
    render(
      <a href="/etape-1">
        Identification <VisuallyHidden>(complété)</VisuallyHidden>
      </a>,
    );

    expect(screen.getByRole("link")).toHaveAccessibleName(
      "Identification (complété)",
    );
    expect(screen.getByText("(complété)")).toHaveStyle({
      position: "absolute",
      width: "1px",
      height: "1px",
      overflow: "hidden",
      whiteSpace: "nowrap",
    });
  });
});
