import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { RadioCard } from "../RadioCard";

describe("RadioCard", () => {
  it("should render a radio input within a card", () => {
    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
      />,
    );

    const radio = screen.getByRole("radio", { name: "Icon Card Option" });
    expect(radio).toBeInTheDocument();
  });

  it("should render label text", () => {
    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
      />,
    );

    const label = screen.getByText("Card Option");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("af-radiocard__label");
  });

  it("should render with correct BEM classes", () => {
    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
      />,
    );

    expect(document.querySelector(".af-radiocard")).toBeInTheDocument();
    expect(document.querySelector(".af-radio__card")).toBeInTheDocument();
  });

  it("should render icon element", () => {
    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="custom-icon">Custom Icon</div>}
      />,
    );

    const icon = screen.getByTestId("custom-icon");
    expect(icon).toBeInTheDocument();
  });

  it("should render icon from string path as Svg component", () => {
    const iconPath = "/path/to/icon.svg";
    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={iconPath}
      />,
    );

    const svg = document.querySelector("svg[class*='af-basecard__icon']");
    expect(svg).toBeInTheDocument();
  });

  it("should support optional action element", () => {
    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
        action={<button type="button">Edit</button>}
      />,
    );

    const actionButton = screen.getByRole("button", { name: "Edit" });
    expect(actionButton).toBeInTheDocument();

    const actionSpan = document.querySelector(".af-radiocard__action");
    expect(actionSpan).toBeInTheDocument();
  });

  it("should not render action span when action is undefined", () => {
    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
      />,
    );

    const actionSpan = document.querySelector(".af-radiocard__action");
    expect(actionSpan).not.toBeInTheDocument();
  });

  it("should support horizontal orientation (default)", () => {
    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
      />,
    );

    const card = document.querySelector(".af-radiocard");
    expect(card).toHaveClass("af-radiocard--horizontal");
  });

  it("should support vertical orientation", () => {
    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
        orientation="vertical"
      />,
    );

    const card = document.querySelector(".af-radiocard");
    expect(card).toHaveClass("af-radiocard--vertical");
  });

  it("should associate card with radio via htmlFor", () => {
    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
      />,
    );

    const radio = screen.getByRole("radio", {
      name: "Icon Card Option",
    });
    expect(radio.id).toBe("card1");
  });

  it("should forward radio input attributes", () => {
    render(
      <RadioCard
        id="card1"
        name="test-group"
        value="test-value"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
      />,
    );

    const radio = screen.getByRole("radio", {
      name: "Icon Card Option",
    }) as HTMLInputElement;
    expect(radio.id).toBe("card1");
    expect(radio.name).toBe("test-group");
    expect(radio.value).toBe("test-value");
  });

  it("should support checked state", () => {
    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
        checked
      />,
    );

    const radio = screen.getByRole("radio", {
      name: "Icon Card Option",
    }) as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  it("should support disabled state", () => {
    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
        disabled
      />,
    );

    const radio = screen.getByRole("radio", {
      name: "Icon Card Option",
    }) as HTMLInputElement;
    expect(radio.disabled).toBe(true);
  });

  it("should call onChange callback when selected", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
        onChange={onChange}
      />,
    );

    const radio = screen.getByRole("radio", {
      name: "Icon Card Option",
    });
    await user.click(radio);

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should trigger onChange when clicking the card label", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
        onChange={onChange}
      />,
    );

    const label = screen.getByText("Card Option");
    await user.click(label);

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should not prevent action button from being interactive", async () => {
    const user = userEvent.setup();
    const onActionClick = vi.fn();
    const onChange = vi.fn();

    render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
        action={
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onActionClick();
            }}
          >
            Edit
          </button>
        }
        onChange={onChange}
      />,
    );

    const actionButton = screen.getByRole("button", { name: "Edit" });
    await user.click(actionButton);

    expect(onActionClick).toHaveBeenCalled();
  });

  it("should work with multiple cards in same group", () => {
    render(
      <>
        <RadioCard
          id="card1"
          name="group"
          value="1"
          label="Card 1"
          icon={<div data-testid="icon1">Icon 1</div>}
        />
        <RadioCard
          id="card2"
          name="group"
          value="2"
          label="Card 2"
          icon={<div data-testid="icon2">Icon 2</div>}
        />
        <RadioCard
          id="card3"
          name="group"
          value="3"
          label="Card 3"
          icon={<div data-testid="icon3">Icon 3</div>}
        />
      </>,
    );

    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(3);
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations when disabled", async () => {
    const { container } = render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
        disabled
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations with action button", async () => {
    const { container } = render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
        action={<button type="button">Edit</button>}
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations with vertical orientation", async () => {
    const { container } = render(
      <RadioCard
        id="card1"
        name="group"
        value="1"
        label="Card Option"
        icon={<div data-testid="icon">Icon</div>}
        orientation="vertical"
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
