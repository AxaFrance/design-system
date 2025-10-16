import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { axe } from "jest-axe";
import { ItemTabBar } from "../ItemTabBarCommon";

describe("ItemTabBar component", () => {
  it("should render correctly", () => {
    render(<ItemTabBar aria-label="test" title="This is title" />);
    const container = screen.getByLabelText("test");
    expect(container).toHaveClass("af-item-tab-bar");
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <ItemTabBar />", async () => {
      const { container } = render(
        <div role="tablist">
          <ItemTabBar aria-label="test" title="This is title" />
        </div>,
      );

      expect(await axe(container.firstChild as Element)).toHaveNoViolations();
    });
  });
});
