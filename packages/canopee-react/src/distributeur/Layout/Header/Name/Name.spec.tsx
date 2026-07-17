import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Name } from "./Name";

describe("Name", () => {
  test("should render title and subtitle without heading semantics", async () => {
    const { container } = render(
      <Name
        title="AXA Distribution"
        subtitle="Partner Portal"
        img="/logo.svg"
      />,
    );

    expect(await axe(container)).toHaveNoViolations();
    expect(screen.getByText("AXA Distribution")).toBeInTheDocument();
    expect(screen.getByText("Partner Portal")).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: /AXA Distribution/i }),
    ).not.toBeInTheDocument();
  });
});
