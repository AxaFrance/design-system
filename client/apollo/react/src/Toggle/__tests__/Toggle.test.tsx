import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { Toggle } from "../ToggleCommon";

describe("Toggle component", () => {
  const handleChangeMock = vi.fn();

  beforeEach(() => {
    handleChangeMock.mockClear();
  });

  it("should call handleChange when clicked", async () => {
    render(
      <Toggle
        handleChange={handleChangeMock}
        selected={false}
        ariaLabel="toggle"
      />,
    );
    const toggle = screen.getByLabelText<HTMLInputElement>("toggle");

    await userEvent.click(toggle);

    expect(handleChangeMock).toHaveBeenCalledExactlyOnceWith(
      expect.any(Function),
    );
  });

  it("should render unselected", async () => {
    render(<Toggle handleChange={handleChangeMock} selected={false} />);
    const toggle = screen.getByRole<HTMLInputElement>("checkbox");

    expect(toggle).not.toBeChecked();
    expect(toggle).not.toBeDisabled();
  });

  it("should render selected", async () => {
    render(<Toggle handleChange={handleChangeMock} selected />);
    const toggle = screen.getByRole<HTMLInputElement>("checkbox");

    expect(toggle).toBeChecked();
    expect(toggle).not.toBeDisabled();
  });

  it("should render unselected and disabled", async () => {
    render(
      <Toggle handleChange={handleChangeMock} selected={false} disabled />,
    );
    const toggle = screen.getByRole<HTMLInputElement>("checkbox");

    expect(toggle).not.toBeChecked();
    expect(toggle).toBeDisabled();
  });

  it("should render selected and disabled", async () => {
    render(<Toggle handleChange={handleChangeMock} selected disabled />);
    const toggle = screen.getByRole<HTMLInputElement>("checkbox");

    expect(toggle).toBeChecked();
    expect(toggle).toBeDisabled();
  });
});
