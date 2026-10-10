import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { InputText } from "../InputTextApollo";

describe("<InputText /> accessibility", () => {
  it("should describe the input with its description and helper", async () => {
    const { container } = render(
      <InputText label="Nom" description="Comme sur la carte" helper="Aide" />,
    );

    expect(
      screen.getByRole("textbox", { name: "Nom" }),
    ).toHaveAccessibleDescription("Comme sur la carte Aide");
    expect(await axe(container)).toHaveNoViolations();
  });
});
