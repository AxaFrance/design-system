import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { CheckboxText as CheckboxTextApollo } from "../CheckboxTextApollo";
import { CheckboxText as CheckboxTextLF } from "../CheckboxTextLF";
import { ItemMessage } from "../../../ItemMessage/ItemMessage";
import { Checkbox } from "../../Checkbox/CheckboxCommon";
import {
  CheckboxTextCommon,
  type CheckboxTextProps,
} from "../CheckboxTextCommon";

describe("CheckboxText Component", () => {
  const CheckboxText = (props: CheckboxTextProps) => (
    <CheckboxTextCommon
      {...props}
      ItemMessageComponent={ItemMessage}
      CheckboxComponent={Checkbox}
    />
  );

  it("should render the label correctly", () => {
    render(<CheckboxText label="I accept the terms" name="test" value="1" />);

    expect(
      screen.getByRole("checkbox", { name: "I accept the terms" }),
    ).toBeInTheDocument();
  });

  it("should handle checked state", () => {
    render(
      <CheckboxText
        label="Option"
        name="option"
        value="1"
        checked
        onChange={vi.fn()}
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Option" });
    expect(checkbox).toBeChecked();
  });

  it("should display the error message if provided", () => {
    render(
      <CheckboxText
        label="Option"
        name="option"
        value="1"
        message="Required error"
        messageType="error"
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Option" });
    expect(checkbox).toHaveAccessibleErrorMessage("Required error");
    expect(checkbox).toBeInvalid();
  });

  it("should call onChange when clicked", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(
      <CheckboxText
        label="Option"
        name="option"
        value="1"
        onChange={handleChange}
      />,
    );
    const checkbox = screen.getByRole("checkbox", { name: "Option" });
    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});

describe.each([
  ["Apollo", CheckboxTextApollo],
  ["LF", CheckboxTextLF],
])("CheckboxText %s message", (_, Component) => {
  it.each(["error", "warning", "success"] as const)(
    "should describe the checkbox with its %s message",
    (messageType) => {
      render(
        <Component
          label="J'accepte"
          message="Message"
          messageType={messageType}
        />,
      );

      expect(
        screen.getByRole("checkbox", { name: "J'accepte" }),
      ).toHaveAccessibleDescription("Message");
    },
  );

  it("should keep an aria-describedby passed to the checkbox", () => {
    render(
      <>
        <span id="details">Détails</span>
        <Component
          label="J'accepte"
          aria-describedby="details"
          message="Message"
        />
      </>,
    );

    expect(
      screen.getByRole("checkbox", { name: "J'accepte" }),
    ).toHaveAccessibleDescription("Détails Message");
  });
});
