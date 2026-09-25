import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { RadioInput } from "../RadioInput";

describe("RadioInput", () => {
  describe("button variant (default)", () => {
    it("should render with label", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          options={[
            { id: "opt1", name: "group", value: "1", label: "Option 1" },
            { id: "opt2", name: "group", value: "2", label: "Option 2" },
          ]}
        />,
      );

      expect(screen.getByText("Select an option")).toBeInTheDocument();
      expect(screen.getByText("Option 1")).toBeInTheDocument();
      expect(screen.getByText("Option 2")).toBeInTheDocument();
    });

    it("should render fieldset with legend", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          options={[
            { id: "opt1", name: "group", value: "1", label: "Option 1" },
          ]}
        />,
      );

      const fieldset = screen.getByRole("group");
      expect(fieldset).toBeInTheDocument();
      expect(fieldset.tagName).toBe("FIELDSET");
    });

    it("should render all button options", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          options={[
            { id: "opt1", name: "group", value: "1", label: "Option 1" },
            { id: "opt2", name: "group", value: "2", label: "Option 2" },
            { id: "opt3", name: "group", value: "3", label: "Option 3" },
          ]}
        />,
      );

      const radios = screen.getAllByRole("radio");
      expect(radios).toHaveLength(3);
    });

    it("should support required label indicator", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          required
          options={[
            { id: "opt1", name: "group", value: "1", label: "Option 1" },
          ]}
        />,
      );

      expect(screen.getByText(/Select an option/)).toBeInTheDocument();
    });

    it("should support disabled options", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          options={[
            { id: "opt1", name: "group", value: "1", label: "Option 1" },
            {
              id: "opt2",
              name: "group",
              value: "2",
              label: "Option 2",
              disabled: true,
            },
          ]}
        />,
      );

      const radios = screen.getAllByRole("radio") as HTMLInputElement[];
      expect(radios[0].disabled).toBe(false);
      expect(radios[1].disabled).toBe(true);
    });

    it("should display help message", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          helpMessage="Choose one of the available options"
          options={[
            { id: "opt1", name: "group", value: "1", label: "Option 1" },
          ]}
        />,
      );

      expect(
        screen.getByText("Choose one of the available options"),
      ).toBeInTheDocument();
    });

    it("should display error message", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          errorMessage="This field is required"
          options={[
            { id: "opt1", name: "group", value: "1", label: "Option 1" },
          ]}
        />,
      );

      expect(screen.getByText("This field is required")).toBeInTheDocument();
    });

    it("should support horizontal orientation", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          options={[
            { id: "opt1", name: "group", value: "1", label: "Option 1" },
            { id: "opt2", name: "group", value: "2", label: "Option 2" },
          ]}
        />,
      );

      const group = document.querySelector(".af-radio__group");
      expect(group).toHaveClass("af-radio__group--horizontal");
    });

    it("should support custom container className", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          containerClassName="custom-container"
          options={[
            { id: "opt1", name: "group", value: "1", label: "Option 1" },
          ]}
        />,
      );

      const container = screen.getByRole("group").closest(".custom-container");
      expect(container).toBeInTheDocument();
    });

    it("should have no accessibility violations", async () => {
      const { container } = render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          options={[
            { id: "opt1", name: "group", value: "1", label: "Option 1" },
            { id: "opt2", name: "group", value: "2", label: "Option 2" },
          ]}
        />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should have no accessibility violations with required", async () => {
      const { container } = render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          required
          options={[
            { id: "opt1", name: "group", value: "1", label: "Option 1" },
          ]}
        />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should have no accessibility violations with error message", async () => {
      const { container } = render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          errorMessage="This field is required"
          options={[
            { id: "opt1", name: "group", value: "1", label: "Option 1" },
          ]}
        />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe("card variant", () => {
    it("should render card options", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select a card"
          variant="card"
          onAdd={() => {}}
          options={[
            {
              id: "card1",
              name: "group",
              value: "1",
              label: "Card 1",
              icon: <div data-testid="icon1">Icon 1</div>,
            },
            {
              id: "card2",
              name: "group",
              value: "2",
              label: "Card 2",
              icon: <div data-testid="icon2">Icon 2</div>,
            },
          ]}
        />,
      );

      expect(screen.getByText("Select a card")).toBeInTheDocument();
      expect(screen.getByText("Card 1")).toBeInTheDocument();
      expect(screen.getByText("Card 2")).toBeInTheDocument();
      expect(screen.getByTestId("icon1")).toBeInTheDocument();
      expect(screen.getByTestId("icon2")).toBeInTheDocument();
    });

    it("should support horizontal orientation", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select a card"
          variant="card"
          orientation="horizontal"
          onAdd={() => {}}
          options={[
            {
              id: "card1",
              name: "group",
              value: "1",
              label: "Card 1",
              icon: <div data-testid="icon1">Icon 1</div>,
            },
          ]}
        />,
      );

      const group = document.querySelector(".af-radio__group");
      expect(group).toHaveClass("af-radio__group--horizontal");
    });

    it("should support vertical orientation", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select a card"
          variant="card"
          orientation="vertical"
          onAdd={() => {}}
          options={[
            {
              id: "card1",
              name: "group",
              value: "1",
              label: "Card 1",
              icon: <div data-testid="icon1">Icon 1</div>,
            },
          ]}
        />,
      );

      const group = document.querySelector(".af-radio__group");
      expect(group).toHaveClass("af-radio__group--vertical");
    });

    it("should render add button when showAddButton is true", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select a card"
          variant="card"
          showAddButton
          onAdd={() => {}}
          options={[
            {
              id: "card1",
              name: "group",
              value: "1",
              label: "Card 1",
              icon: <div data-testid="icon1">Icon 1</div>,
            },
          ]}
        />,
      );

      const addButton = screen.getByRole("button", { name: /Ajouter/i });
      expect(addButton).toBeInTheDocument();
    });

    it("should not render add button when showAddButton is false", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select a card"
          variant="card"
          onAdd={() => {}}
          options={[
            {
              id: "card1",
              name: "group",
              value: "1",
              label: "Card 1",
              icon: <div data-testid="icon1">Icon 1</div>,
            },
          ]}
        />,
      );

      const addButton = screen.queryByRole("button", { name: /Ajouter/i });
      expect(addButton).not.toBeInTheDocument();
    });

    it("should call onAdd callback when add button is clicked", async () => {
      const user = userEvent.setup();
      const onAdd = vi.fn();

      render(
        <RadioInput
          id="test-radio"
          label="Select a card"
          variant="card"
          showAddButton
          onAdd={onAdd}
          options={[
            {
              id: "card1",
              name: "group",
              value: "1",
              label: "Card 1",
              icon: <div data-testid="icon1">Icon 1</div>,
            },
          ]}
        />,
      );

      const addButton = screen.getByRole("button", { name: /Ajouter/i });
      await user.click(addButton);

      expect(onAdd).toHaveBeenCalledTimes(1);
    });

    it("should support action buttons in cards", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select a card"
          variant="card"
          onAdd={() => {}}
          options={[
            {
              id: "card1",
              name: "group",
              value: "1",
              label: "Card 1",
              icon: <div data-testid="icon1">Icon 1</div>,
              action: <button type="button">Edit</button>,
            },
          ]}
        />,
      );

      const editButton = screen.getByRole("button", { name: "Edit" });
      expect(editButton).toBeInTheDocument();
    });

    it("should have no accessibility violations", async () => {
      const { container } = render(
        <RadioInput
          id="test-radio"
          label="Select a card"
          variant="card"
          onAdd={() => {}}
          options={[
            {
              id: "card1",
              name: "group",
              value: "1",
              label: "Card 1",
              icon: <div data-testid="icon1">Icon 1</div>,
            },
          ]}
        />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should have no accessibility violations with add button", async () => {
      const { container } = render(
        <RadioInput
          id="test-radio"
          label="Select a card"
          variant="card"
          showAddButton
          onAdd={() => {}}
          options={[
            {
              id: "card1",
              name: "group",
              value: "1",
              label: "Card 1",
              icon: <div data-testid="icon1">Icon 1</div>,
            },
          ]}
        />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should have no accessibility violations with vertical orientation", async () => {
      const { container } = render(
        <RadioInput
          id="test-radio"
          label="Select a card"
          variant="card"
          orientation="vertical"
          onAdd={() => {}}
          options={[
            {
              id: "card1",
              name: "group",
              value: "1",
              label: "Card 1",
              icon: <div data-testid="icon1">Icon 1</div>,
            },
          ]}
        />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe("shared behavior", () => {
    it("should render with proper label and fieldset structure", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          options={[
            { id: "opt1", name: "group", value: "1", label: "Option 1" },
          ]}
        />,
      );

      expect(screen.getByText("Select an option")).toBeInTheDocument();
      const fieldset = document.querySelector("fieldset");
      expect(fieldset).toBeInTheDocument();
    });

    it("should render content right when provided", () => {
      render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          contentRight={<span>Right content</span>}
          options={[
            { id: "opt1", name: "group", value: "1", label: "Option 1" },
          ]}
        />,
      );

      expect(screen.getByText("Right content")).toBeInTheDocument();
    });

    it("should handle multiple options correctly", () => {
      const options = Array.from({ length: 5 }, (_, i) => ({
        id: `opt${i + 1}`,
        name: "group",
        value: String(i + 1),
        label: `Option ${i + 1}`,
      }));

      render(
        <RadioInput
          id="test-radio"
          label="Select an option"
          options={options}
        />,
      );

      const radios = screen.getAllByRole("radio");
      expect(radios).toHaveLength(5);
    });
  });
});
