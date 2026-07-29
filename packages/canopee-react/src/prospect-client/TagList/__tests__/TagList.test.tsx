import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Tag } from "../../Tag/TagCommon";
import { TagListCommon } from "../TagListCommon";

const renderTagList = (count: number, hideThreshold?: number) =>
  render(
    <TagListCommon OverflowTag={Tag} hideThreshold={hideThreshold}>
      {Array.from({ length: count }, (_, i) => (
        <Tag key={i}>{`Tag ${i + 1}`}</Tag>
      ))}
    </TagListCommon>,
  );

describe("TagListCommon", () => {
  it("renders all tags when count is below hideThreshold", () => {
    renderTagList(2);

    expect(screen.getByText("Tag 1")).toBeInTheDocument();
    expect(screen.getByText("Tag 2")).toBeInTheDocument();
    expect(screen.queryByText(/^\+/)).not.toBeInTheDocument();
  });

  it("renders all tags when count equals hideThreshold", () => {
    renderTagList(2, 2);

    expect(screen.getByText("Tag 1")).toBeInTheDocument();
    expect(screen.getByText("Tag 2")).toBeInTheDocument();
    expect(screen.queryByText(/^\+/)).not.toBeInTheDocument();
  });

  it("shows only first 2 tags and overflow tag when count exceeds hideThreshold", () => {
    renderTagList(5);

    expect(screen.getByText("Tag 1")).toBeInTheDocument();
    expect(screen.getByText("Tag 2")).toBeInTheDocument();
    expect(screen.queryByText("Tag 3")).not.toBeInTheDocument();
    expect(screen.queryByText("Tag 4")).not.toBeInTheDocument();
    expect(screen.queryByText("Tag 5")).not.toBeInTheDocument();
    expect(screen.getByText("+3")).toBeInTheDocument();
  });

  it("respects a custom hideThreshold", () => {
    renderTagList(4, 3);

    expect(screen.getByText("Tag 1")).toBeInTheDocument();
    expect(screen.getByText("Tag 2")).toBeInTheDocument();
    expect(screen.getByText("Tag 3")).toBeInTheDocument();
    expect(screen.queryByText("Tag 4")).not.toBeInTheDocument();
    expect(screen.getByText("+1")).toBeInTheDocument();
  });

  it("applies the af-tag-list BEM class to the container", () => {
    const { container } = renderTagList(1);

    expect(container.firstChild).toHaveClass("af-tag-list");
  });

  it("merges custom className with af-tag-list", () => {
    const { container } = render(
      <TagListCommon OverflowTag={Tag} className="custom-class">
        <Tag>Tag 1</Tag>
      </TagListCommon>,
    );

    expect(container.firstChild).toHaveClass("af-tag-list");
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("should not have accessibility violations", async () => {
    const { container } = renderTagList(5);

    expect(await axe(container)).toHaveNoViolations();
  });
});
