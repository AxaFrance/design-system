import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { ItemLabel } from "../ItemLabelCommon";
import { Button } from "../../../Button/ButtonApollo";

const handleClickSideButton = vi.fn();
const handleClickButton = vi.fn();

const defaultProps = {
  label: "Label Text",
  description: "Description Text",
  buttonLabel: "ButtonLabel",
  required: false,
  inputId: "input-id",
  idLabel: "label-id",
  idDescription: "description-id",
  sideButtonLabel: "Side Button",
  onSideButtonClick: handleClickSideButton,
  onButtonClick: handleClickButton,
  ButtonComponent: Button,
};

describe("ItemLabelCommon", () => {
  it("renders ItemLabel", async () => {
    render(<ItemLabel {...defaultProps} />);

    const labelElement = screen.getByText(/Label Text/i);
    const descriptionElement = screen.getByText(/Description Text/i);
    const sideButton = screen.getByRole("button", { name: /Side Button/i });
    const buttonLabel = screen.getByRole("button", { name: /ButtonLabel/i });

    vi.clearAllMocks();

    expect(labelElement).toHaveAttribute("id", "label-id");
    expect(labelElement).toHaveAttribute("for", "input-id");
    expect(descriptionElement).toHaveAttribute("id");
    expect(sideButton).toBeInTheDocument();

    await userEvent.click(sideButton);
    expect(handleClickSideButton).toHaveBeenCalledTimes(1);

    await userEvent.click(buttonLabel);
    expect(handleClickButton).toHaveBeenCalledTimes(1);
  });

  it("renders the required indicator", () => {
    render(<ItemLabel {...defaultProps} required />);
    const requiredElement = screen.getByText(/\*/i);
    expect(requiredElement).toBeInTheDocument();
  });

  it("renders without content part", () => {
    render(
      <ItemLabel
        {...defaultProps}
        description={undefined}
        sideButtonLabel={undefined}
      />,
    );
    const descriptionElement = screen.queryByText(/Description Text/i);
    const sideButton = screen.queryByRole("button", { name: /Side Button/i });

    expect(descriptionElement).not.toBeInTheDocument();
    expect(sideButton).not.toBeInTheDocument();
  });
});
