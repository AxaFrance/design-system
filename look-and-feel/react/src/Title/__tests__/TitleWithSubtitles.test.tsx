import { render, screen } from "@testing-library/react";
import { TitleWithSubtitles } from "../TitleWithSubtitles";

describe("TitleWithSubtitles", () => {
  it("should render title in h1 and the two subtitles", () => {
    const title = "Sample Title";
    const firstSubtitle = "First Subtitle";
    const secondSubtitle = "Second Subtitle";

    render(
      <TitleWithSubtitles
        title={title}
        firstSubtitle={firstSubtitle}
        secondSubtitle={secondSubtitle}
      />,
    );

    screen.getByRole("heading", { name: title, level: 1 });
    expect(screen.getByText(firstSubtitle)).toBeInTheDocument();
    expect(screen.getByText(secondSubtitle)).toBeInTheDocument();
  });

  it("should render title in h3 and the subtitle", () => {
    const title = "Sample Title";
    const firstSubtitle = "First Subtitle";

    render(
      <TitleWithSubtitles
        title={title}
        firstSubtitle={firstSubtitle}
        level={3}
      />,
    );

    screen.getByRole("heading", { name: title, level: 3 });
    expect(screen.getByText(firstSubtitle)).toBeInTheDocument();
  });
});
