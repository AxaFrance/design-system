import { render, screen } from "@testing-library/react";
import { AccordionTagDateContainer } from "../AccordionTagDateContainerCommon";

describe("AccordionTagDateContainer", () => {
  it("renders correctly", () => {
    const dateLabel = "01/01/2021";
    const dateTime = "2021-01-01";
    const tagLabel = "tag";

    render(
      <AccordionTagDateContainer
        tagLabel={tagLabel}
        dateLabel={dateLabel}
        dateProps={{ dateTime }}
      />,
    );

    expect(screen.getByText(tagLabel).parentElement).toHaveClass(
      "af-tag af-tag--warning",
    );
    expect(screen.getByText(dateLabel)).toHaveProperty("dateTime", dateTime);
  });

  it("should pass tagProps to Tag", () => {
    const tag = "tag";
    const tagProps: React.ComponentProps<
      typeof AccordionTagDateContainer
    >["tagProps"] = { variant: "success" };

    render(<AccordionTagDateContainer tagLabel={tag} tagProps={tagProps} />);

    expect(screen.getByText(tag).parentElement).toHaveClass(
      "af-tag af-tag--success",
    );
  });

  it("should return null if no tag or date", () => {
    const { container } = render(<AccordionTagDateContainer />);
    expect(container).toBeEmptyDOMElement();
  });
});
