import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import { ClickItem } from "../ClickItemApollo";

describe("ClickItem Component", () => {
  const commonProps = {
    icon: "icon.svg",
    state: "default",
    subtitle: "Sous-titre",
    tagLabel: "Texte Tag",
    tagProps: {
      variant: "info",
    },
    title: "Titre",
    ariaLabelForActionIcon: "Aller à la page de détails",
  };

  const stateAndTagTestCases = [
    {
      state: "default",
      tagVariant: "info",
      expectedTagClass: "af-tag af-tag--info",
      noOfClick: 1,
    },
    {
      state: "default",
      tagVariant: "warning",
      expectedTagClass: "af-tag af-tag--warning",
      noOfClick: 1,
    },
    {
      state: "disabled",
      tagVariant: "info",
      expectedTagClass: "af-tag af-tag--neutral",
      noOfClick: 0,
    },
    {
      state: "disabled",
      tagVariant: "warning",
      expectedTagClass: "af-tag af-tag--neutral",
      noOfClick: 0,
    },
  ];

  describe("ClickItem Component Variant: Large", () => {
    const assertCommon = () => {
      expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
        "data-src",
        "icon.svg",
      );
      expect(screen.getByText("Titre")).toBeInTheDocument();
      expect(screen.getByText("Sous-titre")).toBeInTheDocument();
      expect(screen.getByText("Texte secondaire")).toBeInTheDocument();
      expect(screen.getByText("Texte tertiaire")).toBeInTheDocument();
      expect(screen.getByText("Texte Tag")).toBeInTheDocument();
    };

    const defaultProps = {
      ...commonProps,
      textSecondary: "Texte secondaire",
      textTertiary: "Texte tertiaire",
      variant: "large",
    };

    it.each(stateAndTagTestCases)(
      "renders ClickItem variant: Large with state $state and tag variant $tagVariant",
      async ({ state, tagVariant, expectedTagClass, noOfClick }) => {
        const handleClick = vi.fn();
        const { container } = render(
          <ClickItem
            {...defaultProps}
            state={state}
            tagProps={{ variant: tagVariant }}
            onClick={handleClick}
          />,
        );

        expect(container.firstChild).toHaveClass("af-apollo-click-item");
        expect(container.firstChild).toHaveClass("af-apollo-click-item--large");
        expect(container.firstChild).toHaveClass(
          `af-apollo-click-item--${state}`,
        );
        assertCommon();
        expect(screen.getByText("Texte Tag").parentElement).toHaveClass(
          expectedTagClass,
        );
        await userEvent.click(screen.getByText("Titre"));
        expect(handleClick).toHaveBeenCalledTimes(noOfClick);
      },
    );

    it("renders ClickItem component with state loading", async () => {
      const handleClick = vi.fn();

      const { container } = render(
        <ClickItem {...defaultProps} state="loading" onClick={handleClick} />,
      );

      expect(container.firstChild).toHaveClass("af-apollo-click-item");
      expect(container.firstChild).toHaveClass("af-apollo-click-item--large");

      assertCommon();
      expect(screen.getByText("Texte Tag").parentElement).toHaveClass(
        "af-tag af-tag--info",
      );
      expect(screen.getByLabelText("Chargement en cours")).toBeInTheDocument();
      await userEvent.click(screen.getByText("Titre"));
      expect(handleClick).toHaveBeenCalledTimes(0);
    });

    it("shouldn't have an accessibility violation when enabled", async () => {
      const { container } = render(
        <ClickItem {...defaultProps} variant="large" onClick={vi.fn()} />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("shouldn't have an accessibility violation when disabled", async () => {
      const { container } = render(
        <ClickItem
          {...defaultProps}
          variant="large"
          state="disabled"
          onClick={vi.fn()}
        />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("shouldn't have an accessibility violation when use as display", async () => {
      const { container } = render(
        <ClickItem {...defaultProps} variant="large" state="disabled" />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("ClickItem Component Variant: Medium", () => {
    const assertCommon = () => {
      expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
        "data-src",
        "icon.svg",
      );
      expect(screen.getByText("Titre")).toBeInTheDocument();
      expect(screen.getByText("Sous-titre")).toBeInTheDocument();
      expect(screen.getByText("Texte Tag")).toBeInTheDocument();
    };

    const defaultProps = {
      ...commonProps,
      variant: "medium",
    };

    it.each(stateAndTagTestCases)(
      "renders ClickItem variant: Medium with state $state and tag variant $tagVariant",
      ({ state, tagVariant, expectedTagClass }) => {
        const { container } = render(
          <ClickItem
            {...defaultProps}
            state={state}
            tagProps={{ variant: tagVariant }}
          />,
        );

        expect(container.firstChild).toHaveClass("af-apollo-click-item");
        expect(container.firstChild).toHaveClass(
          "af-apollo-click-item--medium",
        );
        expect(container.firstChild).toHaveClass(
          `af-apollo-click-item--${state}`,
        );
        assertCommon();
        expect(screen.getByText("Texte Tag").parentElement).toHaveClass(
          expectedTagClass,
        );
      },
    );

    it("shouldn't have an accessibility violation when enabled", async () => {
      const { container } = render(
        <ClickItem {...defaultProps} variant="medium" onClick={vi.fn()} />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("shouldn't have an accessibility violation when disabled", async () => {
      const { container } = render(
        <ClickItem
          {...defaultProps}
          variant="medium"
          state="disabled"
          onClick={vi.fn()}
        />,
      );
      expect(await axe(container)).toHaveNoViolations();
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

    it("shouldn't have an accessibility violation", async () => {
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
      expect(await axe(container)).toHaveNoViolations();
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
          ariaLabelForActionIcon="Aller à la page de détails"
        />,
      );

      expect(container.firstChild).toHaveClass("af-apollo-click-item");
      expect(container.firstChild).toHaveClass("af-apollo-click-item--agent");
      expect(container.firstChild).toHaveClass("af-apollo-click-item--default");

      expect(screen.getByAltText("My Photo")).toBeInTheDocument();
      expect(screen.getByText("Titre")).toBeInTheDocument();
      expect(screen.getByText("Sous-titre")).toBeInTheDocument();
    });

    it("shouldn't have an accessibility violation", async () => {
      const { container } = render(
        <ClickItem
          basePictureProps={{ "data-src": "picture.png", alt: "My Photo" }}
          state="default"
          subtitle="Sous-titre"
          title="Titre"
          variant="agent"
          ariaLabelForActionIcon="Aller à la page de détails"
        />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
