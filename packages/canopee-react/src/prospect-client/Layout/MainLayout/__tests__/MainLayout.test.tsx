import { render, screen } from "@testing-library/react";
import { MainLayout as ProspectMainLayout } from "../MainLayoutApollo";
import { MainLayout as ClientMainLayout } from "../MainLayoutLF";

describe.each([
  ["Prospect", ProspectMainLayout],
  ["Client", ClientMainLayout],
] as const)("MainLayout %s", (_, MainLayout) => {
  it("renders the slots in order whatever their position in children", () => {
    const { container } = render(
      <MainLayout className="custom" centerClassName="content-custom">
        <MainLayout.Bottom className="bottom-custom">Bottom</MainLayout.Bottom>
        Content
        <MainLayout.Top className="top-custom">Top</MainLayout.Top>
      </MainLayout>,
    );

    const root = container.querySelector(".af-main-layout");
    expect(root).toHaveClass("custom");

    const areas = Array.from(root?.children ?? []);
    expect(areas.map((area) => area.textContent)).toEqual([
      "Top",
      "Content",
      "Bottom",
    ]);
    expect(areas[0]).toHaveClass("af-main-layout__top", "top-custom");
    expect(areas[1].tagName).toBe("MAIN");
    expect(areas[1]).toHaveClass(
      "af-main-layout__center",
      "grid",
      "content-custom",
    );
    expect(areas[2]).toHaveClass("af-main-layout__bottom", "bottom-custom");
  });

  it("renders children outside subcomponents in the main content", () => {
    render(
      <MainLayout>
        <MainLayout.Top>Top</MainLayout.Top>
        <p>Loose content</p>
      </MainLayout>,
    );

    expect(screen.getByRole("main")).toHaveTextContent("Loose content");
    expect(screen.getByRole("main")).not.toHaveTextContent("Top");
  });

  it("omits the areas that are not provided", () => {
    const { container } = render(<MainLayout>Content</MainLayout>);

    expect(container.querySelector(".af-main-layout__top")).toBeNull();
    expect(container.querySelector(".af-main-layout__bottom")).toBeNull();
    expect(screen.getByRole("main")).toHaveTextContent("Content");
  });

  it("omits the main element without content", () => {
    render(
      <MainLayout>
        <MainLayout.Top>Top</MainLayout.Top>
      </MainLayout>,
    );

    expect(screen.queryByRole("main")).toBeNull();
  });
});
