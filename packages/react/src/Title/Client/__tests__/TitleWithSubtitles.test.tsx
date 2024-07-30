import { render, screen } from "@testing-library/react";
import { TitleWithSubtitles } from "../TitleWithSubtitles";

describe("TitleWithSubtitles", () => {
  it("should render title and the two subtitles", () => {
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
});
