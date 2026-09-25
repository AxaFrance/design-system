import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tag, type TagVariants } from "../Tag";

const variants: TagVariants[] = [
  "success",
  "information",
  "warning",
  "error",
  "default",
  "dark",
  "purple",
  "gray",
  "white",
];
describe("Tag component", () => {
  it("should render an icon with a custom class", () => {
    render(
      <Tag role="alert" className="custom-class" variant="error">
        <i role="presentation" className="glyphicon glyphicon-bell" />
      </Tag>,
    );

    const tag = screen.getByRole("alert");
    const icon = screen.getByRole("presentation");
    expect(tag).toHaveClass("custom-class");
    expect(icon).toBeInTheDocument();
  });

  it("should render with custom class and no modifier", () => {
    render(<Tag className="custom-class">Custom Tag</Tag>);

    const tag = screen.getByText("Custom Tag");
    expect(tag).toHaveClass("custom-class af-tag af-badge");
  });

  describe("variants", () => {
    it.each(variants)(
      `should render "%s" correctly with af-tag classname`,
      (variant) => {
        render(<Tag variant={variant}>{variant}</Tag>);

        const tag = screen.getByText(variant!);
        expect(tag).toHaveClass(`af-tag af-tag--${variant}`);
      },
    );

    it.each(variants)(
      `should render "%s" correctly with af-badge classname`,
      (variant) => {
        render(<Tag variant={variant}>{variant}</Tag>);

        const tag = screen.getByText(variant!);
        expect(tag).toHaveClass(`af-badge af-badge--${variant}`);
      },
    );
  });
});
