import { render, screen } from "@testing-library/react";
import { FormHelper } from "../FormHelper/FormHelper";

describe("Form Helper", () => {
  it("show links without anchor", async () => {
    render(
      <FormHelper
        formTitle="Assistant de saisie"
        sections={[
          {
            title: "Mon formulaire",
            items: [
              { label: "Configuration", mode: "validated" },
              { label: "Souscription", mode: "validated" },
            ],
          },
        ]}
      />,
    );

    await screen.findByText(/Assistant de saisie/i);
    await screen.findByText(/Configuration/i);
    await screen.findByText(/Souscription/i);
  });

  it("show links with anchor but without section title", async () => {
    render(
      <FormHelper
        formTitle="Assistant de saisie"
        sections={[
          {
            items: [
              { label: "Configuration", mode: "validated", anchor: "config" },
              { label: "Souscripteur", mode: "locked" },
            ],
          },
        ]}
      />,
    );

    await screen.findByText(/Assistant de saisie/i);
    await screen.findByRole("link", { name: /Configuration/i });
    await screen.findByText(/Souscripteur/i);
  });

  it("show form helper with form subtitle", async () => {
    render(
      <FormHelper
        formTitle="Assistant de saisie"
        sections={[
          {
            title: "Mon formulaire",
            items: [
              { label: "Configuration", mode: "validated" },
              { label: "Souscription", mode: "validated" },
            ],
          },
        ]}
      />,
    );
    await screen.findByText(/Assistant de saisie/i);
    await screen.findByText(/Mon formulaire/i);
  });
});
