import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import { Title } from "../Title";

describe("Title", () => {
  it("should render children", () => {
    // Act
    render(<Title>A title</Title>);

    // Assert
    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).toBeInTheDocument();
  });

  it("should have default class", () => {
    // Act
    render(<Title>A title</Title>);

    // Assert
    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).toHaveClass("af-title", {
      exact: true,
    });
  });

  it("should have custom class", () => {
    // Act
    render(<Title className="custom-class">A title</Title>);

    // Assert
    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).toHaveClass("custom-class", {
      exact: true,
    });
  });

  it("should have custom class with modifier", () => {
    // Act
    render(
      <Title className="custom-class" classModifier="modifier">
        A title
      </Title>,
    );

    // Assert
    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).toHaveClass("custom-class custom-class--modifier", {
      exact: true,
    });
  });

  it("should not have classModifier attribute", () => {
    // Act
    render(
      <Title className="custom-class" classModifier="modifier">
        A title
      </Title>,
    );

    // Assert
    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).not.toHaveAttribute("classModifier");
  });

  it("should have correct heading level", () => {
    // Act
    render(<Title heading="h3">A title</Title>);

    // Assert
    expect(
      screen.getByRole("heading", { name: /A title/, level: 3 }),
    ).toBeInTheDocument();
  });

  it("shouldn't have an accessibility violation <Title/>", async () => {
    // Act
    const { container } = render(<Title heading="h3">A title</Title>);

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });

  it("should be wrapped in a container", async () => {
    // Act
    render(<Title heading="h3">A title</Title>);

    // Assert
    const container = screen.getByRole("heading", {
      name: /A title/,
      level: 3,
    }).parentElement as HTMLElement;
    expect(container.getAttribute("class")).toEqual("af-title--container");
  });

  it("content left should be child of heading", () => {
    // Act
    render(
      <Title heading="h3" contentLeft={<p>Some content</p>}>
        A title
      </Title>,
    );

    // Assert
    const heading = screen.getByRole("heading", {
      level: 3,
    });

    expect(within(heading).getByText("Some content")).toBeInTheDocument();
  });

  it("content right should be child of content-right div", () => {
    // Act
    render(
      <Title heading="h3" contentRight={<p>Some content</p>}>
        A title
      </Title>,
    );

    // Assert
    const container = screen.getByRole("heading", {
      level: 3,
    }).parentElement!;

    expect(
      within(container.childNodes[1] as HTMLElement).getByText("Some content"),
    ).toBeInTheDocument();
  });
});
