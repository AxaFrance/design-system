import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { InputPhone } from "../InputPhoneApollo";

describe("<InputPhone />", () => {
  it("renders the InputPhone component with label and helper text", () => {
    render(
      <InputPhone label="Phone Number" helper="Enter your phone number" />,
    );
    expect(screen.getByText("Phone Number")).toBeInTheDocument();
    expect(screen.getByText("Enter your phone number")).toBeInTheDocument();
  });

  it("renders the InputPhone component with error message", () => {
    render(<InputPhone label="Phone Number" error="Invalid phone number" />);
    expect(screen.getByText("Invalid phone number")).toBeInTheDocument();
  });

  it("renders the InputPhone component with success message", () => {
    render(<InputPhone label="Phone Number" success="Phone number is valid" />);
    expect(screen.getByText("Phone number is valid")).toBeInTheDocument();
  });

  it("is accessible according to axe", async () => {
    const { container } = render(
      <InputPhone label="Phone Number" helper="Enter your phone number" />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders the InputPhone component with country code select", () => {
    render(<InputPhone label="Phone Number" showSelect defaultCountry="+33" />);
    expect(screen.getByLabelText("Select country code")).toBeInTheDocument();
  });

  it("renders the InputPhone component without country code select", () => {
    render(<InputPhone label="Phone Number" showSelect={false} />);
    expect(
      screen.queryByLabelText("Select country code"),
    ).not.toBeInTheDocument();
  });
});
