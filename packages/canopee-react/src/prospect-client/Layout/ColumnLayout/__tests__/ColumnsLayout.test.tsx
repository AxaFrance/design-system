import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { ColumnsLayout as ProspectColumnsLayout } from "../ColumnsLayoutApollo";
import { ColumnsLayout as ClientColumnsLayout } from "../ColumnsLayoutLF";

describe.each([
  ["Prospect", ProspectColumnsLayout],
  ["Client", ClientColumnsLayout],
] as const)("ColumnsLayout %s", (_, ColumnsLayout) => {
  it("renders the heading and supplied areas in their expected wrappers", () => {
    const { container } = render(
      <ColumnsLayout headingProps={{ children: "My dashboard" }}>
        <ColumnsLayout.Top>Top content</ColumnsLayout.Top>
        <ColumnsLayout.Left>Left content</ColumnsLayout.Left>
        <ColumnsLayout.Content>Main content</ColumnsLayout.Content>
        <ColumnsLayout.Right>Right content</ColumnsLayout.Right>
      </ColumnsLayout>,
    );

    expect(
      screen.getByRole("heading", { name: "My dashboard" }),
    ).toBeInTheDocument();
    expect(
      container.querySelector(".af-columns-layout__top"),
    ).toHaveTextContent("Top content");
    const layout = container.querySelector(".af-columns-layout");
    const top = container.querySelector(".af-columns-layout__top");
    expect(layout).toHaveClass("grid", "subgrid");
    expect(top?.parentElement).not.toBe(layout);
    expect(top?.nextElementSibling).toBe(layout);
    expect(
      container.querySelector(".af-columns-layout__left"),
    ).toHaveTextContent("Left content");
    expect(
      container.querySelector(".af-columns-layout__content"),
    ).toHaveTextContent("Main content");
    expect(
      container.querySelector(".af-columns-layout__right"),
    ).toHaveTextContent("Right content");
  });

  it("supports fit mode and custom heading level", () => {
    render(
      <ColumnsLayout
        isFit
        className="custom"
        headingProps={{ children: "Contact details", level: 3 }}
      >
        <ColumnsLayout.Content>Content</ColumnsLayout.Content>
      </ColumnsLayout>,
    );

    const section = screen
      .getByRole("heading", { name: "Contact details" })
      .closest(".af-columns-layout");
    expect(section).toHaveClass(
      "af-columns-layout",
      "af-columns-layout--fit",
      "custom",
    );
    expect(
      screen.getByText("Content").closest(".af-columns-layout__content"),
    ).toBeInTheDocument();
  });

  it.each([
    {
      side: "Left",
      slots: <ColumnsLayout.Left>Left</ColumnsLayout.Left>,
      expectedSides: ["Left"],
    },
    {
      side: "Right",
      slots: <ColumnsLayout.Right>Right</ColumnsLayout.Right>,
      expectedSides: ["Right"],
    },
    {
      side: "both",
      slots: (
        <>
          <ColumnsLayout.Left>Left</ColumnsLayout.Left>
          <ColumnsLayout.Right>Right</ColumnsLayout.Right>
        </>
      ),
      expectedSides: ["Left", "Right"],
    },
  ])(
    "ignores fit with $side slots without losing content",
    ({ slots, expectedSides }) => {
      const { container, rerender } = render(
        <ColumnsLayout isFit>
          <>
            {slots}
            <ColumnsLayout.Content>Content</ColumnsLayout.Content>
          </>
        </ColumnsLayout>,
      );

      expect(container.querySelector(".af-columns-layout")).not.toHaveClass(
        "af-columns-layout--fit",
      );
      expect(screen.getByText("Content")).toBeInTheDocument();
      expect(
        ["Left", "Right"].filter((label) => screen.queryByText(label)),
      ).toEqual(expectedSides);
      rerender(
        <ColumnsLayout isFit>
          <ColumnsLayout.Content>Content</ColumnsLayout.Content>
        </ColumnsLayout>,
      );
      expect(container.querySelector(".af-columns-layout")).toHaveClass(
        "af-columns-layout--fit",
      );
    },
  );

  it("forwards native props and ref to the columns section, not Top", () => {
    const ref = createRef<HTMLElement>();
    render(
      <ColumnsLayout
        ref={ref}
        id="columns"
        aria-label="Dashboard columns"
        className="custom"
        tabIndex={-1}
      >
        <ColumnsLayout.Top>Top</ColumnsLayout.Top>
        <ColumnsLayout.Content>Content</ColumnsLayout.Content>
      </ColumnsLayout>,
    );

    const section = screen.getByRole("region", { name: "Dashboard columns" });
    expect(ref.current).toBe(section);
    expect(section.tagName).toBe("SECTION");
    expect(section).toHaveAttribute("id", "columns");
    expect(section).toHaveAttribute("tabindex", "-1");
    expect(section).toHaveClass(
      "af-columns-layout",
      "grid",
      "subgrid",
      "custom",
    );
    expect(section).not.toHaveTextContent("Top");
  });

  it("renders without optional heading or areas", () => {
    const { container } = render(
      <ColumnsLayout>
        <ColumnsLayout.Content>No regions</ColumnsLayout.Content>
      </ColumnsLayout>,
    );

    const section = container.querySelector(".af-columns-layout");
    expect(section).toHaveTextContent("No regions");
    expect(container.querySelector(".af-columns-layout__left")).toBeNull();
    expect(container.querySelector(".af-columns-layout__right")).toBeNull();
  });

  it("renders loose content and repeated slots nested in fragments", () => {
    const { container } = render(
      <ColumnsLayout>
        <>
          <p>Loose content</p>
          <ColumnsLayout.Top>Top one</ColumnsLayout.Top>
          <ColumnsLayout.Top>Top two</ColumnsLayout.Top>
          <ColumnsLayout.Left>Left one</ColumnsLayout.Left>
          <ColumnsLayout.Left>Left two</ColumnsLayout.Left>
          <ColumnsLayout.Content>Explicit content</ColumnsLayout.Content>
          <ColumnsLayout.Right>Right one</ColumnsLayout.Right>
          <ColumnsLayout.Right>Right two</ColumnsLayout.Right>
        </>
      </ColumnsLayout>,
    );

    expect(
      container.querySelector(".af-columns-layout__top"),
    ).toHaveTextContent("Top oneTop two");
    expect(
      container.querySelector(".af-columns-layout__left"),
    ).toHaveTextContent("Left oneLeft two");
    expect(
      container.querySelector(".af-columns-layout__content"),
    ).toHaveTextContent("Loose contentExplicit content");
    expect(
      container.querySelector(".af-columns-layout__right"),
    ).toHaveTextContent("Right oneRight two");
  });

  it("renders slots returned by custom components as content", () => {
    const CustomContent = () => (
      <ColumnsLayout.Left>Nested left</ColumnsLayout.Left>
    );
    const { container } = render(
      <ColumnsLayout>
        <CustomContent />
      </ColumnsLayout>,
    );

    expect(
      container.querySelector(".af-columns-layout__content"),
    ).toHaveTextContent("Nested left");
    expect(container.querySelector(".af-columns-layout__left")).toBeNull();
  });
});
