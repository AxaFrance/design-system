import { render, screen } from "@testing-library/react";
import { AccordionTagDateContainer } from "../AccordionTagDateContainer";

describe("AccordionTagDateContainer", () => {
  it("renders correctly", () => {
    const date = "2021-01-01";
    const tag = "tag";

    render(<AccordionTagDateContainer tag={tag} date={date} />);

    expect(screen.getByText(tag).parentElement).toHaveClass(
      "af-tag af-tag--warning",
    );
    expect(screen.getByText(date)).toBeInTheDocument();
  });

  it("should pass tagProps to Tag", () => {
    const tag = "tag";
    const tagProps = { classModifier: "success" };

    render(<AccordionTagDateContainer tag={tag} tagProps={tagProps} />);

    expect(screen.getByText(tag).parentElement).toHaveClass(
      "af-tag af-tag--success",
    );
  });

  it("should return null if no tag or date", () => {
    const { container } = render(<AccordionTagDateContainer />);
    expect(container).toBeEmptyDOMElement();
  });
});
