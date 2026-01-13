import { render, screen, within } from "@testing-library/react";
import { FieldsetCommon } from "../FieldsetCommon";
import { Icon } from "../../Icon/IconCommon";
import { CardCommon } from "../../Card/CardCommon";

describe("Fieldset", () => {
  it("should render with title", () => {
    render(
      <FieldsetCommon
        title="Mon titre"
        IconComponent={Icon}
        CardComponent={CardCommon}
      >
        <input type="text" />
      </FieldsetCommon>,
    );

    expect(screen.getByText("Mon titre")).toBeInTheDocument();
  });

  it("should render as a fieldset element", () => {
    render(
      <FieldsetCommon
        title="Mon titre"
        IconComponent={Icon}
        CardComponent={CardCommon}
      >
        <input type="text" />
      </FieldsetCommon>,
    );

    const fieldset = screen.getByRole("group");
    expect(fieldset.tagName).toBe("FIELDSET");
    expect(fieldset).toHaveClass("af-card");
    expect(fieldset).toHaveClass("af-fieldset");
  });

  it("should render legend element with title and icon", () => {
    render(
      <FieldsetCommon
        title="Mon titre"
        iconProps={{ src: "icon.svg" }}
        IconComponent={Icon}
        CardComponent={CardCommon}
      >
        <input type="text" />
      </FieldsetCommon>,
    );

    const title = screen.getByText("Mon titre");
    const legend = title.closest("legend");
    expect(legend).toBeInTheDocument();
    expect(legend).toHaveClass("af-content-item-mono");
    expect(within(legend!).getByText("Mon titre")).toBeInTheDocument();
    expect(legend?.getElementsByClassName("af-icon").length).toBe(1);
  });

  it("should render children", () => {
    render(
      <FieldsetCommon
        title="Mon titre"
        IconComponent={Icon}
        CardComponent={CardCommon}
      >
        <input type="text" placeholder="Saisir une valeur" />
      </FieldsetCommon>,
    );

    expect(
      screen.getByPlaceholderText("Saisir une valeur"),
    ).toBeInTheDocument();
  });

  it("should have custom class", () => {
    render(
      <FieldsetCommon
        title="Mon titre"
        className="custom-class"
        IconComponent={Icon}
        CardComponent={CardCommon}
      >
        <input type="text" />
      </FieldsetCommon>,
    );

    const fieldset = screen.getByRole("group");
    expect(fieldset).toHaveClass("custom-class");
  });
});
