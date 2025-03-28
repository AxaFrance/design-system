import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import bank from "@material-symbols/svg-700/rounded/account_balance_wallet-fill.svg";
import {
  Icon,
  iconSizeVariants,
  type IconSizeVariants,
  iconVariants,
  type IconVariants,
} from "../IconCommon";

describe("Button component", () => {
  it.each(Object.keys(iconVariants))(
    "should render correctly with variant %s",
    (variant) => {
      render(<Icon icon={bank} variant={variant as IconVariants} />);
      const container = screen.getByTestId("iconContainer");
      expect(container).toHaveClass(`af-icon--${variant}`);
      expect(container).not.toHaveClass("af-icon--background");
    },
  );

  it.each(Object.keys(iconSizeVariants))(
    "should render correctly with size %s",
    (size) => {
      render(
        <Icon icon={bank} variant="primary" size={size as IconSizeVariants} />,
      );
      const container = screen.getByTestId("iconContainer");
      expect(container).toHaveClass(
        `af-icon--${iconSizeVariants[size as IconSizeVariants]}`,
      );
    },
  );

  it("should render with background", () => {
    render(<Icon icon={bank} variant="primary" background />);
    const container = screen.getByTestId("iconContainer");
    expect(container).toHaveClass("af-icon--background");
  });
});
