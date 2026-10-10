import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { vi } from "vitest";
import { User } from "../User";

describe("User", () => {
  it("names the link with the visible user name and profile", () => {
    render(<User name="Jean Dupont" profile="Admin" href="/profil" />);

    const link = screen.getByRole("link");
    expect(link).toHaveAccessibleName(/^Jean Dupont\s*\[Admin\]$/);
    expect(link).not.toHaveAttribute("aria-label");
  });

  it("sets no title by default", () => {
    render(<User name="Jean Dupont" profile="Admin" href="/profil" />);

    expect(screen.getByRole("link")).not.toHaveAttribute("title");
  });

  it("sets the title passed by the caller", () => {
    render(
      <User
        name="Jean Dupont"
        href="/profil"
        title="Jean Dupont, voir mon profil"
      />,
    );

    expect(screen.getByRole("link", { name: "Jean Dupont" })).toHaveAttribute(
      "title",
      "Jean Dupont, voir mon profil",
    );
  });

  it("renders the user name as text without href", () => {
    render(<User name="Jean Dupont" profile="Admin" />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByText("Jean Dupont")).toBeInTheDocument();
    expect(screen.getByText("[Admin]")).toBeInTheDocument();
  });

  it("calls onClick with the path", async () => {
    const onClick = vi.fn();
    render(
      <User
        name="Jean Dupont"
        href="#profil"
        path="/profil"
        onClick={onClick}
      />,
    );

    await userEvent.click(screen.getByRole("link", { name: "Jean Dupont" }));

    expect(onClick).toHaveBeenCalledWith(
      expect.objectContaining({ path: "/profil" }),
    );
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <User name="Jean Dupont" profile="Admin" href="/profil" />,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
