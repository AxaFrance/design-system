import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { NestedQuestion } from "../NestedQuestion";

describe("NestedQuestion", () => {
  it("should render NestedQuestion", () => {
    // Act
    render(
      <NestedQuestion>
        <p>Content of the children question</p>
      </NestedQuestion>,
    );

    // Assert
    expect(
      screen.getByText("Content of the children question"),
    ).toBeInTheDocument();
  });

  it("shouldn't have an accessibility violation <NestedQuestion/>", async () => {
    // Act
    const { container } = render(
      <NestedQuestion>
        <p>Content of the children question</p>
      </NestedQuestion>,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
