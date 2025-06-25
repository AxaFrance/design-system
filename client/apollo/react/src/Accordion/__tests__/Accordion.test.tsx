import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "jest-axe";
import { Accordion } from "../AccordionApollo";

describe("Accordion", () => {
  it("renders all props and children correctly", () => {
    render(
      <Accordion
        title="Test Title"
        subtitle="Test Subtitle"
        icon="icon.svg"
        info1="Info 1"
        info2="Info 2"
        tagLabel="Tag"
        dateLabel="Date"
      >
        <span>Accordion Content</span>
      </Accordion>,
    );

    expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
      "data-src",
      "icon.svg",
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Info 1")).toBeInTheDocument();
    expect(screen.getByText("Info 2")).toBeInTheDocument();
    expect(screen.getByText("Tag")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Accordion Content")).toBeInTheDocument();
  });

  it("does not render icon or subtitle if not provided", () => {
    render(<Accordion title="Title Only" info1="Info1" info2="Info2" />);
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
    expect(screen.queryByText("Test Subtitle")).not.toBeInTheDocument();
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <Accordion
        title="Test Title"
        subtitle="Test Subtitle"
        icon="icon.svg"
        info1="Info 1"
        info2="Info 2"
        tagLabel="Tag"
        dateLabel="Date"
      >
        <span>Accordion Content</span>
      </Accordion>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
