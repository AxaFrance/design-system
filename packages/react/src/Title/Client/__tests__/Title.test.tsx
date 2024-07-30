import { render, screen } from "@testing-library/react";
import { Title } from "..";

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
});
