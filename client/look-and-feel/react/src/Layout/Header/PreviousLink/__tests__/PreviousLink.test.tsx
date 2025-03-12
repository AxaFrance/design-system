import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { PreviousLink } from "../PreviousLink";

describe("PreviousLink Component", () => {
  const handleClick = vi.fn();

  const children = <a href="/">Retour à l&apos;accueil</a>;

  it("should not render when there are no valid children", () => {
    const { container } = render(
      <PreviousLink handleClick={handleClick}>{null}</PreviousLink>,
    );

    expect(container.firstChild).toBeNull();
  });

  it("should render a button with the SVG icon and child content", async () => {
    render(<PreviousLink handleClick={handleClick}>{children}</PreviousLink>);

    screen.getByRole("link", { name: "Retour à l'accueil" });
  });

  it("should handleClick when clicked", async () => {
    render(<PreviousLink handleClick={handleClick}>{children}</PreviousLink>);

    const link = screen.getByRole("link");

    await userEvent.click(link);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
