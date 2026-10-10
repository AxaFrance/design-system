import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import type { TagVariants } from "../../../Tag/TagCommon";
import { ClickItem } from "../ClickItemApollo";
import { ClickItem as ClickItemLF } from "../ClickItemLF";
import type { ClickItemStates } from "../ClickItemCommon";
import type { ClickItemProps } from "../types";

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
  } satisfies ClickItemProps;

  const stateAndTagTestCases: {
    state: ClickItemStates;
    tagVariant: TagVariants;
    expectedTagClass: string;
    noOfClick: number;
  }[] = [
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
      expect(
        screen.getAllByRole("presentation", { hidden: true })[0],
      ).toHaveAttribute("data-src", "icon.svg");
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
    } satisfies ClickItemProps;

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
      expect(
        screen.getAllByRole("presentation", { hidden: true })[0],
      ).toHaveAttribute("data-src", "icon.svg");
      expect(screen.getByText("Titre")).toBeInTheDocument();
      expect(screen.getByText("Sous-titre")).toBeInTheDocument();
      expect(screen.getByText("Texte Tag")).toBeInTheDocument();
    };

    const defaultProps = {
      ...commonProps,
      variant: "medium",
    } satisfies ClickItemProps;

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

      expect(
        screen.getAllByRole("presentation", { hidden: true })[0],
      ).toHaveAttribute("data-src", "icon.svg");

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
          basePictureProps={{ src: "picture.png", alt: "My Photo" }}
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
          basePictureProps={{ src: "picture.png", alt: "My Photo" }}
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

describe.each([
  { name: "Apollo", Component: ClickItem },
  { name: "LF", Component: ClickItemLF },
])("ClickItem $name accessible name", ({ Component }) => {
  const fullContent = {
    title: "Titre",
    subtitle: "Sous-titre",
    textSecondary: "Texte secondaire",
    textTertiary: "Texte tertiaire",
    tagLabel: "Nouveau",
    ariaLabelForActionIcon: "Aller à la page de détails",
  } satisfies ClickItemProps;

  it("is named by its visible title and described by the rest", async () => {
    const { container } = render(
      <Component {...fullContent} variant="large" onClick={vi.fn()} />,
    );

    const button = screen.getByRole("button", { name: "Titre" });
    expect(button).not.toHaveAttribute("aria-label");
    expect(button).toHaveAccessibleDescription(
      "Sous-titre Texte secondaire Texte tertiaire Nouveau " +
        "Aller à la page de détails",
    );
    expect(screen.getByText("Aller à la page de détails")).not.toBeVisible();
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each([
    { variant: "small", description: "Aller à la page de détails" },
    { variant: "agent", description: "Sous-titre Aller à la page de détails" },
  ] as const)(
    "leaves out the text the $variant variant hides",
    ({ variant, description }) => {
      render(
        <Component {...fullContent} variant={variant} onClick={vi.fn()} />,
      );

      expect(
        screen.getByRole("button", { name: "Titre" }),
      ).toHaveAccessibleDescription(description);
    },
  );

  it("is described by its spinner while it loads", () => {
    render(
      <Component
        title="Titre"
        subtitle="Sous-titre"
        variant="large"
        state="loading"
        onClick={vi.fn()}
      />,
    );

    const button = screen.getByRole("button", { name: "Titre" });
    const spinner = screen.getByLabelText("Chargement en cours");
    expect(button.getAttribute("aria-describedby")?.split(" ")).toContain(
      spinner.id,
    );
    expect(button).toHaveAccessibleDescription(
      "Sous-titre Chargement en cours",
    );
  });

  it("has no description when there is nothing to describe", () => {
    render(<Component title="Titre" variant="small" onClick={vi.fn()} />);

    const button = screen.getByRole("button", { name: "Titre" });
    expect(button).not.toHaveAttribute("aria-describedby");
  });

  it("keeps a display-only item free of names and descriptions", () => {
    const { container } = render(
      <Component {...fullContent} variant="large" />,
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(container.firstChild).not.toHaveAttribute("aria-labelledby");
    expect(
      screen.queryByText("Aller à la page de détails"),
    ).not.toBeInTheDocument();
  });
});

describe.each([
  { name: "Apollo", Component: ClickItem },
  { name: "LF", Component: ClickItemLF },
])("ClickItem $name as a link", ({ Component }) => {
  const linkProps = {
    title: "Titre",
    subtitle: "Sous-titre",
    variant: "large",
    href: "/contrats/auto",
    ariaLabelForActionIcon: "Aller à la page de détails",
  } satisfies ClickItemProps;

  it("renders a link named by its title when href is set", async () => {
    const handleClick = vi.fn((event: React.MouseEvent) =>
      event.preventDefault(),
    );
    const { container } = render(
      <Component
        {...linkProps}
        target="_blank"
        rel="noopener"
        onClick={handleClick}
      />,
    );

    const link = screen.getByRole("link", { name: "Titre" });
    expect(link).toHaveAttribute("href", "/contrats/auto");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener");
    expect(link).toHaveClass("af-apollo-click-item--link");
    expect(link).toHaveAccessibleDescription(
      "Sous-titre Aller à la page de détails",
    );
    expect(screen.queryByRole("button")).not.toBeInTheDocument();

    await userEvent.click(screen.getByText("Titre"));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders a link without onClick", () => {
    render(<Component {...linkProps} />);

    expect(screen.getByRole("link", { name: "Titre" })).toHaveAttribute(
      "href",
      "/contrats/auto",
    );
  });

  it.each(["disabled", "loading"] as const)(
    "drops the href and the click when $0",
    async (state) => {
      const handleClick = vi.fn();
      const { container } = render(
        <Component {...linkProps} state={state} onClick={handleClick} />,
      );

      const link = screen.getByRole("link", { name: "Titre" });
      expect(link).not.toHaveAttribute("href");
      expect(link).toHaveAttribute("aria-disabled", "true");
      expect(link).toHaveAttribute("tabindex", "-1");

      await userEvent.click(screen.getByText("Titre"));
      expect(handleClick).not.toHaveBeenCalled();
      expect(await axe(container)).toHaveNoViolations();
    },
  );

  it("stays a button without href", () => {
    render(<Component {...linkProps} href={undefined} onClick={vi.fn()} />);

    expect(screen.getByRole("button", { name: "Titre" })).not.toHaveClass(
      "af-apollo-click-item--link",
    );
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
