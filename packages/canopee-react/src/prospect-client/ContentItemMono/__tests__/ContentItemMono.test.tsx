import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ContentItemMono as ContentItemMonoApollo } from "../ContentItemMonoApollo";
import { ContentItemMono as ContentItemMonoLF } from "../ContentItemMonoLF";

const themes = [
  { name: "Apollo", Component: ContentItemMonoApollo },
  { name: "LF", Component: ContentItemMonoLF },
];

describe.each(themes)("ContentItemMono $name icon", ({ Component }) => {
  it("hides the decorative icon from assistive technologies", async () => {
    const { container } = render(
      <Component type="icon" title="Titre" iconProps={{ src: "icon.svg" }} />,
    );

    const icon = screen.getByTestId("icon");
    expect(icon).toHaveAttribute("aria-hidden", "true");
    expect(icon).toHaveAttribute("focusable", "false");
    expect(await axe(container)).toHaveNoViolations();
  });

  it("names the icon when iconProps has an alt", () => {
    render(
      <Component
        type="icon"
        title="Titre"
        iconProps={{ src: "icon.svg", alt: "Contrat auto" }}
      />,
    );

    expect(screen.getByRole("img", { name: "Contrat auto" })).toBe(
      screen.getByTestId("icon"),
    );
  });
});
