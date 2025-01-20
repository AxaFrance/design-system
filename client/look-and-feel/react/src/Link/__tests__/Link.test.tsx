import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Link } from "..";

describe("Link component", () => {
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
    expect(link.querySelector("svg")).toBeInTheDocument();
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

  it.each`
    className       | classModifier
    ${undefined}    | ${undefined}
    ${"test-class"} | ${undefined}
    ${undefined}    | ${"test-modifier"}
    ${"test-class"} | ${"test-modifier"}
  `(
    "renders correctly with className as $className and classModifier as $classModifier",
    ({ className, classModifier }) => {
      render(
        <Link href="/" className={className} classModifier={classModifier}>
          Test Link
        </Link>,
      );

      const link = screen.getByRole("link", { name: "Test Link" });
      if (className) {
        expect(link).toHaveClass(className);
      }
      if (classModifier) {
        expect(link).toHaveClass(`af-link af-link--test-modifier`);
      }
    },
  );

  it("remove openInNewTab class when className is provided", () => {
    render(
      <Link href="/" openInNewTab className="test-class">
        Test Link
      </Link>,
    );

    const link = screen.getByRole("link", { name: "Test Link" });
    expect(link).not.toHaveClass("af-link--openInNewTab");
  });
});
