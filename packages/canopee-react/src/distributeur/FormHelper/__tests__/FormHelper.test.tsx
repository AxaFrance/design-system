import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { FormHelper } from "../FormHelper";

describe("FormHelper", () => {
  it("renders a labelled complementary landmark", () => {
    render(<FormHelper title="Assistant de création">Contenu</FormHelper>);

    expect(
      screen.getByRole("complementary", { name: "Progression du formulaire" }),
    ).toHaveClass("af-form-helper");
  });

  it("lets the landmark name be overridden", () => {
    render(
      <FormHelper title="Assistant" aria-label="Avancement du contrat">
        Contenu
      </FormHelper>,
    );

    expect(
      screen.getByRole("complementary", { name: "Avancement du contrat" }),
    ).toBeInTheDocument();
  });

  it("renders the title as a h2 by default", () => {
    render(<FormHelper title="Assistant de création">Contenu</FormHelper>);

    expect(
      screen.getByRole("heading", { name: "Assistant de création", level: 2 }),
    ).toHaveClass("af-form-helper__title");
  });

  it("renders the title with the given heading", () => {
    render(
      <FormHelper title="Assistant de création" heading="h3">
        Contenu
      </FormHelper>,
    );

    expect(
      screen.getByRole("heading", { name: "Assistant de création", level: 3 }),
    ).toBeInTheDocument();
  });

  it("renders the legend with the default state texts", () => {
    render(<FormHelper title="Assistant">Contenu</FormHelper>);

    const legend = screen.getAllByRole("list")[0];
    expect(legend).toHaveClass("af-form-helper__legend");
    expect(
      within(legend)
        .getAllByRole("listitem")
        .map((item) => item.textContent),
    ).toEqual(["à compléter", "en cours", "validé"]);
  });

  it("replaces the legend texts with stateLabels", () => {
    render(
      <FormHelper title="Assistant" stateLabels={{ validated: "completed" }}>
        Contenu
      </FormHelper>,
    );

    expect(screen.getByText("completed")).toBeInTheDocument();
    expect(screen.getByText("à compléter")).toBeInTheDocument();
  });

  it("renders its children in the body", () => {
    render(
      <FormHelper title="Assistant">
        <p>Liste des étapes</p>
      </FormHelper>,
    );

    expect(screen.getByText("Liste des étapes").parentElement).toHaveClass(
      "af-form-helper__body",
    );
  });

  it("forwards className and native attributes", () => {
    render(
      <FormHelper title="Assistant" className="sticky" id="helper">
        Contenu
      </FormHelper>,
    );

    const helper = screen.getByRole("complementary");
    expect(helper).toHaveClass("af-form-helper", "sticky");
    expect(helper).toHaveAttribute("id", "helper");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <FormHelper title="Assistant de création">
        <p>Contenu</p>
      </FormHelper>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
