import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { PatternWithAction as ProspectPattern } from "../PatternWithActionApollo";
import { PatternWithAction as ClientPattern } from "../PatternWithActionLF";

describe.each([
  ["Prospect", ProspectPattern],
  ["Client", ClientPattern],
] as const)("PatternWithAction %s", (_, PatternWithAction) => {
  it("renders heading, action and content in separate areas", () => {
    render(
      <PatternWithAction headingProps={{ children: "My documents" }}>
        <PatternWithAction.Action>
          <button type="button">See all</button>
        </PatternWithAction.Action>
        <p>Content</p>
      </PatternWithAction>,
    );
    const heading = screen.getByRole("heading", { level: 2 });
    const header = heading.closest(".af-pattern-with-action__header");
    expect(heading).toHaveTextContent("My documents");
    expect(header).toContainElement(screen.getByRole("button"));
    expect(
      screen.getByRole("button").closest(".af-pattern-with-action__action"),
    ).not.toBeNull();
    expect(header).not.toContainElement(screen.getByText("Content"));
  });

  it("supports a custom heading level and no action", () => {
    render(
      <PatternWithAction headingProps={{ children: "Title", level: 3 }}>
        Content
      </PatternWithAction>,
    );
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
    expect(
      document.querySelector(".af-pattern-with-action__action"),
    ).toBeNull();
  });

  it("omits the header without heading or action", () => {
    render(<PatternWithAction>Content</PatternWithAction>);
    expect(
      document.querySelector(".af-pattern-with-action__header"),
    ).toBeNull();
  });

  it("forwards native props and refs and merges class names", () => {
    const ref = createRef<HTMLElement>();
    render(
      <PatternWithAction
        ref={ref}
        id="docs"
        aria-label="Documents"
        className="custom subgrid"
      >
        Content
      </PatternWithAction>,
    );
    const section = screen.getByRole("region", { name: "Documents" });
    expect(section.className).toBe("af-pattern-with-action subgrid custom");
    expect(section).toHaveAttribute("id", "docs");
    expect(ref.current).toBe(section);
  });
});
