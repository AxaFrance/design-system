import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "jest-axe";
import { AccordionTagDateContainer } from "../AccordionTagDateContainer/AccordionTagDateContainerApollo";

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

describe("A11Y", () => {
  it("shouldn't have an accessibility violation <AccordionTagDateContainer />", async () => {
    const { container } = render(
      <AccordionTagDateContainer tagLabel="tag" dateLabel="01/01/2021" />,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
