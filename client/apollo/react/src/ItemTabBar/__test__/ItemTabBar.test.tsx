import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { axe } from "jest-axe";
import {
  ItemTabBar,
  ItemTabBarVariants,
  itemTabBarVariants,
} from "../ItemTabBarCommon";

describe("ItemTabBar component", () => {
  it.each(Object.keys(itemTabBarVariants))(
    "should render correctly with variant %s",
    (variant) => {
      render(
        <ItemTabBar
          variant={variant as ItemTabBarVariants}
          aria-label="test"
          title="This is title"
        />,
      );
      const container = screen.getByLabelText("test");
      expect(container.classList).toContain(`af-item-tab-bar--${variant}`);
    },
  );

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
