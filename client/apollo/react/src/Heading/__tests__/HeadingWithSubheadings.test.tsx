import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { HeadingWithSubheadings } from "../HeadingWithSubheadings";

describe("HeadingWithSubtitles", () => {
  it.each([undefined, "h1"] as const)(
    "should render title in h1 and the two subtitles when titleComponent is %s",
    (titleComponent) => {
      const title = "Sample Title";
      const firstSubtitle = "First Subtitle";
      const secondSubtitle = "Second Subtitle";

      render(
        <HeadingWithSubheadings
          title={title}
          firstSubtitle={firstSubtitle}
          secondSubtitle={secondSubtitle}
          titleComponent={titleComponent}
        />,
      );

      const heading = screen.getByRole("heading", { name: title });
      expect(heading).toBeInTheDocument();
      expect(heading.tagName).toStrictEqual("H1");
      expect(screen.getByText(firstSubtitle)).toBeInTheDocument();
      expect(screen.getByText(secondSubtitle)).toBeInTheDocument();
    },
  );

  it.each(["h2", "h3"] as const)(
    "should render title in %s and the subtitle",
    (titleComponent) => {
      const title = "Sample Title";
      const firstSubtitle = "First Subtitle";

      render(
        <HeadingWithSubheadings
          title={title}
          firstSubtitle={firstSubtitle}
          titleComponent={titleComponent}
        />,
      );

      const heading = screen.getByRole("heading", { name: title });
      expect(heading).toBeInTheDocument();
      expect(heading.tagName).toStrictEqual(titleComponent.toUpperCase());
      expect(screen.getByText(firstSubtitle)).toBeInTheDocument();
    },
  );

  it.each(["h2", "h3"] as const)(
    "should not render second subtitle when titleComponent is %s",
    (titleComponent) => {
      const title = "Sample Title";
      const firstSubtitle = "First Subtitle";
      const secondSubtitle = "Second Subtitle";

      render(
        <HeadingWithSubheadings
          title={title}
          firstSubtitle={firstSubtitle}
          secondSubtitle={secondSubtitle}
          titleComponent={titleComponent}
        />,
      );

      expect(screen.getByText(firstSubtitle)).toBeInTheDocument();
      expect(screen.queryByText(secondSubtitle)).not.toBeInTheDocument();
    },
  );

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <HeadingWithSubheadings
        title="Title"
        firstSubtitle="firstSubtitle"
        secondSubtitle="secondSubtitle"
      />,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
