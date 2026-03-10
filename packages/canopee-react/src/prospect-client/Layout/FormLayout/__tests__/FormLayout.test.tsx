import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import type { GridContainerProps } from "../../../../client";
import { FormLayout } from "../FormLayout";

describe("FormLayout", () => {
  describe("Rendering", () => {
    it("renders a form element with correct class", () => {
      render(<FormLayout>Content</FormLayout>);
      const form = screen.getByRole("form");
      expect(form).toBeInTheDocument();
      expect(form).toHaveClass("af-form-layout");
    });

    it("renders with Header component", () => {
      render(
        <FormLayout>
          <FormLayout.Header>
            <h1>Form Title</h1>
          </FormLayout.Header>
        </FormLayout>,
      );

      expect(screen.getByText("Form Title")).toBeInTheDocument();
      expect(
        screen.getByRole("form").querySelector(".af-form-layout__header"),
      ).toBeInTheDocument();
    });

    it("renders with Body component", () => {
      render(
        <FormLayout>
          <FormLayout.Body>
            <input aria-label="Test input" />
          </FormLayout.Body>
        </FormLayout>,
      );

      expect(screen.getByLabelText("Test input")).toBeInTheDocument();
      expect(
        screen.getByRole("form").querySelector(".af-form-layout__fields"),
      ).toBeInTheDocument();
    });

    it("renders with Footer component", () => {
      render(
        <FormLayout>
          <FormLayout.Footer>
            <button type="submit">Submit</button>
          </FormLayout.Footer>
        </FormLayout>,
      );

      expect(
        screen.getByRole("button", { name: "Submit" }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("form").querySelector(".af-form-layout__actions"),
      ).toBeInTheDocument();
    });

    it("renders with Faq component outside the form", () => {
      render(
        <FormLayout>
          <FormLayout.Faq>
            <div>FAQ content</div>
          </FormLayout.Faq>
        </FormLayout>,
      );

      expect(screen.getByText("FAQ content")).toBeInTheDocument();
      const faqDiv = screen.getByText("FAQ content").parentElement;
      expect(faqDiv).toHaveClass("af-form-layout__faq");
      expect(faqDiv).toHaveClass("subgrid");
      expect(screen.getByRole("form")).not.toContainElement(
        screen.getByText("FAQ content"),
      );
    });

    it("renders all components together", () => {
      render(
        <FormLayout>
          <FormLayout.Header>
            <h1>Header</h1>
          </FormLayout.Header>
          <FormLayout.Body>
            <input aria-label="Field" />
          </FormLayout.Body>
          <FormLayout.Footer>
            <button type="submit">Submit</button>
          </FormLayout.Footer>
          <FormLayout.Faq>
            <div>FAQ</div>
          </FormLayout.Faq>
        </FormLayout>,
      );

      expect(screen.getByText("Header")).toBeInTheDocument();
      expect(screen.getByLabelText("Field")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Submit" }),
      ).toBeInTheDocument();
      expect(screen.getByText("FAQ")).toBeInTheDocument();
    });

    it("renders without optional sections", () => {
      render(
        <FormLayout>
          <FormLayout.Body>
            <input aria-label="Field" />
          </FormLayout.Body>
        </FormLayout>,
      );

      expect(screen.getByLabelText("Field")).toBeInTheDocument();
      expect(
        screen.getByRole("form").querySelector(".af-form-layout__header"),
      ).not.toBeInTheDocument();
      expect(
        screen.getByRole("form").querySelector(".af-form-layout__actions"),
      ).not.toBeInTheDocument();
      expect(
        document.querySelector(".af-form-layout__faq"),
      ).not.toBeInTheDocument();
    });

    it("applies subgrid class to all sections", () => {
      const { container } = render(
        <FormLayout>
          <FormLayout.Header>Header</FormLayout.Header>
          <FormLayout.Body>Body</FormLayout.Body>
          <FormLayout.Footer>Footer</FormLayout.Footer>
          <FormLayout.Faq>FAQ</FormLayout.Faq>
        </FormLayout>,
      );

      expect(container.querySelector(".af-form-layout__header")).toHaveClass(
        "subgrid",
      );
      expect(container.querySelector(".af-form-layout__fields")).toHaveClass(
        "subgrid",
      );
      expect(container.querySelector(".af-form-layout__actions")).toHaveClass(
        "subgrid",
      );
      expect(container.querySelector(".af-form-layout__faq")).toHaveClass(
        "subgrid",
      );
    });
  });

  describe("Form Props", () => {
    it("forwards form props to the form element", () => {
      const handleSubmit = vi.fn((e) => e.preventDefault());

      render(
        <FormLayout onSubmit={handleSubmit} method="post" action="/submit">
          <FormLayout.Body>
            <button type="submit">Submit</button>
          </FormLayout.Body>
        </FormLayout>,
      );

      const form = screen.getByRole("form");
      expect(form).toHaveAttribute("method", "post");
      expect(form).toHaveAttribute("action", "/submit");
    });

    it("handles form submission", async () => {
      const user = userEvent.setup();
      const handleSubmit = vi.fn((e) => e.preventDefault());

      render(
        <FormLayout onSubmit={handleSubmit}>
          <FormLayout.Body>
            <button type="submit">Submit</button>
          </FormLayout.Body>
        </FormLayout>,
      );

      await user.click(screen.getByRole("button", { name: "Submit" }));
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it("supports custom className", () => {
      render(
        <FormLayout className="custom-class">
          <FormLayout.Body>Content</FormLayout.Body>
        </FormLayout>,
      );

      const form = screen.getByRole("form");
      expect(form).toHaveClass("af-form-layout");
      expect(form).toHaveClass("custom-class");
    });

    it("supports id attribute", () => {
      render(
        <FormLayout id="my-form">
          <FormLayout.Body>Content</FormLayout.Body>
        </FormLayout>,
      );

      expect(screen.getByRole("form")).toHaveAttribute("id", "my-form");
    });
  });

  describe("Body Responsive Props", () => {
    it("applies data-cols-mobile CSS variable", () => {
      const { container } = render(
        <FormLayout>
          <FormLayout.Body>
            <div data-cols-mobile="1">Content</div>
          </FormLayout.Body>
        </FormLayout>,
      );

      const element = container.querySelector('[style*="--cols-mobile"]');
      expect(element).toBeInTheDocument();
      expect(element).toHaveStyle({ "--cols-mobile": "1" });
    });

    it("applies data-cols-tablet CSS variable", () => {
      const { container } = render(
        <FormLayout>
          <FormLayout.Body>
            <div data-cols-tablet="2">Content</div>
          </FormLayout.Body>
        </FormLayout>,
      );

      const element = container.querySelector('[style*="--cols-tablet"]');
      expect(element).toBeInTheDocument();
      expect(element).toHaveStyle({ "--cols-tablet": "2" });
    });

    it("applies data-cols-desktop-small CSS variable", () => {
      const { container } = render(
        <FormLayout>
          <FormLayout.Body>
            <div data-cols-desktop-small="3">Content</div>
          </FormLayout.Body>
        </FormLayout>,
      );

      const element = container.querySelector(
        '[style*="--cols-desktop-small"]',
      );
      expect(element).toBeInTheDocument();
      expect(element).toHaveStyle({ "--cols-desktop-small": "3" });
    });

    it("applies data-cols-desktop-medium CSS variable", () => {
      const { container } = render(
        <FormLayout>
          <FormLayout.Body>
            <div data-cols-desktop-medium="4">Content</div>
          </FormLayout.Body>
        </FormLayout>,
      );

      const element = container.querySelector(
        '[style*="--cols-desktop-medium"]',
      );
      expect(element).toBeInTheDocument();
      expect(element).toHaveStyle({ "--cols-desktop-medium": "4" });
    });

    it("applies data-cols-desktop-large CSS variable", () => {
      const { container } = render(
        <FormLayout>
          <FormLayout.Body>
            <div data-cols-desktop-large="5">Content</div>
          </FormLayout.Body>
        </FormLayout>,
      );

      const element = container.querySelector(
        '[style*="--cols-desktop-large"]',
      );
      expect(element).toBeInTheDocument();
      expect(element).toHaveStyle({ "--cols-desktop-large": "5" });
    });

    it("applies multiple responsive CSS variables", () => {
      const { container } = render(
        <FormLayout>
          <FormLayout.Body>
            <div
              className="input-container"
              data-cols-mobile="1"
              data-cols-tablet="2"
              data-cols-desktop-small="3"
              data-cols-desktop-medium="4"
              data-cols-desktop-large="6"
            >
              Content
            </div>
          </FormLayout.Body>
        </FormLayout>,
      );

      const element = container.querySelector("div.input-container");
      expect(element).toHaveStyle({
        "--cols-mobile": "1",
        "--cols-tablet": "2",
        "--cols-desktop-small": "3",
        "--cols-desktop-medium": "4",
        "--cols-desktop-large": "6",
      });
    });

    it("preserves existing style prop when applying responsive styles", () => {
      const { container } = render(
        <FormLayout>
          <FormLayout.Body>
            <div
              className="input-container"
              style={{ color: "#ff0000" }}
              data-cols-mobile="1"
            >
              Content
            </div>
          </FormLayout.Body>
        </FormLayout>,
      );

      const element = container.querySelector("div.input-container");
      expect(element).toHaveStyle({
        color: "#ff0000",
        "--cols-mobile": "1",
      });
    });

    it("applies responsive styles to containerProps when present", () => {
      const Component = ({
        containerProps,
      }: {
        containerProps?: GridContainerProps;
      }) => (
        <div className="input-container" {...containerProps}>
          Content
        </div>
      );

      const { container } = render(
        <FormLayout>
          <FormLayout.Body>
            <Component
              containerProps={{
                "data-cols-mobile": "1",
                style: { padding: "10px" },
              }}
            />
          </FormLayout.Body>
        </FormLayout>,
      );

      const element = container.querySelector("div.input-container");

      expect(element).toHaveStyle({
        "--cols-mobile": "1",
        padding: "10px",
      });
    });

    it("handles multiple children in Body", () => {
      const { container } = render(
        <FormLayout>
          <FormLayout.Body>
            <div data-cols-mobile="1">First</div>
            <div data-cols-mobile="2">Second</div>
            <div data-cols-tablet="3">Third</div>
          </FormLayout.Body>
        </FormLayout>,
      );

      const elements = container.querySelectorAll(
        ".af-form-layout__fields > div",
      );
      expect(elements).toHaveLength(3);
      expect(elements[0]).toHaveStyle({ "--cols-mobile": "1" });
      expect(elements[1]).toHaveStyle({ "--cols-mobile": "2" });
      expect(elements[2]).toHaveStyle({ "--cols-tablet": "3" });
    });

    it("handles non-element children in Body", () => {
      render(
        <FormLayout>
          <FormLayout.Body>
            Text content
            {null}
            {undefined}
            <div>Element</div>
          </FormLayout.Body>
        </FormLayout>,
      );

      expect(screen.getByText("Text content")).toBeInTheDocument();
      expect(screen.getByText("Element")).toBeInTheDocument();
    });
  });
});
