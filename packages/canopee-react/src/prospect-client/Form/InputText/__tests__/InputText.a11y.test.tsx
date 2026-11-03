import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { InputText as InputTextApollo } from "../InputTextApollo";
import { InputText as InputTextLF } from "../InputTextLF";

describe.each([
  ["Apollo", InputTextApollo],
  ["LF", InputTextLF],
])("<InputText /> %s accessibility", (_, InputText) => {
  it("should describe the input with its description and helper", async () => {
    const { container } = render(
      <InputText label="Nom" description="Comme sur la carte" helper="Aide" />,
    );

    expect(
      screen.getByRole("textbox", { name: "Nom" }),
    ).toHaveAccessibleDescription("Comme sur la carte Aide");
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each(["error", "warning", "success"] as const)(
    "should describe the input with its %s message",
    (messageType) => {
      render(
        <InputText
          label="Nom"
          helper="Aide"
          message="Le nom est obligatoire"
          messageType={messageType}
        />,
      );

      expect(
        screen.getByRole("textbox", { name: "Nom" }),
      ).toHaveAccessibleDescription("Aide Le nom est obligatoire");
    },
  );

  it("should keep the error message in aria-errormessage", () => {
    render(
      <InputText
        label="Nom"
        required
        message="Le nom est obligatoire"
        messageType="error"
      />,
    );

    const input = screen.getByRole("textbox", { name: "Nom" });
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleErrorMessage("Le nom est obligatoire");
    expect(input).toHaveAccessibleDescription("Le nom est obligatoire");
  });
});
