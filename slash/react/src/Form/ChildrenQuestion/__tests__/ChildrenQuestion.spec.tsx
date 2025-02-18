import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ChildrenQuestion } from "../ChildrenQuestion";

describe("ChildrenQuestion", () => {
  it("should render ChildrenQuestion", () => {
    // Act
    render(<ChildrenQuestion content="Content of the children question" />);

    // Assert
    expect(
      screen.getByText("Content of the children question"),
    ).toBeInTheDocument();
  });

  it("shouldn't have an accessibility violation <ChildrenQuestion/>", async () => {
    // Act
    const { container } = render(
      <ChildrenQuestion content="Content of the children question" />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
