import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContentItemMonoCore } from "../ContentItemMonoCore";

describe("ContentItemMonoCore Component", () => {
  it("renders with default size and displays title, primarySubtitle, and subtitle", () => {
    render(
      <ContentItemMonoCore
        title="Test Title"
        primarySubtitle="Primary Subtitle"
        subtitle="Secondary Subtitle"
      />,
    );

    // Vérifie que le conteneur principal est rendu avec la classe par défaut
    const container = screen.getByTestId("container");
    expect(container).toHaveClass("af-content-item-mono medium");

    // Vérifie que le titre est affiché
    expect(screen.getByText("Test Title")).toBeInTheDocument();

    // Vérifie que le sous-titre principal est affiché
    expect(screen.getByText("Primary Subtitle")).toBeInTheDocument();

    // Vérifie que le sous-titre secondaire est affiché
    expect(screen.getByText("Secondary Subtitle")).toBeInTheDocument();

    // Vérifie que le composant gauche par défaut est rendu
    expect(screen.getByText("", { selector: ".stick" })).toBeInTheDocument();
  });

  it("renders with a custom size", () => {
    render(
      <ContentItemMonoCore
        size="large"
        title="Custom Size Title"
        primarySubtitle="Primary Subtitle"
        subtitle="Secondary Subtitle"
      />,
    );

    // Vérifie que la classe de taille personnalisée est appliquée
    const container = screen.getByTestId("container");
    expect(container).toHaveClass("af-content-item-mono large");
  });

  it("renders without primarySubtitle when not provided", () => {
    render(
      <ContentItemMonoCore
        title="No Primary Subtitle"
        subtitle="Secondary Subtitle"
      />,
    );

    // Vérifie que le sous-titre principal n'est pas affiché
    expect(screen.queryByText("Primary Subtitle")).not.toBeInTheDocument();

    // Vérifie que le sous-titre secondaire est affiché
    expect(screen.getByText("Secondary Subtitle")).toBeInTheDocument();
  });

  it("renders without subtitle when not provided", () => {
    render(
      <ContentItemMonoCore
        title="No Subtitle"
        primarySubtitle="Primary Subtitle"
      />,
    );

    // Vérifie que le sous-titre secondaire n'est pas affiché
    expect(screen.queryByText("Secondary Subtitle")).not.toBeInTheDocument();

    // Vérifie que le sous-titre principal est affiché
    expect(screen.getByText("Primary Subtitle")).toBeInTheDocument();
  });

  it("renders with a custom leftComponent", () => {
    render(
      <ContentItemMonoCore
        title="Custom Left Component"
        leftComponent={<div data-testid="custom-left">Custom Left</div>}
      />,
    );

    // Vérifie que le composant gauche personnalisé est rendu
    expect(screen.getByTestId("custom-left")).toBeInTheDocument();

    // Vérifie que le composant par défaut n'est pas rendu
    expect(
      screen.queryByText("", { selector: ".stick" }),
    ).not.toBeInTheDocument();
  });
});
