import { render, screen } from "@testing-library/react";
import { type ComponentPropsWithRef, createRef } from "react";
import { describe, expect, expectTypeOf, it } from "vitest";
import { Link, type LinkProps } from "../LinkCommon";

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

    const link = screen.getByRole("link", { name: "Left IconAccount" });
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

    const link = screen.getByRole("link", { name: "Test Link" });
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
        screen.getByRole("link", { name: "Left IconTest Link" }),
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
        screen.getByRole("link", { name: "Test LinkRight Icon" }),
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
