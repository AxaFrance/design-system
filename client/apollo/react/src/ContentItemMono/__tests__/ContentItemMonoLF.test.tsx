import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContentItemMono } from "../ContentItemMonoLF";

describe("ContentItemMono Component", () => {
  it("renders correctly with type 'picture'", () => {
    render(
      <ContentItemMono
        type="picture"
        title="Picture Title"
        subtitle="Subtitle title"
        picture="test-image.jpg"
      />,
    );

    // Vérifie que le titre est affiché
    expect(screen.getByText("Picture Title")).toBeInTheDocument();

    // Vérifie que l'image est affichée avec le bon src et alt
    const image = screen.getByRole("img", { name: "Picture Title" });
    expect(image).toHaveAttribute("src", "test-image.jpg");
    expect(image).toHaveAttribute("alt", "Picture Title");
  });

  it("renders correctly with type 'icon'", () => {
    render(
      <ContentItemMono
        type="icon"
        title="Icon Title"
        subtitle1="Primary Subtitle"
        subtitle2="Secondary Subtitle"
        icon="test-icon.svg"
      />,
    );

    // Vérifie que le titre est affiché
    expect(screen.getByText("Icon Title")).toBeInTheDocument();

    // Vérifie que le sous-titre principal est affiché
    expect(screen.getByText("Primary Subtitle")).toBeInTheDocument();

    // Vérifie que le sous-titre secondaire est affiché
    expect(screen.getByText("Secondary Subtitle")).toBeInTheDocument();

    // Vérifie que l'icône est affichée avec le bon src
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveAttribute("data-src", "test-icon.svg");
  });

  it("renders correctly with type 'stick'", () => {
    render(
      <ContentItemMono
        type="stick"
        title="Stick Title"
        subtitle="Stick Subtitle"
      />,
    );

    // Vérifie que le titre est affiché
    expect(screen.getByText("Stick Title")).toBeInTheDocument();

    // Vérifie que le sous-titre est affiché
    expect(screen.getByText("Stick Subtitle")).toBeInTheDocument();

    // Vérifie que le composant par défaut est rendu
    const stick = screen.getByText("", { selector: ".stick" });
    expect(stick).toBeInTheDocument();
  });
});
