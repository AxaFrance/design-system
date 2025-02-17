import { render, screen } from "@testing-library/react";
import type { PropsWithChildren } from "react";
import { describe, expect, it } from "vitest";
import { Typography } from "../Typography";

describe("Typography component", () => {
  it("should render with default variant", () => {
    render(<Typography>Test Text</Typography>);

    const element = screen.getByText("Test Text");
    expect(element.tagName).toStrictEqual("P");
    expect(element).toHaveClass("af-typography--text");
  });

  it.each(
    Object.entries({
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      text: "p",
      label: "label",
      "text-static": "p",
      "label-restitution": "p",
      "value-restitution": "p",
      button: "button",
      link: "a",
      tag: "p",
      "form-error": "small",
      "app-name": "p",
      "app-subtitle": "p",
      user: "p",
      copyright: "p",
      "step-train": "p",
    }),
  )("should render with specified variant %s", (variant, expectedTag) => {
    render(<Typography variant={variant}>Test Text</Typography>);

    const element = screen.getByText("Test Text");
    expect(element.tagName).toStrictEqual(expectedTag.toUpperCase());
    expect(element).toHaveClass(`af-typography--${variant}`);
  });

  it("should render with custom component", () => {
    const CustomComponent = ({ children }: PropsWithChildren) => (
      <div>{children}</div>
    );

    render(
      <Typography component={CustomComponent}>
        Custom Component Text
      </Typography>,
    );

    const element = screen.getByText("Custom Component Text");
    expect(element.tagName).toStrictEqual("DIV");
  });

  it("should apply additional class names", () => {
    render(
      <Typography className="custom-class">Text with custom class</Typography>,
    );

    const element = screen.getByText("Text with custom class");
    expect(element).toHaveClass("af-typography--text");
    expect(element).toHaveClass("custom-class");
  });
});
