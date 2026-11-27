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

    const timelineVerticalCommonTag = screen.getByText(tag);
    const timelineVerticalCommonTitle = screen.getByText(title);
    const timelineVerticalCommonDescription = screen.getByText(description);
    expect(timelineVerticalCommonTag).toBeInTheDocument();
    expect(timelineVerticalCommonTitle).toBeInTheDocument();
    expect(timelineVerticalCommonTitle).toHaveClass(
      "af-timeline-vertical__title",
    );
    expect(timelineVerticalCommonDescription).toBeInTheDocument();
    expect(timelineVerticalCommonDescription).toHaveClass(
      "af-timeline-vertical__description",
    );
    expect(timelineVerticalCommonDescription.parentElement).toHaveClass(
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

    const timelineVerticalCommonDescription = screen.getByText(description);
    expect(timelineVerticalCommonDescription).toBeInTheDocument();
    expect(timelineVerticalCommonDescription.parentElement).toHaveClass(
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

    it("should not render a main landmark for its description", async () => {
      const { container } = render(
        <>
          <TimelineVerticalCommon tag={<Tag>1</Tag>} title="Step 1">
            Description 1
          </TimelineVerticalCommon>
          <TimelineVerticalCommon tag={<Tag>2</Tag>} title="Step 2">
            Description 2
          </TimelineVerticalCommon>
        </>,
      );

      expect(screen.queryAllByRole("main")).toHaveLength(0);
      expect(screen.getByText("Description 1").tagName).toBe("DIV");
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
