import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { MainContainer } from "../MainContainer";
import { Button } from "../../../Button/Button";

describe("MainContainer", () => {
  it("have accessible name based on the content", () => {
    // Act
    render(
      <MainContainer>
        <Button>Button</Button>
      </MainContainer>,
    );

    // Assert
    expect(screen.getByRole("button", { name: "Button" })).toBeInTheDocument();
  });

  it("shouldn't have an accessibility violation on error", async () => {
    // Act
    const { container } = render(
      <MainContainer>
        <Button>Button</Button>
      </MainContainer>,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
