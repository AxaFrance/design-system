import { render, screen } from "@testing-library/react";
import { BurgerMenu } from "../BurgerMenu";
import { ButtonClient, Variants } from "../../Button/Button";

describe("BurgerMenu", () => {
  it("should render with one click item", () => {
    render(
      <BurgerMenu
        handleClose={() => true}
        items={[
          {
            label: "test",
            isDisabled: false,
            icon: '<Svg src={menu} className="icon-menu" />',
          },
        ]}
      />,
    );

    screen.getByRole("navigation");
    screen.getByRole("button", {
      name: /test/i,
    });
  });

  it("should render with last button", () => {
    render(
      <BurgerMenu
        handleClose={() => true}
        items={[
          {
            label: "test",
            isDisabled: false,
          },
        ]}
      >
        <ButtonClient variant={Variants.secondary}>Déconnexion</ButtonClient>
      </BurgerMenu>,
    );

    screen.getByRole("navigation");
    screen.getByRole("button", {
      name: /déconnexion/i,
    });
  });
  it("should have class modifier", () => {
    render(
      <BurgerMenu
        items={[
          {
            label: "test",
            isDisabled: false,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" />',
            classModifier: "small",
          },
        ]}
        handleClose={() => true}
        className="test"
      />,
    );
    expect(screen.getByRole("navigation")).toHaveClass("test");
    expect(screen.getByRole("button")).toHaveClass("af-click-item--small");
  });
});
