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
});
