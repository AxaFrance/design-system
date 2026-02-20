import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Tabs } from "../Tabs";

describe("Tabs", () => {
  describe("Rendering", () => {
    it("should render all tab buttons with their titles", () => {
      render(
        <Tabs>
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
          <Tabs.Tab title="Third Tab">Third content</Tabs.Tab>
        </Tabs>,
      );

      expect(
        screen.getByRole("button", { name: "First Tab" }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Second Tab" }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Third Tab" }),
      ).toBeInTheDocument();
    });

    it("should render the first tab content by default", () => {
      render(
        <Tabs>
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
        </Tabs>,
      );

      expect(screen.getByText("First content")).toBeVisible();
      expect(screen.getByText("Second content")).toBeInTheDocument();
    });

    it("should render tab content based on activeIndex prop", () => {
      render(
        <Tabs activeIndex="1">
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
        </Tabs>,
      );

      expect(screen.getByText("Second content")).toBeVisible();
      expect(screen.getByText("First content")).toBeInTheDocument();
    });

    it("should render complex content in tabs", () => {
      render(
        <Tabs>
          <Tabs.Tab title="Tab 1">
            <div>
              <h2>Heading</h2>
              <p>Paragraph text</p>
            </div>
          </Tabs.Tab>
          <Tabs.Tab title="Tab 2">Content 2</Tabs.Tab>
        </Tabs>,
      );

      expect(screen.getByRole("heading", { name: "Heading" })).toBeVisible();
      expect(screen.getByText("Paragraph text")).toBeVisible();
    });
  });

  describe("User Interactions - Click", () => {
    it("should change active tab when clicking on a tab button", async () => {
      const user = userEvent.setup();

      render(
        <Tabs>
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
        </Tabs>,
      );

      expect(screen.getByText("First content")).toBeVisible();

      await user.click(screen.getByRole("button", { name: "Second Tab" }));

      expect(screen.getByText("Second content")).toBeVisible();
      expect(screen.getByText("First content")).toBeInTheDocument();
    });

    it("should call onChange callback when clicking on a tab", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();

      render(
        <Tabs onChange={onChange}>
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
        </Tabs>,
      );

      await user.click(screen.getByRole("button", { name: "Second Tab" }));

      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it("should switch between multiple tabs", async () => {
      const user = userEvent.setup();

      render(
        <Tabs>
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
          <Tabs.Tab title="Third Tab">Third content</Tabs.Tab>
        </Tabs>,
      );

      await user.click(screen.getByRole("button", { name: "Second Tab" }));
      expect(screen.getByText("Second content")).toBeVisible();

      await user.click(screen.getByRole("button", { name: "Third Tab" }));
      expect(screen.getByText("Third content")).toBeVisible();

      await user.click(screen.getByRole("button", { name: "First Tab" }));
      expect(screen.getByText("First content")).toBeVisible();
    });
  });

  describe("Keyboard Navigation", () => {
    it("should navigate to next tab with ArrowRight", async () => {
      const user = userEvent.setup();

      render(
        <Tabs>
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
          <Tabs.Tab title="Third Tab">Third content</Tabs.Tab>
        </Tabs>,
      );

      const firstButton = screen.getByRole("button", { name: "First Tab" });
      firstButton.focus();

      await user.keyboard("{ArrowRight}");

      expect(screen.getByText("Second content")).toBeVisible();
      expect(screen.getByRole("button", { name: "Second Tab" })).toHaveFocus();
    });

    it("should navigate to previous tab with ArrowLeft", async () => {
      const user = userEvent.setup();

      render(
        <Tabs activeIndex="1">
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
          <Tabs.Tab title="Third Tab">Third content</Tabs.Tab>
        </Tabs>,
      );

      const secondButton = screen.getByRole("button", { name: "Second Tab" });
      secondButton.focus();

      await user.keyboard("{ArrowLeft}");

      expect(screen.getByText("First content")).toBeVisible();
      expect(screen.getByRole("button", { name: "First Tab" })).toHaveFocus();
    });

    it("should navigate to first tab with Home key", async () => {
      const user = userEvent.setup();

      render(
        <Tabs activeIndex="2">
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
          <Tabs.Tab title="Third Tab">Third content</Tabs.Tab>
        </Tabs>,
      );

      const thirdButton = screen.getByRole("button", { name: "Third Tab" });
      thirdButton.focus();

      await user.keyboard("{Home}");

      expect(screen.getByText("First content")).toBeVisible();
      expect(screen.getByRole("button", { name: "First Tab" })).toHaveFocus();
    });

    it("should navigate to last tab with End key", async () => {
      const user = userEvent.setup();

      render(
        <Tabs>
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
          <Tabs.Tab title="Third Tab">Third content</Tabs.Tab>
        </Tabs>,
      );

      const firstButton = screen.getByRole("button", { name: "First Tab" });
      firstButton.focus();

      await user.keyboard("{End}");

      expect(screen.getByText("Third content")).toBeVisible();
      expect(screen.getByRole("button", { name: "Third Tab" })).toHaveFocus();
    });

    it("should not navigate beyond first tab when pressing ArrowLeft", async () => {
      const user = userEvent.setup();

      render(
        <Tabs>
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
        </Tabs>,
      );

      const firstButton = screen.getByRole("button", { name: "First Tab" });
      firstButton.focus();

      await user.keyboard("{ArrowLeft}");

      expect(screen.getByText("First content")).toBeVisible();
      expect(screen.getByRole("button", { name: "First Tab" })).toHaveFocus();
    });

    it("should not navigate beyond last tab when pressing ArrowRight", async () => {
      const user = userEvent.setup();

      render(
        <Tabs activeIndex="1">
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
        </Tabs>,
      );

      const secondButton = screen.getByRole("button", { name: "Second Tab" });
      secondButton.focus();

      await user.keyboard("{ArrowRight}");

      expect(screen.getByText("Second content")).toBeVisible();
      expect(screen.getByRole("button", { name: "Second Tab" })).toHaveFocus();
    });
  });

  describe("Accessibility", () => {
    it("should have proper ARIA roles", () => {
      render(
        <Tabs>
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
        </Tabs>,
      );

      expect(screen.getByRole("tablist")).toBeInTheDocument();
      expect(screen.getAllByRole("tabpanel")).toHaveLength(2);
    });

    it("should have aria-controls linking tab to panel", () => {
      render(
        <Tabs>
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
        </Tabs>,
      );

      const firstButton = screen.getByRole("button", { name: "First Tab" });
      const ariaControls = firstButton.getAttribute("aria-controls");

      expect(ariaControls).toBeTruthy();

      const panel = screen
        .getAllByRole("tabpanel")
        .find((p) => p.id === ariaControls);
      expect(panel).toBeInTheDocument();
    });

    it("should have aria-labelledby linking panel to tab", () => {
      render(
        <Tabs>
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
        </Tabs>,
      );

      const firstButton = screen.getByRole("button", { name: "First Tab" });
      const panels = screen.getAllByRole("tabpanel");
      const firstPanel = panels[0];

      expect(firstPanel.getAttribute("aria-labelledby")).toBe(firstButton.id);
    });

    it("should set tabIndex to 0 for active tab and -1 for inactive tabs", () => {
      render(
        <Tabs>
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
          <Tabs.Tab title="Third Tab">Third content</Tabs.Tab>
        </Tabs>,
      );

      expect(screen.getByRole("button", { name: "First Tab" })).toHaveAttribute(
        "tabIndex",
        "0",
      );
      expect(
        screen.getByRole("button", { name: "Second Tab" }),
      ).toHaveAttribute("tabIndex", "-1");
      expect(screen.getByRole("button", { name: "Third Tab" })).toHaveAttribute(
        "tabIndex",
        "-1",
      );
    });

    it("should update tabIndex when active tab changes", async () => {
      const user = userEvent.setup();

      render(
        <Tabs>
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
        </Tabs>,
      );

      await user.click(screen.getByRole("button", { name: "Second Tab" }));

      expect(screen.getByRole("button", { name: "First Tab" })).toHaveAttribute(
        "tabIndex",
        "-1",
      );
      expect(
        screen.getByRole("button", { name: "Second Tab" }),
      ).toHaveAttribute("tabIndex", "0");
    });
  });

  describe("Controlled Component", () => {
    it("should respect activeIndex prop changes", () => {
      const { rerender } = render(
        <Tabs activeIndex="0">
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
        </Tabs>,
      );

      expect(screen.getByText("First content")).toBeVisible();

      rerender(
        <Tabs activeIndex="1">
          <Tabs.Tab title="First Tab">First content</Tabs.Tab>
          <Tabs.Tab title="Second Tab">Second content</Tabs.Tab>
        </Tabs>,
      );

      expect(screen.getByText("Second content")).toBeVisible();
      expect(screen.getByText("First content")).toBeInTheDocument();
    });
  });

  describe("Edge Cases", () => {
    it("should handle single tab", () => {
      render(
        <Tabs>
          <Tabs.Tab title="Only Tab">Only content</Tabs.Tab>
        </Tabs>,
      );

      expect(
        screen.getByRole("button", { name: "Only Tab" }),
      ).toBeInTheDocument();
      expect(screen.getByText("Only content")).toBeVisible();
    });

    it("should handle tabs with JSX elements as titles", () => {
      render(
        <Tabs>
          <Tabs.Tab
            title={
              <span>
                Tab with <strong>bold</strong>
              </span>
            }
          >
            Content 1
          </Tabs.Tab>
          <Tabs.Tab title="Simple Tab">Content 2</Tabs.Tab>
        </Tabs>,
      );

      expect(screen.getByText("bold")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Simple Tab" }),
      ).toBeInTheDocument();
    });

    it("should handle empty tab content", () => {
      render(
        <Tabs>
          <Tabs.Tab title="Empty Tab" />
          <Tabs.Tab title="Tab with content">Some content</Tabs.Tab>
        </Tabs>,
      );

      const panels = screen.getAllByRole("tabpanel");
      expect(panels[0]).toBeEmptyDOMElement();
      expect(screen.getByText("Some content")).toBeInTheDocument();
    });
  });
});
