import { render, screen } from "@testing-library/react";
import { FieldsetCommon } from "../FieldsetCommon";
import { Icon } from "../../Icon/IconCommon";

describe("Fieldset", () => {
  it("should render with title", () => {
    render(
      <FieldsetCommon title="Mon titre" IconComponent={Icon}>
        <input type="text" />
      </FieldsetCommon>,
    );

    expect(screen.getByText("Mon titre")).toBeInTheDocument();
  });

  it("should render as a fieldset element", () => {
    render(
      <FieldsetCommon title="Mon titre" IconComponent={Icon}>
        <input type="text" />
      </FieldsetCommon>,
    );

    const fieldset = screen.getByRole("group");
    expect(fieldset.tagName).toBe("FIELDSET");
    expect(fieldset).toHaveClass("af-card");
    expect(fieldset).toHaveClass("af-fieldset");
  });

  it("should render legend element", () => {
    render(
      <FieldsetCommon title="Mon titre" IconComponent={Icon}>
        <input type="text" />
      </FieldsetCommon>,
    );

    const legend = screen.getByTestId("container");
    expect(legend.tagName).toBe("LEGEND");
    expect(legend).toHaveClass("af-content-item-mono");
  });

  it("should render children", () => {
    render(
      <FieldsetCommon title="Mon titre" IconComponent={Icon}>
        <input type="text" data-testid="test-input" />
      </FieldsetCommon>,
    );

    expect(screen.getByTestId("test-input")).toBeInTheDocument();
  });

  it("should render icon when iconProps is provided", () => {
    render(
      <FieldsetCommon
        title="Mon titre"
        iconProps={{ src: "icon.svg" }}
        IconComponent={Icon}
      >
        <input type="text" />
      </FieldsetCommon>,
    );

    expect(screen.getByTestId("fieldset-icon")).toBeInTheDocument();
  });

  it("should render icon when icon prop is provided (deprecated)", () => {
    render(
      <FieldsetCommon title="Mon titre" icon="icon.svg" IconComponent={Icon}>
        <input type="text" />
      </FieldsetCommon>,
    );

    expect(screen.getByTestId("fieldset-icon")).toBeInTheDocument();
  });

  it("should have custom class", () => {
    render(
      <FieldsetCommon
        title="Mon titre"
        className="custom-class"
        IconComponent={Icon}
      >
        <input type="text" />
      </FieldsetCommon>,
    );

    const fieldset = screen.getByRole("group");
    expect(fieldset).toHaveClass("custom-class");
  });
});
