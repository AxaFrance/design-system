import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { ClickItem } from "../ClickItemApollo";

describe("ClickItem Component Variant: Large", () => {
  it("renders ClickItem component with state default", () => {
    const { container } = render(
      <ClickItem
        icon="icon.svg"
        state="default"
        subtitle="Sous-titre"
        tagLabel="Texte Tag"
        tagProps={{
          variant: "info",
        }}
        textSecondary="Texte secondaire"
        textTertiary="Texte tertiaire"
        title="Titre"
        variant="large"
      />,
    );

    expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
      "data-src",
      "icon.svg",
    );

    expect(container.firstChild).toHaveClass("af-apollo-click-item");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--large");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--default");

    expect(screen.getByText("Titre")).toBeInTheDocument();
    expect(screen.getByText("Sous-titre")).toBeInTheDocument();
    expect(screen.getByText("Texte secondaire")).toBeInTheDocument();
    expect(screen.getByText("Texte tertiaire")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag").parentElement).toHaveClass(
      "af-tag af-tag--info",
    );
  });

  it("renders ClickItem component with state default and custom tag props", () => {
    const { container } = render(
      <ClickItem
        icon="icon.svg"
        state="default"
        subtitle="Sous-titre"
        tagLabel="Texte Tag"
        tagProps={{
          variant: "warning",
        }}
        textSecondary="Texte secondaire"
        textTertiary="Texte tertiaire"
        title="Titre"
        variant="large"
      />,
    );

    expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
      "data-src",
      "icon.svg",
    );

    expect(container.firstChild).toHaveClass("af-apollo-click-item");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--large");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--default");

    expect(screen.getByText("Titre")).toBeInTheDocument();
    expect(screen.getByText("Sous-titre")).toBeInTheDocument();
    expect(screen.getByText("Texte secondaire")).toBeInTheDocument();
    expect(screen.getByText("Texte tertiaire")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag").parentElement).toHaveClass(
      "af-tag af-tag--warning",
    );
  });

  it("renders ClickItem component with state disabled", () => {
    const { container } = render(
      <ClickItem
        icon="icon.svg"
        state="disabled"
        subtitle="Sous-titre"
        tagLabel="Texte Tag"
        tagProps={{
          variant: "info",
        }}
        textSecondary="Texte secondaire"
        textTertiary="Texte tertiaire"
        title="Titre"
        variant="large"
      />,
    );

    expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
      "data-src",
      "icon.svg",
    );

    expect(container.firstChild).toHaveClass("af-apollo-click-item");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--large");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--disabled");

    expect(screen.getByText("Titre")).toBeInTheDocument();
    expect(screen.getByText("Sous-titre")).toBeInTheDocument();
    expect(screen.getByText("Texte secondaire")).toBeInTheDocument();
    expect(screen.getByText("Texte tertiaire")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag").parentElement).toHaveClass(
      "af-tag af-tag--neutral",
    );
  });

  it("renders ClickItem component with state disabled and custom tag props", () => {
    const { container } = render(
      <ClickItem
        icon="icon.svg"
        state="disabled"
        subtitle="Sous-titre"
        tagLabel="Texte Tag"
        tagProps={{
          variant: "warning",
        }}
        textSecondary="Texte secondaire"
        textTertiary="Texte tertiaire"
        title="Titre"
        variant="large"
      />,
    );

    expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
      "data-src",
      "icon.svg",
    );

    expect(container.firstChild).toHaveClass("af-apollo-click-item");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--large");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--disabled");

    expect(screen.getByText("Titre")).toBeInTheDocument();
    expect(screen.getByText("Sous-titre")).toBeInTheDocument();
    expect(screen.getByText("Texte secondaire")).toBeInTheDocument();
    expect(screen.getByText("Texte tertiaire")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag").parentElement).toHaveClass(
      "af-tag af-tag--neutral",
    );
  });

  it("renders ClickItem component with state loading", () => {
    const { container } = render(
      <ClickItem
        icon="icon.svg"
        state="loading"
        subtitle="Sous-titre"
        tagLabel="Texte Tag"
        tagProps={{
          variant: "info",
        }}
        textSecondary="Texte secondaire"
        textTertiary="Texte tertiaire"
        title="Titre"
        variant="large"
      />,
    );

    expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
      "data-src",
      "icon.svg",
    );

    expect(container.firstChild).toHaveClass("af-apollo-click-item");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--large");

    expect(screen.getByText("Titre")).toBeInTheDocument();
    expect(screen.getByText("Sous-titre")).toBeInTheDocument();
    expect(screen.getByText("Texte secondaire")).toBeInTheDocument();
    expect(screen.getByText("Texte tertiaire")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag").parentElement).toHaveClass(
      "af-tag af-tag--info",
    );
    expect(screen.getByLabelText("Chargement en cours")).toBeInTheDocument();
  });
});

describe("ClickItem Component Variant: Medium", () => {
  it("renders ClickItem component with state default", () => {
    const { container } = render(
      <ClickItem
        icon="icon.svg"
        state="default"
        subtitle="Sous-titre"
        tagLabel="Texte Tag"
        tagProps={{
          variant: "info",
        }}
        title="Titre"
        variant="medium"
      />,
    );

    expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
      "data-src",
      "icon.svg",
    );

    expect(container.firstChild).toHaveClass("af-apollo-click-item");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--medium");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--default");

    expect(screen.getByText("Titre")).toBeInTheDocument();
    expect(screen.getByText("Sous-titre")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag").parentElement).toHaveClass(
      "af-tag af-tag--info",
    );
  });

  it("renders ClickItem component with state default and custom tag props", () => {
    const { container } = render(
      <ClickItem
        icon="icon.svg"
        state="default"
        subtitle="Sous-titre"
        tagLabel="Texte Tag"
        tagProps={{
          variant: "warning",
        }}
        title="Titre"
        variant="medium"
      />,
    );

    expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
      "data-src",
      "icon.svg",
    );

    expect(container.firstChild).toHaveClass("af-apollo-click-item");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--medium");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--default");

    expect(screen.getByText("Titre")).toBeInTheDocument();
    expect(screen.getByText("Sous-titre")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag").parentElement).toHaveClass(
      "af-tag af-tag--warning",
    );
  });

  it("renders ClickItem component with state disabled", () => {
    const { container } = render(
      <ClickItem
        icon="icon.svg"
        state="disabled"
        subtitle="Sous-titre"
        tagLabel="Texte Tag"
        tagProps={{
          variant: "info",
        }}
        title="Titre"
        variant="medium"
      />,
    );

    expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
      "data-src",
      "icon.svg",
    );

    expect(container.firstChild).toHaveClass("af-apollo-click-item");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--medium");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--disabled");

    expect(screen.getByText("Titre")).toBeInTheDocument();
    expect(screen.getByText("Sous-titre")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag").parentElement).toHaveClass(
      "af-tag af-tag--neutral",
    );
  });

  it("renders ClickItem component with state disabled and custom tag props", () => {
    const { container } = render(
      <ClickItem
        icon="icon.svg"
        state="disabled"
        subtitle="Sous-titre"
        tagLabel="Texte Tag"
        tagProps={{
          variant: "warning",
        }}
        title="Titre"
        variant="medium"
      />,
    );

    expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
      "data-src",
      "icon.svg",
    );

    expect(container.firstChild).toHaveClass("af-apollo-click-item");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--medium");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--disabled");

    expect(screen.getByText("Titre")).toBeInTheDocument();
    expect(screen.getByText("Sous-titre")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag")).toBeInTheDocument();
    expect(screen.getByText("Texte Tag").parentElement).toHaveClass(
      "af-tag af-tag--neutral",
    );
  });
});

describe("ClickItem Component Variant: Small", () => {
  it("renders the component with all props", () => {
    const { container } = render(
      <ClickItem
        icon="icon.svg"
        state="default"
        tagLabel="Texte Tag"
        tagProps={{
          variant: "info",
        }}
        title="Titre"
        variant="small"
      />,
    );

    expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
      "data-src",
      "icon.svg",
    );

    expect(container.firstChild).toHaveClass("af-apollo-click-item");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--small");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--default");

    expect(screen.getByText("Titre")).toBeInTheDocument();
  });
});

describe("ClickItem Component Variant: Agent", () => {
  it("renders the component with all props", () => {
    const { container } = render(
      <ClickItem
        basePictureProps={{ "data-src": "picture.png", alt: "My Photo" }}
        state="default"
        subtitle="Sous-titre"
        title="Titre"
        variant="agent"
      />,
    );

    expect(container.firstChild).toHaveClass("af-apollo-click-item");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--agent");
    expect(container.firstChild).toHaveClass("af-apollo-click-item--default");

    expect(screen.getByAltText("My Photo")).toBeInTheDocument();
    expect(screen.getByText("Titre")).toBeInTheDocument();
    expect(screen.getByText("Sous-titre")).toBeInTheDocument();
  });
});
