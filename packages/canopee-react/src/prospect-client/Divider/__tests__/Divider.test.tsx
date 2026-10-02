import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Divider } from "../DividerCommon";

describe("Divider component", () => {
  it("should render with default class name", () => {
    render(<Divider />);
    const dividerElement = screen.getByRole("separator");
    expect(dividerElement).toHaveClass("af-divider");
  });

  it("should render with custom class name", () => {
    render(<Divider className="custom-class" />);
    const dividerElement = screen.getByRole("separator");
    expect(dividerElement).toHaveClass("custom-class");
  });
});
