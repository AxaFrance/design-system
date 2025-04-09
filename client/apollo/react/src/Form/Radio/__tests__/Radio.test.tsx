import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Radio } from "../RadioCommon";

describe("Radio component", () => {
  it("should render correctly with default props", () => {
    render(<Radio label="Test Radio" ItemMessageComponent={() => <div />} />);
    const radio = screen.getByRole("radio", { name: /test radio/i });
    expect(radio).toBeInTheDocument();
  });

  it("should render with error message", () => {
    render(
      <Radio
        label="Label test"
        errorMessage="error message"
        ItemMessageComponent={() => <div />}
      />,
    );
    const errorMessage = screen.getByText("error message");
    expect(errorMessage).toBeInTheDocument();
  });
});
