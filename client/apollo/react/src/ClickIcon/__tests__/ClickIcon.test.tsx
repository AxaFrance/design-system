import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import bank from "@material-symbols/svg-700/rounded/account_balance_wallet-fill.svg";
import userEvent from "@testing-library/user-event";
import {
  ClickIcon,
  clickIconVariants,
  type ClickIconVariants,
} from "../ClickIconCommon";

describe("Icon component", () => {
  it.each(Object.keys(clickIconVariants))(
    "should render correctly with variant %s",
    (variant) => {
      render(<ClickIcon src={bank} variant={variant as ClickIconVariants} />);
      const container = screen.getByRole("button");
      expect(container.classList).toContain(`af-click-icon--${variant}`);
    },
  );

  it("should trigger the function on click", async () => {
    const onClick = vi.fn();

    render(<ClickIcon src={bank} onClick={onClick} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
