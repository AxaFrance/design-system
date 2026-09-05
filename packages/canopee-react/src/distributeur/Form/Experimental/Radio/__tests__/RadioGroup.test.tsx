import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { RadioGroup } from "../RadioGroup";
import { RadioItem } from "../RadioItem";
import { RadioButton } from "../RadioButton";
import { RadioText } from "../RadioText";

describe("RadioGroup", () => {
  it("should render children", () => {
    render(
      <RadioGroup>
        <RadioItem id="item1" name="group" value="1" />
      </RadioGroup>,
    );

    const radio = screen.getByRole("radio");
    expect(radio).toBeInTheDocument();
  });

  it("should have correct BEM class", () => {
    render(
      <RadioGroup>
        <RadioItem id="item1" name="group" value="1" />
      </RadioGroup>,
    );

    const group = document.querySelector(".af-radio__group");
    expect(group).toBeInTheDocument();
  });

  it("should render multiple radio children", () => {
    render(
      <RadioGroup>
        <RadioItem id="item1" name="group" value="1" />
        <RadioItem id="item2" name="group" value="2" />
        <RadioItem id="item3" name="group" value="3" />
      </RadioGroup>,
    );

    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(3);
  });

  it("should support horizontal orientation (default)", () => {
    render(
      <RadioGroup>
        <RadioItem id="item1" name="group" value="1" />
      </RadioGroup>,
    );

    const group = document.querySelector(".af-radio__group");
    expect(group).toHaveClass("af-radio__group--horizontal");
  });

  it("should support vertical orientation", () => {
    render(
      <RadioGroup orientation="vertical">
        <RadioItem id="item1" name="group" value="1" />
      </RadioGroup>,
    );

    const group = document.querySelector(".af-radio__group");
    expect(group).toHaveClass("af-radio__group--vertical");
  });

  it("should support button variant", () => {
    render(
      <RadioGroup variant="button">
        <RadioButton id="btn1" name="group" value="1" label="Button 1" />
      </RadioGroup>,
    );

    const group = document.querySelector(".af-radio__group");
    expect(group).toHaveClass("af-radio__group--button");
  });

  it("should support card variant", () => {
    render(
      <RadioGroup variant="card">
        <RadioItem id="item1" name="group" value="1" />
      </RadioGroup>,
    );

    const group = document.querySelector(".af-radio__group");
    expect(group).toHaveClass("af-radio__group--card");
  });

  it("should accept custom className", () => {
    render(
      <RadioGroup className="custom-group">
        <RadioItem id="item1" name="group" value="1" />
      </RadioGroup>,
    );

    const group = document.querySelector(".af-radio__group");
    expect(group).toHaveClass("custom-group");
    expect(group).toHaveClass("af-radio__group");
  });

  it("should work with RadioText children", () => {
    render(
      <RadioGroup>
        <RadioText id="radio1" name="group" value="1" label="Option 1" />
        <RadioText id="radio2" name="group" value="2" label="Option 2" />
        <RadioText id="radio3" name="group" value="3" label="Option 3" />
      </RadioGroup>,
    );

    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();

    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(3);
  });

  it("should work with RadioButton children", () => {
    render(
      <RadioGroup variant="button">
        <RadioButton id="btn1" name="group" value="1" label="Button 1" />
        <RadioButton id="btn2" name="group" value="2" label="Button 2" />
        <RadioButton id="btn3" name="group" value="3" label="Button 3" />
      </RadioGroup>,
    );

    expect(screen.getByText("Button 1")).toBeInTheDocument();
    expect(screen.getByText("Button 2")).toBeInTheDocument();
    expect(screen.getByText("Button 3")).toBeInTheDocument();

    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(3);
  });

  it("should enforce mutual exclusion in a radio group", async () => {
    const user = userEvent.setup();

    const { rerender } = render(
      <RadioGroup>
        <RadioItem id="item1" name="group" value="1" />
        <RadioItem id="item2" name="group" value="2" />
        <RadioItem id="item3" name="group" value="3" />
      </RadioGroup>,
    );

    let radios = screen.getAllByRole("radio") as HTMLInputElement[];

    // Initially, no radios are checked
    expect(radios[0].checked).toBe(false);
    expect(radios[1].checked).toBe(false);
    expect(radios[2].checked).toBe(false);

    // Click first radio
    await user.click(radios[0]);
    rerender(
      <RadioGroup>
        <RadioItem id="item1" name="group" value="1" checked />
        <RadioItem id="item2" name="group" value="2" />
        <RadioItem id="item3" name="group" value="3" />
      </RadioGroup>,
    );

    radios = screen.getAllByRole("radio") as HTMLInputElement[];
    expect(radios[0].checked).toBe(true);
    expect(radios[1].checked).toBe(false);
    expect(radios[2].checked).toBe(false);

    // Click second radio
    await user.click(radios[1]);
    rerender(
      <RadioGroup>
        <RadioItem id="item1" name="group" value="1" />
        <RadioItem id="item2" name="group" value="2" checked />
        <RadioItem id="item3" name="group" value="3" />
      </RadioGroup>,
    );

    radios = screen.getAllByRole("radio") as HTMLInputElement[];
    expect(radios[0].checked).toBe(false);
    expect(radios[1].checked).toBe(true);
    expect(radios[2].checked).toBe(false);

    // Click third radio
    await user.click(radios[2]);
    rerender(
      <RadioGroup>
        <RadioItem id="item1" name="group" value="1" />
        <RadioItem id="item2" name="group" value="2" />
        <RadioItem id="item3" name="group" value="3" checked />
      </RadioGroup>,
    );

    radios = screen.getAllByRole("radio") as HTMLInputElement[];
    expect(radios[0].checked).toBe(false);
    expect(radios[1].checked).toBe(false);
    expect(radios[2].checked).toBe(true);
  });

  it("should handle onChange callbacks from children", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <RadioGroup>
        <RadioText
          id="radio1"
          name="group"
          value="1"
          label="Option 1"
          onChange={onChange}
        />
        <RadioText
          id="radio2"
          name="group"
          value="2"
          label="Option 2"
          onChange={onChange}
        />
      </RadioGroup>,
    );

    const radios = screen.getAllByRole("radio");
    await user.click(radios[0]);

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should combine multiple CSS modifiers", () => {
    render(
      <RadioGroup orientation="vertical" variant="card">
        <RadioItem id="item1" name="group" value="1" />
      </RadioGroup>,
    );

    const group = document.querySelector(".af-radio__group");
    expect(group).toHaveClass("af-radio__group--vertical");
    expect(group).toHaveClass("af-radio__group--card");
  });

  it("should render with mixed children types", () => {
    render(
      <RadioGroup>
        <RadioText id="radio1" name="group" value="1" label="Text Option" />
        <RadioButton id="btn1" name="group" value="2" label="Button Option" />
        <RadioItem id="item1" name="group" value="3" />
      </RadioGroup>,
    );

    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(3);
    expect(screen.getByText("Text Option")).toBeInTheDocument();
    expect(screen.getByText("Button Option")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <RadioGroup>
        <RadioText id="radio1" name="group" value="1" label="Option 1" />
        <RadioText id="radio2" name="group" value="2" label="Option 2" />
      </RadioGroup>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations with vertical orientation", async () => {
    const { container } = render(
      <RadioGroup orientation="vertical">
        <RadioText id="radio1" name="group" value="1" label="Option 1" />
        <RadioText id="radio2" name="group" value="2" label="Option 2" />
      </RadioGroup>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations with button variant", async () => {
    const { container } = render(
      <RadioGroup variant="button">
        <RadioButton id="btn1" name="group" value="1" label="Button 1" />
        <RadioButton id="btn2" name="group" value="2" label="Button 2" />
      </RadioGroup>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
