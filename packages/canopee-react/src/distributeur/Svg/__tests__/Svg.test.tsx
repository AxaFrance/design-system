import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
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

    it.each`
      props                                   | role              | ariaHidden | ariaLabel | focusable
      ${{}}                                   | ${"presentation"} | ${"true"}  | ${null}   | ${"false"}
      ${{ alt: "" }}                          | ${"presentation"} | ${"true"}  | ${null}   | ${"false"}
      ${{ alt: "Aide" }}                      | ${"img"}          | ${null}    | ${"Aide"} | ${null}
      ${{ "aria-label": "Aide" }}             | ${null}           | ${null}    | ${"Aide"} | ${null}
      ${{ "aria-labelledby": "help-title" }}  | ${null}           | ${null}    | ${null}   | ${null}
      ${{ role: "img", "aria-label": "Lu" }}  | ${"img"}          | ${null}    | ${"Lu"}   | ${null}
      ${{ alt: "Aide", "aria-hidden": true }} | ${"img"}          | ${"true"}  | ${"Aide"} | ${null}
    `(
      "sets role=$role and aria-hidden=$ariaHidden for $props",
      ({ props, role, ariaHidden, ariaLabel, focusable }) => {
        const { container } = render(<Svg src="svgSrc" {...props} />);
        const svg = container.querySelector("svg");

        expect(svg?.getAttribute("role")).toBe(role);
        expect(svg?.getAttribute("aria-hidden")).toBe(ariaHidden);
        expect(svg?.getAttribute("aria-label")).toBe(ariaLabel);
        expect(svg?.getAttribute("focusable")).toBe(focusable);
      },
    );

    it("shouldn't have an accessibility violation as a decorative icon", async () => {
      const { container } = render(
        <button type="button">
          <Svg src="svgSrc" />
          Enregistrer
        </button>,
      );

      expect(screen.getByRole("button")).toHaveAccessibleName("Enregistrer");
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
