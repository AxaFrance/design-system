import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { vi } from "vitest";
import { Svg } from "../Svg";

const mocks = vi.hoisted(() => {
  return {
    SVGInjector: vi.fn(),
  };
});

vi.mock("@tanem/svg-injector", () => mocks);

describe("<Svg />", () => {
  describe("render", () => {
    it("renders correctly", () => {
      mocks.SVGInjector.mockImplementationOnce((el, { afterEach }) => {
        afterEach(undefined, el);
      });

      const svgSrc = "svgSrc";
      render(<Svg src="svgSrc" alt="foo" aria-label="test" />);

      const svg = screen.getByLabelText("test");
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("data-src", svgSrc);
      expect(svg).toHaveClass("af-svg");
    });

    it("renders fallback when src not found", async () => {
      mocks.SVGInjector.mockImplementationOnce((_, { afterEach }) => {
        afterEach("error");
      });

      render(<Svg src="fake" alt="foo" aria-label="test" />);

      const svg = screen.getByText("foo");

      expect(svg).toBeInTheDocument();
    });
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <Svg />", async () => {
      const { container } = render(<Svg src="svgSrc" alt="foo" />);

      expect(await axe(container)).toHaveNoViolations();
    });

    it.each([
      { name: "without alt", props: {} },
      { name: "with an empty alt", props: { alt: "" } },
      { name: "with role presentation", props: { role: "presentation" } },
    ])("hides a decorative icon $name", async ({ props }) => {
      const { container } = render(<Svg src="svgSrc" {...props} />);

      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("aria-hidden", "true");
      expect(svg).toHaveAttribute("focusable", "false");
      expect(await axe(container)).toHaveNoViolations();
    });

    it("names the icon from alt", () => {
      render(<Svg src="svgSrc" alt="Fichier chargé" />);

      const svg = screen.getByRole("img", { name: "Fichier chargé" });
      expect(svg).not.toHaveAttribute("aria-hidden");
      expect(svg).not.toHaveAttribute("focusable");
    });

    it.each([
      { name: "aria-label", props: { "aria-label": "Facebook" } },
      { name: "aria-labelledby", props: { "aria-labelledby": "label-id" } },
    ])("does not hide an icon named by $name", ({ props }) => {
      const { container } = render(<Svg src="svgSrc" {...props} />);

      expect(container.querySelector("svg")).not.toHaveAttribute("aria-hidden");
    });

    it("lets explicit attributes override the defaults", () => {
      render(
        <Svg
          src="svgSrc"
          alt="Facebook"
          aria-label="Facebook, nouvel onglet"
        />,
      );

      expect(
        screen.getByRole("img", { name: "Facebook, nouvel onglet" }),
      ).toBeInTheDocument();
    });
  });
});
