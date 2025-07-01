import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { InputPhoneCommon } from "../InputPhoneCommon";
import { ItemLabel } from "../../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";
import { InputTextAtom } from "../../InputTextAtom/InputTextAtomApollo";
import { Icon } from "../../../Icon/IconApollo";

describe("<InputPhone />", () => {
  it("renders the InputPhone component with label and helper text", () => {
    render(
      <InputPhoneCommon
        label="Phone Number"
        helper="Enter your phone number"
        ItemLabelComponent={ItemLabel}
        ItemMessageComponent={ItemMessage}
        InputTextComponent={InputTextAtom}
        IconComponent={Icon}
      />,
    );
    expect(screen.getByText("Phone Number")).toBeInTheDocument();
    expect(screen.getByText("Enter your phone number")).toBeInTheDocument();
  });

  it("renders the InputPhone component with error message", () => {
    render(
      <InputPhoneCommon
        label="Phone Number"
        error="Invalid phone number"
        ItemLabelComponent={ItemLabel}
        ItemMessageComponent={ItemMessage}
        InputTextComponent={InputTextAtom}
        IconComponent={Icon}
      />,
    );
    expect(screen.getByText("Invalid phone number")).toBeInTheDocument();
  });

  it("renders the InputPhone component with success message", () => {
    render(
      <InputPhoneCommon
        label="Phone Number"
        success="Phone number is valid"
        ItemLabelComponent={ItemLabel}
        ItemMessageComponent={ItemMessage}
        InputTextComponent={InputTextAtom}
        IconComponent={Icon}
      />,
    );
    expect(screen.getByText("Phone number is valid")).toBeInTheDocument();
  });

  it("is accessible according to axe", async () => {
    const { container } = render(
      <InputPhoneCommon
        label="Phone Number"
        helper="Enter your phone number"
        ItemLabelComponent={ItemLabel}
        ItemMessageComponent={ItemMessage}
        InputTextComponent={InputTextAtom}
        IconComponent={Icon}
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders the InputPhone component with country code select", () => {
    render(
      <InputPhoneCommon
        label="Phone Number"
        showSelect
        defaultCountry="+33"
        ItemLabelComponent={ItemLabel}
        ItemMessageComponent={ItemMessage}
        InputTextComponent={InputTextAtom}
        IconComponent={Icon}
      />,
    );
    expect(screen.getByLabelText("Select country code")).toBeInTheDocument();
  });

  it("renders the InputPhone component without country code select", () => {
    render(
      <InputPhoneCommon
        label="Phone Number"
        showSelect={false}
        ItemLabelComponent={ItemLabel}
        ItemMessageComponent={ItemMessage}
        InputTextComponent={InputTextAtom}
        IconComponent={Icon}
      />,
    );
    expect(
      screen.queryByLabelText("Select country code"),
    ).not.toBeInTheDocument();
  });
});
