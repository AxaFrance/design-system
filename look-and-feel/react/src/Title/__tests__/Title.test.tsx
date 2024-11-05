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

    const heading = screen.getByRole("heading", {
      level: 1,
    });
    expect(heading).toHaveTextContent("Title");
    expect(heading).toHaveTextContent("firstSubtitle");
    expect(heading).toHaveTextContent("secondSubtitle");
    expect(heading).toHaveTextContent("icon");
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

    const heading = screen.getByRole("heading", {
      level: 2,
    });
    expect(heading).toHaveTextContent("Title");
    expect(heading).toHaveTextContent("firstSubtitle");
    expect(heading).not.toHaveTextContent("secondSubtitle");
    expect(heading).not.toHaveTextContent("icon");
  });

  it("should use the h3 heading tag when level equal 3", () => {
    render(<Title level={3}>Title H3</Title>);

    const heading = screen.getByRole("heading", {
      level: 3,
    });

    expect(heading).toHaveTextContent("Title H3");
  });
});
