import { render, screen } from "@testing-library/react";
import { TextArea } from "../TextArea";

describe("<TextArea />", () => {
  test("should render component with default props", () => {
    render(
      <TextArea
        label="Label"
        value="Lorem Ipsum"
        description="Description"
        helper="Helper"
        buttonLabel="Button label"
        error="Error message"
      />,
    );

    screen.getByText("Label");
    screen.getByText("Lorem Ipsum");
    screen.getByText("Description");
    screen.getByText("Helper");
    screen.getByRole("button", { name: "Button label" });
    screen.getByText("Error message");
  });

  test("should render asterisk if required", () => {
    render(<TextArea label="Required label" required />);

    screen.getByText("Required label");
    screen.getByText("*");
  });
});
