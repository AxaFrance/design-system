import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { ListFormHelper, type ListFormHelperStep } from "../ListFormHelper";

const steps: ListFormHelperStep[] = [
  { label: "Informations clients", variant: "validated" },
  { label: "Tarification", variant: "inprogress" },
  { label: "Informations complémentaires", variant: "todo" },
];

const linkedSteps: ListFormHelperStep[] = steps.map((step, index) => ({
  ...step,
  href: `#section-${index}`,
}));

describe("ListFormHelper", () => {
  it("renders an ordered list of steps without navigation", () => {
    render(<ListFormHelper steps={steps} />);

    const list = screen.getByRole("list");
    expect(list.tagName).toBe("OL");
    expect(list).toHaveClass("af-list-form-helper");
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("marks the first step in progress as current", () => {
    render(
      <ListFormHelper
        steps={[...steps, { label: "Signature", variant: "inprogress" }]}
      />,
    );

    const items = screen.getAllByRole("listitem");
    expect(items[1]).toHaveAttribute("aria-current", "step");
    expect(items[3]).not.toHaveAttribute("aria-current");
  });

  it("wraps the list in a navigation when a step has a link", () => {
    render(<ListFormHelper steps={linkedSteps} />);

    expect(
      screen.getByRole("navigation", { name: "étapes du formulaire" }),
    ).toBeInTheDocument();
  });

  it("lets the navigation name be overridden", () => {
    render(
      <ListFormHelper steps={linkedSteps} navAriaLabel="étapes du contrat" />,
    );

    expect(
      screen.getByRole("navigation", { name: "étapes du contrat" }),
    ).toBeInTheDocument();
  });

  it("reads the step state in the link name", () => {
    render(<ListFormHelper steps={linkedSteps} />);

    const link = screen.getByRole("link", {
      name: /^Tarification\s?, en cours$/,
    });
    expect(link).toHaveAttribute("href", "#section-1");
    expect(link).toHaveClass("af-list-form-helper__link");
  });

  it("puts aria-current on the link of the current step", () => {
    render(<ListFormHelper steps={linkedSteps} />);

    expect(screen.getByRole("link", { name: /Tarification/ })).toHaveAttribute(
      "aria-current",
      "step",
    );
    expect(screen.getAllByRole("listitem")[1]).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("calls onClick when a step link is clicked", async () => {
    const onClick = vi.fn((event) => event.preventDefault());
    render(
      <ListFormHelper
        steps={[
          { label: "Tarification", variant: "todo", href: "#t", onClick },
        ]}
      />,
    );

    await userEvent.click(screen.getByRole("link"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("replaces the state texts with stateLabels", () => {
    render(
      <ListFormHelper
        steps={linkedSteps}
        stateLabels={{ inprogress: "in progress" }}
      />,
    );

    expect(
      screen.getByRole("link", { name: /^Tarification\s?, in progress$/ }),
    ).toBeInTheDocument();
  });

  it("forwards className and native attributes to the list", () => {
    render(<ListFormHelper steps={steps} className="custom" id="steps" />);

    const list = screen.getByRole("list");
    expect(list).toHaveClass("af-list-form-helper", "custom");
    expect(list).toHaveAttribute("id", "steps");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <>
        <ListFormHelper steps={steps} />
        <ListFormHelper steps={linkedSteps} />
      </>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
