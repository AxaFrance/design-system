import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CardCheckbox } from "../../Form/Checkbox/CardCheckbox/CardCheckboxApollo";
import { DebugGridCommon, type DebugGridCommonProps } from "../DebugGridCommon";

describe("DebugGridCommon", () => {
  it("should render CardCheckbox checked when isCheckedByDefault is true", () => {
    render(
      <DebugGridCommon
        CardCheckbox={CardCheckbox as DebugGridCommonProps["CardCheckbox"]}
        isCheckedByDefault
      />,
    );
    const cardCheckbox = screen.getByRole("checkbox");
    expect(cardCheckbox).toBeInTheDocument();
    expect(cardCheckbox).toBeChecked();
  });

  it("should render CardCheckbox unchecked by default", () => {
    render(
      <DebugGridCommon
        CardCheckbox={CardCheckbox as DebugGridCommonProps["CardCheckbox"]}
      />,
    );
    const cardCheckbox = screen.getByRole("checkbox");
    expect(cardCheckbox).toBeInTheDocument();
    expect(cardCheckbox).not.toBeChecked();
  });

  it("should not render DebugGrid in production without forceVisible", () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";
    render(
      <DebugGridCommon
        CardCheckbox={CardCheckbox as DebugGridCommonProps["CardCheckbox"]}
      />,
    );
    const cardCheckbox = screen.queryByRole("checkbox");
    expect(cardCheckbox).not.toBeInTheDocument();
    process.env.NODE_ENV = originalEnv;
  });

  it("should render DebugGrid in production when forceVisible is true", () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";
    render(
      <DebugGridCommon<{ forceVisible?: boolean }>
        CardCheckbox={CardCheckbox as DebugGridCommonProps["CardCheckbox"]}
        forceVisible
      />,
    );

    const cardCheckbox = screen.getByRole("checkbox");
    expect(cardCheckbox).toBeInTheDocument();
    process.env.NODE_ENV = originalEnv;
  });

  it("should render the correct number of columns when cols prop is set", () => {
    render(
      <DebugGridCommon
        CardCheckbox={CardCheckbox as DebugGridCommonProps["CardCheckbox"]}
        cols={5}
      />,
    );
    const grid = screen.getByRole("presentation");
    const cols = grid.querySelectorAll(".cols");
    expect(cols).toHaveLength(5);
  });
});
