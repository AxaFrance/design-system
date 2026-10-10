import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Link as LinkApollo } from "../LinkApollo";
import { Link } from "../LinkCommon";
import { Link as LinkLF } from "../LinkLF";

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
    expect(screen.getByText("(nouvelle fenêtre)")).toHaveStyle({
      position: "absolute",
      overflow: "hidden",
    });
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
