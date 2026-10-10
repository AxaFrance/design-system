import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { type ComponentPropsWithRef, createRef } from "react";
import { describe, expect, expectTypeOf, it } from "vitest";
import { Link as LinkApollo } from "../LinkApollo";
import { Link, type LinkProps } from "../LinkCommon";
import { Link as LinkLF } from "../LinkLF";

type NavigationLinkProps = Omit<ComponentPropsWithRef<"a">, "href"> & {
  to: string;
};

const NavigationLink = ({ to, children, ...props }: NavigationLinkProps) => (
  <a href={to} {...props}>
    {children}
  </a>
);

describe("Link component", () => {
  it("renders a custom navigation component with its props and ref", () => {
    const ref = createRef<HTMLAnchorElement>();

    render(
      <Link
        as={NavigationLink}
        to="/account"
        ref={ref}
        variant="inverse"
        className="custom-link"
        leftIcon="Left Icon"
        openInNewTab
      >
        Account
      </Link>,
    );

    const link = screen.getByRole("link", {
      name: "Left IconAccount (nouvelle fenêtre)",
    });
    expect(link).toHaveAttribute("href", "/account");
    expect(link).not.toHaveAttribute("to");
    expect(link).not.toHaveAttribute("as");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveClass(
      "af-link",
      "af-link--inverse",
      "af-link--openInNewTab",
      "custom-link",
    );
    expect(link.querySelector("svg")).toBeInTheDocument();
    expect(ref.current).toBe(link);
  });

  it("renders another HTML element with its native props and ref", () => {
    const ref = createRef<HTMLButtonElement>();

    render(
      <Link as="button" type="button" disabled ref={ref}>
        Action
      </Link>,
    );

    const button = screen.getByRole("button", { name: "Action" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("af-link");
    expect(ref.current).toBe(button);
  });

  it("infers props from the selected component", () => {
    expectTypeOf<LinkProps>().toHaveProperty("href");
    expectTypeOf<LinkProps<typeof NavigationLink>>()
      .toHaveProperty("to")
      .toEqualTypeOf<string>();
    expectTypeOf<LinkProps<typeof NavigationLink>>().not.toHaveProperty("href");
    expectTypeOf<LinkProps<"button">>().not.toHaveProperty("href");
  });

  it("renders children correctly", () => {
    render(<Link href="/">Test Link</Link>);

    const link = screen.getByRole("link", { name: "Test Link" });
    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveClass("af-link");
  });

  it("render with openInNewTab prop correctly", () => {
    render(
      <Link href="/" openInNewTab>
        Test Link
      </Link>,
    );

    const link = screen.getByRole("link", {
      name: "Test Link (nouvelle fenêtre)",
    });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveClass("af-link--openInNewTab");
    expect(link.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it.each`
    openInNewTab
    ${undefined}
    ${false}
    ${true}
  `(
    "renders leftIcon correctly when openInNewTab is $openInNewTab",
    ({ openInNewTab }) => {
      render(
        <Link href="/" leftIcon="Left Icon" openInNewTab={openInNewTab}>
          Test Link
        </Link>,
      );
      expect(
        screen.getByRole("link", {
          name: openInNewTab
            ? "Left IconTest Link (nouvelle fenêtre)"
            : "Left IconTest Link",
        }),
      ).toBeInTheDocument();
    },
  );

  it.each`
    openInNewTab
    ${undefined}
    ${false}
    ${true}
  `(
    "renders rightIcon correctly when openInNewTab is $openInNewTab",
    ({ openInNewTab }) => {
      render(
        <Link href="/" rightIcon="Right Icon" openInNewTab={openInNewTab}>
          Test Link
        </Link>,
      );
      expect(
        screen.getByRole("link", {
          name: openInNewTab
            ? "Test LinkRight Icon (nouvelle fenêtre)"
            : "Test LinkRight Icon",
        }),
      ).toBeInTheDocument();
    },
  );

  it.each([undefined, "test-class"])(
    "renders correctly with className as $s",
    (className: string | undefined) => {
      render(
        <Link href="/" className={className}>
          Test Link
        </Link>,
      );

      const link = screen.getByRole("link", { name: "Test Link" });
      if (className) {
        expect(link).toHaveClass(className);
      }
    },
  );
});

describe.each([
  ["Apollo", LinkApollo],
  ["LF", LinkLF],
])("<Link /> %s opening in a new tab", (_, LinkComponent) => {
  it("should announce a link that opens in a new tab", async () => {
    const { container } = render(
      <LinkComponent href="https://www.axa.fr" openInNewTab>
        Plus de détails
      </LinkComponent>,
    );

    expect(screen.getByRole("link")).toHaveAccessibleName(
      "Plus de détails (nouvelle fenêtre)",
    );
    expect(screen.getByText("(nouvelle fenêtre)")).toHaveClass(
      "af-visually-hidden",
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("should not announce a link that opens in the same tab", () => {
    render(<LinkComponent href="/">Plus de détails</LinkComponent>);

    expect(screen.getByRole("link")).toHaveAccessibleName("Plus de détails");
    expect(screen.queryByText("(nouvelle fenêtre)")).not.toBeInTheDocument();
  });

  it("should use newWindowLabel", () => {
    render(
      <LinkComponent
        href="https://www.axa.fr"
        openInNewTab
        newWindowLabel="opens in a new tab"
      >
        Plus de détails
      </LinkComponent>,
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAccessibleName("Plus de détails (opens in a new tab)");
    expect(link).not.toHaveAttribute("newWindowLabel");
  });
});
