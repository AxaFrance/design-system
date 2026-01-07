import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "jest-axe";
import { AccordionContextual } from "../AccordionContextualApollo";

describe("AccordionContextual", () => {
  it("renders all props and children correctly", () => {
    render(
      <AccordionContextual title="Test Title" icon="icon.svg">
        <span>Accordion Content</span>
      </AccordionContextual>,
    );

    expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
      "data-src",
      "icon.svg",
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getAllByRole("presentation")[1]).not.toHaveClass(
      "af-click-icon",
    );
    expect(screen.getByText("Accordion Content")).toBeInTheDocument();
  });

  it("does not render icon if not provided", () => {
    render(<AccordionContextual title="Title Only" />);
    expect(screen.queryAllByRole("presentation")).toHaveLength(1);
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <AccordionContextual title="Test Title" icon="icon.svg">
        <span>Accordion Content</span>
      </AccordionContextual>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders info variant correctly with the corresponding icon variant", () => {
    render(
      <AccordionContextual title="Info Title" variant="info">
        <span>Info Content</span>
      </AccordionContextual>,
    );

    expect(screen.getByRole("group")).toHaveClass(
      "af-apollo-accordion-contextual--info",
    );
    screen.getAllByRole("presentation").forEach((element) => {
      expect(element.parentElement).toHaveClass("af-icon--primary");
    });
  });

  it("renders warning variant correctly with the corresponding icon variant", () => {
    render(
      <AccordionContextual title="Warning Title" variant="warning">
        <span>Warning Content</span>
      </AccordionContextual>,
    );

    expect(screen.getByRole("group")).toHaveClass(
      "af-apollo-accordion-contextual--warning",
    );
    screen.getAllByRole("presentation").forEach((element) => {
      expect(element.parentElement).toHaveClass("af-icon--error");
    });
  });

  it("renders reverse variant correctly with the corresponding icon variant", () => {
    render(
      <AccordionContextual title="Reverse Title" variant="reverse">
        <span>Reverse Content</span>
      </AccordionContextual>,
    );

    expect(screen.getByRole("group")).toHaveClass(
      "af-apollo-accordion-contextual--reverse",
    );
    screen.getAllByRole("presentation").forEach((element) => {
      expect(element.parentElement).toHaveClass("af-icon--secondary");
    });
  });
});
