import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { TextArea } from "../TextAreaCommon";

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
        sideButtonLabel="button"
      />,
    );
    const textLabel = screen.getByText("Label");
    const textAreDescritpion = screen.getByText("Description");
    const textArea = screen.getByText("Lorem Ipsum");
    expect(textLabel).toBeInTheDocument();
    expect(textAreDescritpion).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
  });

  it("shouldn't have an accessibility violation <TextArea />", async () => {
    const { container } = render(
      <TextArea label="Label" sideButtonLabel="button" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
