import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  CardCheckboxOptionCommon,
  type CardCheckboxOptionProps,
} from "../../Form/Checkbox/CardCheckboxOption/CardCheckboxOptionCommon";
import { Checkbox } from "../../Form/Checkbox/Checkbox/CheckboxCommon";
import { Icon } from "../../Icon/IconCommon";
import { DebugGridCommon } from "../DebugGridCommon";

const CardCheckboxOption = (props: CardCheckboxOptionProps) => (
  <CardCheckboxOptionCommon
    {...props}
    CheckboxComponent={Checkbox}
    IconComponent={Icon}
  />
);

describe("DebugGridCommon", () => {
  it("should render CardCheckbox checked when isCheckedByDefault is true", () => {
    render(
      <DebugGridCommon
        CardCheckboxOption={CardCheckboxOption}
        isCheckedByDefault
      />,
    );
    const cardCheckbox = screen.getByRole("checkbox");
    expect(cardCheckbox).toBeInTheDocument();
    expect(cardCheckbox).toBeChecked();
  });

  it("should render CardCheckbox unchecked by default", () => {
    render(<DebugGridCommon CardCheckboxOption={CardCheckboxOption} />);
    const cardCheckbox = screen.getByRole("checkbox");
    expect(cardCheckbox).toBeInTheDocument();
    expect(cardCheckbox).not.toBeChecked();
  });

  it("should not render DebugGrid in production without forceVisible", () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";
    render(<DebugGridCommon CardCheckboxOption={CardCheckboxOption} />);
    const cardCheckbox = screen.queryByRole("checkbox");
    expect(cardCheckbox).not.toBeInTheDocument();
    process.env.NODE_ENV = originalEnv;
  });

  it("should render DebugGrid in production when forceVisible is true", () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";
    render(
      <DebugGridCommon<{ forceVisible?: boolean }>
        CardCheckboxOption={CardCheckboxOption}
        forceVisible
      />,
    );

    const cardCheckbox = screen.getByRole("checkbox");
    expect(cardCheckbox).toBeInTheDocument();
    process.env.NODE_ENV = originalEnv;
  });

  it("should render the correct number of columns when cols prop is set", () => {
    render(
      <DebugGridCommon CardCheckboxOption={CardCheckboxOption} cols={5} />,
    );
    const grid = screen.getByRole("presentation");
    const cols = grid.querySelectorAll(".cols");
    expect(cols).toHaveLength(5);
  });
});
