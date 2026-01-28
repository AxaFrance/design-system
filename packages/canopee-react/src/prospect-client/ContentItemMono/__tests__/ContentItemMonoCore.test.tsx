import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContentItemMonoCore } from "../ContentItemMonoCore";

describe("ContentItemMonoCore Component", () => {
  it("renders with default size and displays title, primarySubtitle, and subtitle", () => {
    const { container } = render(
      <ContentItemMonoCore
        title="Test Title"
        primarySubtitle="Primary Subtitle"
        subtitle="Secondary Subtitle"
      />,
    );

    // Vérifie que le conteneur principal est rendu avec la classe par défaut
    const component = container.firstElementChild;
    expect(component).toHaveClass(
      "af-content-item-mono af-content-item-mono--medium",
    );

    // Vérifie que le titre est affiché
    expect(screen.getByText("Test Title")).toBeInTheDocument();

    // Vérifie que le sous-titre principal est affiché
    expect(screen.getByText("Primary Subtitle")).toBeInTheDocument();

    // Vérifie que le sous-titre secondaire est affiché
    expect(screen.getByText("Secondary Subtitle")).toBeInTheDocument();
  });

  it("renders with a custom size", () => {
    const { container } = render(
      <ContentItemMonoCore
        size="large"
        title="Custom Size Title"
        primarySubtitle="Primary Subtitle"
        subtitle="Secondary Subtitle"
      />,
    );

    // Vérifie que la classe de taille personnalisée est appliquée
    const component = container.firstElementChild;
    expect(component).toHaveClass(
      "af-content-item-mono af-content-item-mono--large",
    );
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
    const { container } = render(
      <ContentItemMonoCore
        title="Custom Left Component"
        leftComponent={<div className="custom-left">Custom Left</div>}
      />,
    );

    // Vérifie que le composant gauche personnalisé est rendu
    expect(container.getElementsByClassName("custom-left").length).toBe(1);

    // Vérifie que le composant par défaut n'est pas rendu
    expect(
      screen.queryByText("", { selector: ".stick" }),
    ).not.toBeInTheDocument();
  });

  it("renders with a custom element using 'as' prop", () => {
    const { container } = render(
      <ContentItemMonoCore as="legend" title="Legend Title" />,
    );

    const component = container.firstElementChild;
    expect(component?.tagName).toBe("LEGEND");
  });

  it("renders as a div by default", () => {
    const { container } = render(<ContentItemMonoCore title="Div Title" />);

    const component = container.firstElementChild;
    expect(component?.tagName).toBe("DIV");
  });
});
