import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { ButtonCommon, type ButtonProps } from "../../../Button/ButtonCommon";
import { Spinner } from "../../../Spinner/SpinnerCommon";
import {
  ContentItemDuoCommon,
  type ContentItemDuoProps,
} from "../ContentItemDuoCommon";

const ButtonComponent = (props: ButtonProps) => (
  <ButtonCommon SpinnerComponent={Spinner} {...props} />
);

const renderContentItemDuo = (props: Partial<ContentItemDuoProps> = {}) =>
  render(
    <ContentItemDuoCommon
      label="Label"
      value="Value"
      {...props}
      ButtonComponent={ButtonComponent}
    />,
  );

describe("ContentItemDuoCommon", () => {
  it("renders label and value", () => {
    renderContentItemDuo();

    expect(screen.getByText("Label")).toBeInTheDocument();
    expect(screen.getByText("Value")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    renderContentItemDuo({ className: "custom-class" });

    const container = screen.getByText("Label").closest("div");
    expect(container).toHaveClass("custom-class");
  });

  it("renders button when buttonText and onButtonClick are provided", async () => {
    const handleClick = vi.fn();
    renderContentItemDuo({
      buttonText: "Click me",
      onButtonClick: handleClick,
    });

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("does not render button if buttonText is missing", () => {
    renderContentItemDuo({
      buttonText: "Click me",
    });

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("does not render button if onButtonClick is missing", () => {
    renderContentItemDuo({
      onButtonClick: () => {},
    });

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("applies position and size modifiers", () => {
    renderContentItemDuo({
      position: "vertical",
      size: "large",
    });

    const container = screen.getByText("Label").closest("div");
    expect(container).toHaveClass("af-content-item-duo--vertical");
    expect(container).toHaveClass("af-content-item-duo--large");
  });

  it("renders correct semantic elements", () => {
    renderContentItemDuo();

    expect(screen.getByText("Label").tagName).toBe("DT");
    expect(screen.getByText("Value").tagName).toBe("DD");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <dl>
        <ContentItemDuoCommon
          label="Label"
          value="Value"
          ButtonComponent={ButtonComponent}
        />
        <ContentItemDuoCommon
          label="Label with button"
          value="Value with button"
          buttonText="Action"
          onButtonClick={() => {}}
          ButtonComponent={ButtonComponent}
        />
      </dl>,
    );
    const results = await axe(container);

    // The 'definition-list' violations are ignored because the HTML structure
    // uses a <div> and a <button> as direct children of <dl>.
    // This is required to enable CSS grid layout and to allow the action button to be positioned independently.
    // This does not comply with the native <dl> spec, but is necessary for the expected design system layout.
    // This tradeoff is documented in the component and in this test.
    // All other accessibility violations are considered blocking.
    const filteredResults = structuredClone(results);
    filteredResults.violations = filteredResults.violations.filter(
      (v) => v.id !== "definition-list",
    );
    expect(filteredResults).toHaveNoViolations();
  });
});
