import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "jest-axe";
import { AccordionTagDateContainer } from "../AccordionTagDateContainerApollo";

describe("AccordionTagDateContainer", () => {
  it("should renders", () => {
    render(
      <AccordionTagDateContainer
        tagLabel="tag label"
        dateLabel="01/01/2022"
        dateProps={{ dateTime: "2022-01-01" }}
      />,
    );

    expect(screen.getByText("tag label").parentElement).toHaveClass(
      "af-tag af-tag--warning",
    );
    expect(screen.getByText("01/01/2022")).toHaveProperty(
      "dateTime",
      "2022-01-01",
    );
  });

  it("should pass tagProps to Tag component", () => {
    render(
      <AccordionTagDateContainer
        tagLabel="tag"
        tagProps={{ variant: "warning" }}
      />,
    );

    expect(screen.getByText("tag").parentElement).toHaveClass(
      "af-tag af-tag--warning",
    );
  });

  it("should render nothing if no tag or date", () => {
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
