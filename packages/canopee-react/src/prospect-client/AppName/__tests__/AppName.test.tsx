import { render, screen } from "@testing-library/react";
import { MemoryRouter, Link } from "react-router";
import { describe, expect, it } from "vitest";

import { AppNameCommon as AppName } from "../AppNameCommon";

describe("AppName", () => {
  it("renders logo and label", () => {
    render(<AppName label="Mon app" />);

    expect(screen.getByText("Mon app")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Logo AXA" })).toHaveClass(
      "af-app-name__logo",
    );
  });

  it("applies custom class name", () => {
    render(<AppName label="Mon app" className="custom-class" />);

    expect(screen.getByText("Mon app").closest(".af-app-name")).toHaveClass(
      "custom-class",
    );
  });

  it("renders a React Router Link around the logo when LogoLinkComponent is provided", () => {
    render(
      <MemoryRouter>
        <AppName
          label="Mon app"
          LogoLinkComponent={Link}
          logoLinkProps={{ to: "/" }}
        />
      </MemoryRouter>,
    );

    const logo = screen.getByRole("img", { name: "Logo AXA" });
    const link = logo.closest("a");

    expect(link).toHaveClass("af-app-name__logo-link");
    expect(link).toHaveAttribute("href", "/");
  });
});
