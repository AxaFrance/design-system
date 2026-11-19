import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { ItemFormHelper } from "../ItemFormHelper";

describe("ItemFormHelper", () => {
  it("renders the default label and modifier class for todo", () => {
    render(<ItemFormHelper variant="todo" />);

    expect(screen.getByText("à compléter")).toBeInTheDocument();
    expect(screen.getByText("à compléter").parentElement).toHaveClass(
      "af-item-form-helper",
      "af-item-form-helper--todo",
    );
  });

  it("renders the default label and modifier class for inprogress", () => {
    render(<ItemFormHelper variant="inprogress" />);

    expect(screen.getByText("en cours")).toBeInTheDocument();
    expect(screen.getByText("en cours").parentElement).toHaveClass(
      "af-item-form-helper",
      "af-item-form-helper--inprogress",
    );
  });

  it("renders the default label and modifier class for validated", () => {
    render(<ItemFormHelper variant="validated" />);

    expect(screen.getByText("validé")).toBeInTheDocument();
    expect(screen.getByText("validé").parentElement).toHaveClass(
      "af-item-form-helper",
      "af-item-form-helper--validated",
    );
  });

  it("renders a custom label when provided", () => {
    render(<ItemFormHelper variant="validated" label="Tâche terminée" />);

    expect(screen.getByText("Tâche terminée")).toBeInTheDocument();
  });

  it("forwards an additional className", () => {
    render(<ItemFormHelper variant="todo" className="custom" />);

    expect(screen.getByText("à compléter").parentElement).toHaveClass("custom");
  });

  it("renders a span root", () => {
    const { container } = render(<ItemFormHelper variant="todo" />);

    expect(container.firstElementChild?.tagName).toBe("SPAN");
  });

  it("hides the icon from assistive technologies", () => {
    const { container } = render(<ItemFormHelper variant="validated" />);

    expect(container.querySelector("svg")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("does not add a hidden state without label", () => {
    const { container } = render(<ItemFormHelper variant="inprogress" />);

    expect(
      container.querySelector(".af-item-form-helper__state"),
    ).not.toBeInTheDocument();
  });

  it("reads the state after the label", () => {
    const { container } = render(
      <ItemFormHelper variant="inprogress" label="Tarification" />,
    );

    expect(container.firstElementChild).toHaveTextContent(
      "Tarification, en cours",
    );
    expect(screen.getByText(", en cours")).toHaveClass(
      "af-item-form-helper__state",
    );
  });

  it("uses stateLabel as the visible text without label", () => {
    render(<ItemFormHelper variant="todo" stateLabel="to do" />);

    expect(screen.getByText("to do")).toHaveClass("af-item-form-helper__label");
  });

  it("uses stateLabel as the hidden state with label", () => {
    render(
      <ItemFormHelper variant="validated" label="Identité" stateLabel="done" />,
    );

    expect(screen.getByText(", done")).toHaveClass(
      "af-item-form-helper__state",
    );
  });

  it("forwards native attributes", () => {
    render(<ItemFormHelper variant="todo" id="step-1" data-testid="item" />);

    expect(screen.getByTestId("item")).toHaveAttribute("id", "step-1");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <>
        <ItemFormHelper variant="todo" />
        <ItemFormHelper variant="validated" label="Informations clients" />
      </>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
