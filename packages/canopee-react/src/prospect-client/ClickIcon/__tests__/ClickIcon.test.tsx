import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import bank from "@material-symbols/svg-700/rounded/account_balance_wallet-fill.svg";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { ClickIcon } from "../ClickIconCommon";

describe("Icon component", () => {
  it("should trigger the function on click", async () => {
    const onClick = vi.fn();

    render(<ClickIcon src={bank} onClick={onClick} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <ClickIcon />", async () => {
      const { container } = render(<ClickIcon src={bank} aria-label="test" />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
