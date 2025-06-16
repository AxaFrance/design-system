import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { CardCheckboxItem } from "../CardCheckboxItem";

const CheckboxComponentMock = vi.fn((props) => (
  <input type="checkbox" {...props} />
));
const IconComponentMock = vi.fn();

vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual,
    useId: vi.fn().mockReturnValue("mock-generated-id"),
  };
});

describe("CardCheckboxItem", () => {
  it("renders the label and description", () => {
    render(
      <CardCheckboxItem
        CheckboxComponent={CheckboxComponentMock}
        IconComponent={IconComponentMock}
        id="test-checkbox"
        label="Test Label"
        description="Test Description"
        subtitle="Test Subtitle"
        icon="test-icon.png"
        errorId="error-id"
        hasError={false}
        size="M"
      />,
    );

    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(IconComponentMock).toHaveBeenCalledWith(
      {
        size: "M",
        src: "test-icon.png",
      },
      undefined,
    );
    expect(CheckboxComponentMock).toHaveBeenCalledWith(
      {
        id: "test-checkbox",
        errorId: "error-id",
        hasError: false,
      },
      undefined,
    );
  });

  it("generates an id when no one is given", () => {
    render(
      <CardCheckboxItem
        CheckboxComponent={CheckboxComponentMock}
        IconComponent={IconComponentMock}
        label="Test Label"
        errorId="error-id"
        hasError={false}
        size="M"
      />,
    );

    expect(CheckboxComponentMock).toHaveBeenCalledWith(
      expect.objectContaining({ id: "mock-generated-id" }),
      undefined,
    );
  });
});
