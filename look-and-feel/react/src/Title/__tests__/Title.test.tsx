import { render, screen } from "@testing-library/react";
import { Title } from "../index";
import { TitleSize } from "../constants";

describe("Title", () => {
  it("should render correctly", () => {
    render(
      <Title
        firstSubtitle="firstSubtitle"
        secondSubtitle="secondSubtitle"
        icon="icon"
      >
        Title
      </Title>,
    );

    expect(
      screen.getByRole("heading", { name: "Title", level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByText("firstSubtitle")).toBeInTheDocument();
    expect(screen.getByText("secondSubtitle")).toBeInTheDocument();
    expect(screen.getByText("icon")).toBeInTheDocument();
  });

  it("should have custom class", () => {
    render(
      <Title firstSubtitle="firstSubtitle" className="custom-class">
        Title
      </Title>,
    );

    expect(screen.getByText("Title").parentElement).toHaveClass("custom-class");
  });

  it("should have custom class with modifier", () => {
    render(
      <Title
        firstSubtitle="firstSubtitle"
        className="custom-class"
        classModifier="modifier"
      >
        Title
      </Title>,
    );

    expect(screen.getByText("Title").parentElement).toHaveClass(
      "custom-class custom-class--modifier",
    );
  });

  it('should not display icon and second subtitle when size is "L"', () => {
    render(
      <Title
        firstSubtitle="firstSubtitle"
        secondSubtitle="secondSubtitle"
        icon="icon"
        size={TitleSize.L}
      >
        Title
      </Title>,
    );

    expect(
      screen.getByRole("heading", { name: "Title", level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByText("firstSubtitle")).toBeInTheDocument();
    expect(screen.queryByText("secondSubtitle")).not.toBeInTheDocument();
    expect(screen.queryByText("icon")).not.toBeInTheDocument();
  });
});
