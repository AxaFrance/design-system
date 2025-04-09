import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { Radio } from "../RadioCommon";

describe("Radio component", () => {
  it("should render correctly with default props", () => {
    render(
      <Radio
        label="Test Radio"
        ItemMessageComponent={() => <div />}
        IconComponent={() => <div />}
        svgIconUncheckedSrc="unchecked.svg"
      />,
    );
    const radio = screen.getByRole("radio", { name: /test radio/i });
    expect(radio).toBeInTheDocument();
  });

  it("should render with error message", () => {
    render(
      <Radio
        label="Error test"
        errorMessage="Error message"
        ItemMessageComponent={() => <div />}
        IconComponent={() => <div />}
        svgIconUncheckedSrc="unchecked.svg"
      />,
    );
    const errorMessage = screen.getByText(/error message/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("should call onMouseEnterProps when mouse enters", async () => {
    const onMouseEnterProps = vi.fn();
    render(
      <Radio
        label="Test Radio"
        ItemMessageComponent={() => <div />}
        IconComponent={() => <div />}
        svgIconUncheckedSrc="unchecked.svg"
        onMouseEnterProps={onMouseEnterProps}
      />,
    );
    const radio = screen.getByRole("radio", { name: /test radio/i });
    await userEvent.hover(radio);
    expect(onMouseEnterProps).toHaveBeenCalled();
  });

  it("should call onMouseLeaveProps when mouse leaves", async () => {
    const onMouseLeaveProps = vi.fn();
    render(
      <Radio
        label="Test Radio"
        ItemMessageComponent={() => <div />}
        IconComponent={() => <div />}
        svgIconUncheckedSrc="unchecked.svg"
        onMouseLeaveProps={onMouseLeaveProps}
      />,
    );
    const radio = screen.getByRole("radio", { name: /test radio/i });
    await userEvent.unhover(radio);
    expect(onMouseLeaveProps).toHaveBeenCalled();
  });

  it("should render with custom unchecked icon", () => {
    render(
      <Radio
        label="Custom Icon"
        ItemMessageComponent={() => <div />}
        IconComponent={() => <div />}
        svgIconUncheckedSrc="custom-unchecked.svg"
      />,
    );
    const radio = screen.getByRole("radio", { name: /custom icon/i });
    expect(radio).toBeInTheDocument();
  });
});
