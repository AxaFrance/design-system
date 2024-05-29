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
  });
});
