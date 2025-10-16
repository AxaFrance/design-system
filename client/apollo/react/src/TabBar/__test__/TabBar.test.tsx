import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import { ItemTabBar } from "../../ItemTabBar/ItemTabBarCommon";
import {
  TabBarCommon as TabBar,
  tabBarDirection,
  type TabBarDirection,
} from "../TabBarCommon";

const tabs = [
  { title: "Tab 1", content: "Content 1" },
  { title: "Tab 2", content: "Content 2" },
  { title: "Tab 3", content: "Content 3" },
];

describe("TabBar", () => {
  it("should render the component", () => {
    render(<TabBar items={tabs} ItemTabBarComponent={ItemTabBar} />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(3);
    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  it("should render the component with the second tab pre-selected", () => {
    render(
      <TabBar
        items={tabs}
        ItemTabBarComponent={ItemTabBar}
        preSelectedTabIndex={1}
      />,
    );
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(3);
    expect(screen.getByText("Content 2")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")[1]).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("should render the component with centered tabs", () => {
    render(
      <TabBar
        items={tabs}
        ItemTabBarComponent={ItemTabBar}
        direction={tabBarDirection.center as TabBarDirection}
      />,
    );
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(3);
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.getByRole("tablist").parentElement).toHaveClass(
      "af-tabbar af-tabbar--center",
    );
  });

  it("should change tab on click", async () => {
    const user = userEvent.setup();
    render(<TabBar items={tabs} ItemTabBarComponent={ItemTabBar} />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(3);
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    await user.click(screen.getAllByRole("tab")[1]);
    expect(screen.getByText("Content 2")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")[1]).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("should change tab on arrow right key press", async () => {
    const user = userEvent.setup();
    render(<TabBar items={tabs} ItemTabBarComponent={ItemTabBar} />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(3);
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    screen.getAllByRole("tab")[0].focus();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByText("Content 2")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")[1]).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("should change tab on arrow left key press", async () => {
    const user = userEvent.setup();
    render(<TabBar items={tabs} ItemTabBarComponent={ItemTabBar} />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(3);
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    screen.getAllByRole("tab")[0].focus();
    await user.keyboard("{ArrowLeft}");
    expect(screen.getByText("Content 3")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")[2]).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <TabBar items={tabs} ItemTabBarComponent={ItemTabBar} />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
