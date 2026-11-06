import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { MainLayout as ProspectMainLayout } from "../MainLayoutApollo";
import { MainLayout as ClientMainLayout } from "../MainLayoutLF";

describe.each([
  ["Prospect", ProspectMainLayout],
  ["Client", ClientMainLayout],
] as const)("MainLayout %s", (_, MainLayout) => {
  it("has no axe violations with landmarks and slots outside main", async () => {
    const { container } = render(
      <MainLayout
        headerProps={{ appNameProps: { label: "My application" } }}
        footerProps={{ copyright: "AXA", expandLinkText: "About", links: [] }}
        mainProps={{ id: "page-content", tabIndex: -1 }}
      >
        <MainLayout.Top>
          <div role="alert">The service is temporarily unavailable.</div>
        </MainLayout.Top>
        <h1>My contracts</h1>
        <p>Contract details</p>
        <MainLayout.Bottom>
          <aside aria-label="Help">
            <a href="/contact">Contact us</a>
          </aside>
        </MainLayout.Bottom>
      </MainLayout>,
    );

    const main = screen.getByRole("main");
    expect(screen.getAllByRole("main")).toHaveLength(1);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(main).not.toContainElement(screen.getByRole("alert"));
    expect(main).not.toContainElement(
      screen.getByRole("complementary", { name: "Help" }),
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes debugGridProps to the development grid", () => {
    render(
      <MainLayout debugGridProps={{ cols: 5, isCheckedByDefault: true }}>
        Content
      </MainLayout>,
    );

    expect(screen.getByRole("checkbox", { name: "Grid" })).toBeChecked();
    expect(
      screen.getByRole("presentation").querySelectorAll(".cols"),
    ).toHaveLength(5);
  });

  it("renders the slots in order whatever their position in children", () => {
    const { container } = render(
      <MainLayout
        className="custom"
        mainProps={{ className: "content-custom" }}
      >
        <MainLayout.Bottom className="bottom-custom">Bottom</MainLayout.Bottom>
        Content
        <MainLayout.Top className="top-custom">Top</MainLayout.Top>
      </MainLayout>,
    );

    const root = container.querySelector(".af-main-layout");
    expect(root).toHaveClass("custom");

    const content = root?.querySelector(".af-main-layout__content");
    const areas = Array.from(content?.children ?? []);
    expect(areas.map((area) => area.textContent)).toEqual([
      "Top",
      "Content",
      "Bottom",
    ]);
    expect(areas[0]).toHaveClass("af-main-layout__top", "top-custom");
    expect(areas[0]).not.toHaveClass("grid");
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

  it("renders repeated slots nested in fragments", () => {
    const { container } = render(
      <MainLayout>
        <>
          <MainLayout.Top>Top one</MainLayout.Top>
          <MainLayout.Top className="top-second">Top two</MainLayout.Top>
          <p>Main content</p>
          <MainLayout.Bottom>Bottom one</MainLayout.Bottom>
          <MainLayout.Bottom>Bottom two</MainLayout.Bottom>
        </>
      </MainLayout>,
    );

    expect(container.querySelectorAll(".af-main-layout__top")).toHaveLength(2);
    expect(container.querySelectorAll(".af-main-layout__bottom")).toHaveLength(
      2,
    );
    expect(screen.getByRole("main")).toHaveTextContent("Main content");
    expect(screen.getByRole("main")).not.toHaveTextContent("Top one");
    expect(screen.getByRole("main")).not.toHaveTextContent("Bottom one");
  });

  it("keeps slots returned by custom components in the main content", () => {
    const CustomTop = () => <MainLayout.Top>Nested top</MainLayout.Top>;
    const { container } = render(
      <MainLayout>
        <CustomTop />
      </MainLayout>,
    );

    expect(screen.getByRole("main")).toHaveTextContent("Nested top");
    expect(container.querySelector(".af-main-layout__top")).toBeNull();
  });

  it("omits the areas that are not provided", () => {
    const { container } = render(<MainLayout>Content</MainLayout>);

    expect(container.querySelector(".af-main-layout__top")).toBeNull();
    expect(container.querySelector(".af-main-layout__bottom")).toBeNull();
    expect(screen.getByRole("main")).toHaveTextContent("Content");
  });

  it("forwards mainProps to main and preserves its content and classes", () => {
    const ref = createRef<HTMLElement>();
    render(
      <MainLayout
        className="root-custom"
        mainProps={{
          ref,
          className: "content-custom grid",
          id: "page-content",
          "aria-label": "Page",
          tabIndex: -1,
        }}
      >
        <MainLayout.Top>Top</MainLayout.Top>
        Main content
        <MainLayout.Bottom>Bottom</MainLayout.Bottom>
      </MainLayout>,
    );

    const main = screen.getByRole("main", { name: "Page" });
    expect(ref.current).toBe(main);
    expect(main).toHaveAttribute("id", "page-content");
    expect(main).toHaveAttribute("tabindex", "-1");
    expect(main).toHaveClass(
      "af-main-layout__center",
      "grid",
      "content-custom",
    );
    expect(main).not.toHaveClass("root-custom");
    expect(
      main.className.split(" ").filter((name) => name === "grid"),
    ).toHaveLength(1);
    expect(main).toHaveTextContent("Main content");
    expect(main).not.toHaveTextContent("Top");
    expect(main).not.toHaveTextContent("Bottom");
  });

  it("omits main when only top content is provided", () => {
    const { container } = render(
      <MainLayout mainProps={{ id: "page-content" }}>
        <MainLayout.Top>
          <div role="alert">Error message</div>
        </MainLayout.Top>
      </MainLayout>,
    );

    const alert = screen.getByRole("alert");
    expect(screen.queryByRole("main")).toBeNull();
    expect(alert).toHaveTextContent("Error message");
    expect(container.querySelector(".af-main-layout__top")).toContainElement(
      alert,
    );
  });

  it("keeps the content wrapper between the optional header and footer", () => {
    const { container } = render(
      <MainLayout
        headerProps={{ appNameProps: { label: "My application" } }}
        footerProps={{
          expandLinkText: "About",
          copyright: "© AXA",
          links: [],
        }}
      >
        Main content
      </MainLayout>,
    );

    const root = container.querySelector(".af-main-layout");
    const areas = Array.from(root?.children ?? []);
    expect(areas[0].tagName).toBe("HEADER");
    expect(areas[1]).toHaveClass("af-main-layout__content");
    expect(areas[2].tagName).toBe("FOOTER");
    expect(areas[1]).toContainElement(screen.getByRole("main"));
  });
});
