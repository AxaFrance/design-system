import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { HeaderTitle } from "./HeaderTitle";

describe("HeaderTitle", () => {
  test("should render title and subtitle", async () => {
    const { container } = render(
      <HeaderTitle title="Main Title" subtitle="Subtitle" />,
    );
    expect(await axe(container)).toHaveNoViolations();
    expect(
      screen.getByRole("heading", { name: /main title/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Subtitle")).toBeInTheDocument();
  });

  test("should render leftSection", async () => {
    const { container } = render(
      <HeaderTitle
        title="Title"
        leftSection={<span data-testid="left-section">Left</span>}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
    expect(screen.getByTestId("left-section")).toHaveTextContent("Left");
  });

  test("should render children", async () => {
    const { container } = render(
      <HeaderTitle title="Title">
        <div data-testid="child">Child content</div>
      </HeaderTitle>,
    );
    expect(await axe(container)).toHaveNoViolations();
    expect(screen.getByTestId("child")).toHaveTextContent("Child content");
  });
});
