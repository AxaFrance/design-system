import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ComponentProps } from "react";
import { Tag } from "../Tag";

const classModifiers: ComponentProps<typeof Tag>["classModifier"][] = [
  "success",
  "information",
  "warning",
  "error",
  "default",
  "dark",
  "purple",
  "gray",
  "danger",
  "custom-class",
];

describe("Tag component", () => {
  it.each(classModifiers)(
    `should render "%s" correctly with af-tag classname`,
    (modifier) => {
      render(<Tag classModifier={modifier}>{modifier}</Tag>);

      const tag = screen.getByText(modifier!);
      expect(tag).toHaveClass(`af-tag af-tag--${modifier}`);
    },
  );

  it.each(classModifiers)(
    `should render "%s" correctly with af-badge classname`,
    (modifier) => {
      render(
        <Tag classModifier={modifier} className="af-badge">
          {modifier}
        </Tag>,
      );

      const tag = screen.getByText(modifier!);
      expect(tag).toHaveClass(`af-badge af-badge--${modifier}`);
    },
  );

  it("should renders danger with icon and custom class correctly", () => {
    render(
      <Tag role="alert" className="custom-class" classModifier="error">
        <i role="img" className="glyphicon glyphicon-bell" />
      </Tag>,
    );

    const tag = screen.getByRole("alert");
    const icon = screen.getByRole("img");
    expect(tag).toHaveClass("custom-class custom-class--error");
    expect(icon).toBeInTheDocument();
  });

  it("should render with custom class and no modifier", () => {
    render(<Tag className="custom-class">Custom Tag</Tag>);

    const tag = screen.getByText("Custom Tag");
    expect(tag).toHaveClass("custom-class");
  });
});
