import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { TimelineVertical } from "../TimelineVerticalCommon";
import { Tag } from "../../Tag/TagCommon";

describe("TimelineVertical", () => {
  it("should render correctly", () => {
    const description = "Sample TimelineVertical description";
    const tag = "Sample tag";
    const title = "Sample TimelineVertical title";

    render(
      <TimelineVertical tag={<Tag>{tag}</Tag>} title={title}>
        {description}
      </TimelineVertical>,
    );

    const timelineVerticalTag = screen.getByText(tag);
    const timelineVerticalTitle = screen.getByText(title);
    const timelineVerticalDescription = screen.getByText(description);
    expect(timelineVerticalTag).toBeInTheDocument();
    expect(timelineVerticalTitle).toBeInTheDocument();
    expect(timelineVerticalTitle).toHaveClass("af-timeline-vertical__title");
    expect(timelineVerticalDescription).toBeInTheDocument();
    expect(timelineVerticalDescription).toHaveClass(
      "af-timeline-vertical__description",
    );
    expect(timelineVerticalDescription.parentElement).toHaveClass(
      "af-timeline-vertical",
    );
  });

  it("should have custom class name", () => {
    const description = "Sample TimelineVertical description";
    const customClassName = "custom-class";

    render(
      <TimelineVertical
        tag={<Tag> Sample tag</Tag>}
        title="Sample TimelineVertical title"
        className={customClassName}
      >
        {description}
      </TimelineVertical>,
    );

    const timelineVerticalDescription = screen.getByText(description);
    expect(timelineVerticalDescription).toBeInTheDocument();
    expect(timelineVerticalDescription.parentElement).toHaveClass(
      customClassName,
    );
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation", async () => {
      const { container } = render(
        <TimelineVertical tag={<Tag>tag</Tag>} title="title" />,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
