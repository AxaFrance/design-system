import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ComponentProps } from "react";
import { Tag } from "../Tag";

const classModifiers: ComponentProps<typeof Tag>["classModifier"][] = [
  "success",
  "info",
  "warning",
  "error",
  "axa",
  "black",
  "purple",
  "gray",
  "danger",
  "custom-class",
];

describe("Tag component", () => {
  classModifiers.forEach((modifier) => {
    it(`should render ${modifier} correctly`, () => {
      render(<Tag classModifier={modifier}>{modifier}</Tag>);

      const tag = screen.getByText(modifier!);
      expect(tag).toHaveClass(`af-tag af-tag--${modifier}`);
    });
  });

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

  it("should have af-badge class on tag", () => {
    render(<Tag>Badge</Tag>);

    const tag = screen.getByText("Badge");
    expect(tag).toHaveClass("af-badge");
  });
});
