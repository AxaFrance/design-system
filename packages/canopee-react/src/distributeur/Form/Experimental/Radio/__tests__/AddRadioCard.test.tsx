import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { AddRadioCard } from "../AddRadioCard";

describe("AddRadioCard", () => {
  it("should render an add button", () => {
    render(<AddRadioCard />);

    const button = screen.getByRole("button", { name: /ajouter/i });
    expect(button).toBeInTheDocument();
  });

  it("should render with default label 'Ajouter'", () => {
    render(<AddRadioCard />);

    const label = screen.getByText("Ajouter");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("af-radiocard__label");
  });

  it("should have correct BEM class", () => {
    render(<AddRadioCard />);

    const button = screen.getByRole("button", { name: /ajouter/i });
    expect(button).toHaveClass("af-radio-add-card");
  });

  it("should render icon with aria-hidden", () => {
    render(<AddRadioCard />);

    const svg = document.querySelector("svg[aria-hidden='true']");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("af-basecard__icon");
  });

  it("should support horizontal orientation", () => {
    render(<AddRadioCard orientation="horizontal" />);

    const button = screen.getByRole("button", { name: /ajouter/i });
    expect(button).toHaveClass("af-radio-add-card--horizontal");
  });

  it("should support vertical orientation", () => {
    render(<AddRadioCard orientation="vertical" />);

    const button = screen.getByRole("button", { name: /ajouter/i });
    expect(button).toHaveClass("af-radio-add-card--vertical");
  });

  it("should default to horizontal orientation", () => {
    render(<AddRadioCard />);

    const button = screen.getByRole("button", { name: /ajouter/i });
    expect(button).toHaveClass("af-radio-add-card--horizontal");
  });

  it("should call onClick callback when clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<AddRadioCard onClick={onClick} />);

    const button = screen.getByRole("button", { name: /ajouter/i });
    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should support multiple clicks", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<AddRadioCard onClick={onClick} />);

    const button = screen.getByRole("button", { name: /ajouter/i });
    await user.click(button);
    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("should be keyboard accessible", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<AddRadioCard onClick={onClick} />);

    const button = screen.getByRole("button", { name: /ajouter/i });
    button.focus();
    expect(button).toHaveFocus();

    await user.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should have accessible button role", () => {
    render(<AddRadioCard />);

    const button = screen.getByRole("button", { name: /ajouter/i });
    expect(button).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<AddRadioCard />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations with onClick handler", async () => {
    const { container } = render(<AddRadioCard onClick={() => {}} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations with vertical orientation", async () => {
    const { container } = render(<AddRadioCard orientation="vertical" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
