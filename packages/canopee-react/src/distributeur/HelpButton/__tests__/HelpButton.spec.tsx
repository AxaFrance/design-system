import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { HelpButton } from "..";

describe("<HelpButton />", () => {
  it.each(["click", "hover"] as const)(
    "names the default trigger Aide in %s mode",
    async (mode) => {
      const { container } = render(
        <HelpButton mode={mode}>Texte d’aide</HelpButton>,
      );
      const trigger = screen.getByRole("button");

      expect(trigger).toHaveAccessibleName("Aide");
      expect(container.querySelector("svg")).toHaveAttribute(
        "aria-hidden",
        "true",
      );
      expect(await axe(container)).toHaveNoViolations();
    },
  );

  it("reads the open help text as the description of the trigger", async () => {
    const user = userEvent.setup();
    render(<HelpButton mode="click">Texte d’aide détaillé</HelpButton>);
    const trigger = screen.getByRole("button");

    await user.click(trigger);

    expect(trigger).toHaveAccessibleName("Aide");
    expect(trigger).toHaveAccessibleDescription("Texte d’aide détaillé");
  });

  it("keeps the name given by a text helpButtonContent", async () => {
    const { container } = render(
      <HelpButton mode="click" helpButtonContent="En savoir plus">
        Texte d’aide
      </HelpButton>,
    );

    expect(screen.getByRole("button")).toHaveAccessibleName("En savoir plus");
    expect(screen.getByRole("button")).not.toHaveAttribute("aria-label");
    expect(await axe(container)).toHaveNoViolations();
  });

  it("names the trigger with triggerAriaLabel", () => {
    render(
      <HelpButton mode="click" triggerAriaLabel="Aide sur le numéro de contrat">
        Texte d’aide
      </HelpButton>,
    );

    expect(screen.getByRole("button")).toHaveAccessibleName(
      "Aide sur le numéro de contrat",
    );
  });
});
