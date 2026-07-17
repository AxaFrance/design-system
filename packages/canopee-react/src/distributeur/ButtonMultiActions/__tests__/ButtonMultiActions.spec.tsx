import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { ButtonMultiActions } from "../ButtonMultiActions";

describe("ButtonMultiActions", () => {
  it("opens and closes menu on trigger click", async () => {
    const user = userEvent.setup();

    render(
      <ButtonMultiActions>
        <button type="button">Modifier</button>
      </ButtonMultiActions>,
    );

    const trigger = screen.getByRole("button", { name: "Actions" });

    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("menu")).toBeInTheDocument();

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("closes menu when clicking outside", async () => {
    const user = userEvent.setup();

    render(
      <>
        <ButtonMultiActions>
          <button type="button">Exporter</button>
        </ButtonMultiActions>
        <button type="button">Outside</button>
      </>,
    );

    const trigger = screen.getByRole("button", { name: "Actions" });
    await user.click(trigger);

    expect(screen.getByRole("menu")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Outside" }));

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("closes menu when clicking a menu item", async () => {
    const user = userEvent.setup();

    render(
      <ButtonMultiActions>
        <button type="button">Dupliquer</button>
      </ButtonMultiActions>,
    );

    const trigger = screen.getByRole("button", { name: "Actions" });
    await user.click(trigger);

    expect(screen.getByRole("menu")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Dupliquer" }));

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("supports keyboard navigation with ArrowDown and Escape", async () => {
    const user = userEvent.setup();

    render(
      <ButtonMultiActions>
        <button type="button">Dupliquer</button>
      </ButtonMultiActions>,
    );

    const trigger = screen.getByRole("button", { name: "Actions" });
    trigger.focus();

    await user.keyboard("{ArrowDown}");

    const menuItem = screen.getByRole("button", { name: "Dupliquer" });
    expect(menuItem).toHaveFocus();

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("opens the menu and focuses the first item when pressing Enter on the trigger", async () => {
    const user = userEvent.setup();

    render(
      <ButtonMultiActions>
        <button type="button">Dupliquer</button>
      </ButtonMultiActions>,
    );

    const trigger = screen.getByRole("button", { name: "Actions" });
    trigger.focus();

    await user.keyboard("{Enter}");

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "Dupliquer" })).toHaveFocus();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <ButtonMultiActions menuLabel="Actions supplémentaires">
        <button type="button">Voir</button>
      </ButtonMultiActions>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
