import { render, screen } from "@testing-library/react";
import { Title } from "..";
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
      "af-title custom-class af-title--modifier af-title--xl",
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
      screen.getByRole("heading", { name: "Title", level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText("firstSubtitle")).toBeInTheDocument();
    expect(screen.queryByText("secondSubtitle")).not.toBeInTheDocument();
    expect(screen.queryByText("icon")).not.toBeInTheDocument();
  });

  it("should use the h3 heading tag when level equal 3", () => {
    render(<Title level={3}>Title H3</Title>);

    expect(
      screen.getByRole("heading", { name: "Title H3", level: 3 }),
    ).toBeInTheDocument();
  });
});
