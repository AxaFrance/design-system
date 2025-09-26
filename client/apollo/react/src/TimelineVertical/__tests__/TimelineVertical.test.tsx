import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { TimelineVerticalCommon } from "../TimelineVerticalCommon";
import { Tag } from "../../Tag/TagCommon";

describe("TimelineVerticalCommon", () => {
  it("should render correctly", () => {
    const description = "Sample TimelineVerticalCommon description";
    const tag = "Sample tag";
    const title = "Sample TimelineVerticalCommon title";

    render(
      <TimelineVerticalCommon tag={<Tag>{tag}</Tag>} title={title}>
        {description}
      </TimelineVerticalCommon>,
    );

    const TimelineVerticalCommonTag = screen.getByText(tag);
    const TimelineVerticalCommonTitle = screen.getByText(title);
    const TimelineVerticalCommonDescription = screen.getByText(description);
    expect(TimelineVerticalCommonTag).toBeInTheDocument();
    expect(TimelineVerticalCommonTitle).toBeInTheDocument();
    expect(TimelineVerticalCommonTitle).toHaveClass(
      "af-timeline-vertical__title",
    );
    expect(TimelineVerticalCommonDescription).toBeInTheDocument();
    expect(TimelineVerticalCommonDescription).toHaveClass(
      "af-timeline-vertical__description",
    );
    expect(TimelineVerticalCommonDescription.parentElement).toHaveClass(
      "af-timeline-vertical",
    );
  });

  it("should have custom class name", () => {
    const description = "Sample TimelineVerticalCommon description";
    const customClassName = "custom-class";

    render(
      <TimelineVerticalCommon
        tag={<Tag> Sample tag</Tag>}
        title="Sample TimelineVerticalCommon title"
        className={customClassName}
      >
        {description}
      </TimelineVerticalCommon>,
    );

    const TimelineVerticalCommonDescription = screen.getByText(description);
    expect(TimelineVerticalCommonDescription).toBeInTheDocument();
    expect(TimelineVerticalCommonDescription.parentElement).toHaveClass(
      customClassName,
    );
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation", async () => {
      const { container } = render(
        <TimelineVerticalCommon tag={<Tag>tag</Tag>} title="title" />,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
