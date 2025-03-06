import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { ButtonClient, Variants } from "../Button";

describe("Button", () => {
  it("Should renders the button with children", () => {
    render(<ButtonClient>Click me</ButtonClient>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it.each([
    [Variants.primary, "af-btn-client--primary"],
    [Variants.business, "af-btn-client--primary-business"],
    [Variants.secondary, "af-btn-client--secondary"],
    [Variants.secondaryError, "af-btn-client--secondary-error"],
    [Variants.tertiary, "af-btn-client--tertiary"],
    [Variants.ghost, "af-btn-client--ghost"],
  ])("Should applies the correct variant class", (variant, className) => {
    render(<ButtonClient variant={variant}>Button</ButtonClient>);
    expect(screen.getByText("Button")).toHaveClass(className);
  });

  it("Should renders left and right icons", () => {
    render(
      <ButtonClient iconLeft={<span>Left</span>} iconRight={<span>Right</span>}>
        Button
      </ButtonClient>,
    );
    expect(screen.getByText("Left")).toBeInTheDocument();
    expect(screen.getByText("Right")).toBeInTheDocument();
  });

  it("Should disable the button when disabled", () => {
    render(<ButtonClient disabled>Disabled</ButtonClient>);
    const button = screen.getByText("Disabled");
    expect(button).toBeDisabled();
  });

  it("Should disable the button and show loader when loading", () => {
    render(<ButtonClient loading>Loading</ButtonClient>);
    const button = screen.getByText("Loading");
    expect(button).toBeDisabled();
    expect(screen.getByLabelText("Chargement en cours")).toBeInTheDocument();
  });

  it("Should calls onClick handler when clicked", async () => {
    const handleClick = vi.fn();
    render(<ButtonClient onClick={handleClick}>Click me</ButtonClient>);
    await userEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
