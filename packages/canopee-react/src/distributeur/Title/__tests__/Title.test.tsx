import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Title } from "../Title";

describe("Title", () => {
  it("should render children", () => {
    render(<Title>A title</Title>);

    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).toBeInTheDocument();
  });

  it("should have default class", () => {
    render(<Title>A title</Title>);

    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).toHaveClass("af-title", { exact: true });
  });

  it("should have custom class", () => {
    render(<Title className="custom-class">A title</Title>);

    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).toHaveClass("custom-class", { exact: true });
  });

  it("should have custom class with modifier", () => {
    render(
      <Title className="custom-class" classModifier="modifier">
        A title
      </Title>,
    );

    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).toHaveClass("custom-class custom-class--modifier", { exact: true });
  });

  it("should not have classModifier attribute", () => {
    render(
      <Title className="custom-class" classModifier="modifier">
        A title
      </Title>,
    );

    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).not.toHaveAttribute("classModifier");
  });

  it("should have correct heading level", () => {
    render(<Title heading="h3">A title</Title>);

    expect(
      screen.getByRole("heading", { name: /A title/, level: 3 }),
    ).toBeInTheDocument();
  });

  it("shouldn't have an accessibility violation <Title/>", async () => {
    const { container } = render(<Title heading="h3">A title</Title>);

    expect(await axe(container)).toHaveNoViolations();
  });

  it("should be wrapped in a container", () => {
    render(<Title heading="h3">A title</Title>);

    const container = screen.getByRole("heading", {
      name: /A title/,
      level: 3,
    }).parentElement!;
    expect(container).toHaveClass("af-title--container");
  });

  it("renders contentLeft inside .content-left wrapper outside the heading", () => {
    render(
      <Title heading="h3" contentLeft={<p>Left content</p>}>
        A title
      </Title>,
    );

    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading.textContent).not.toContain("Left content");

    const wrapper = screen.getByText("Left content").closest(".content-left");
    expect(wrapper).not.toBeNull();
  });

  it("renders contentRight inside .content-right wrapper", () => {
    render(
      <Title heading="h3" contentRight={<p>Right content</p>}>
        A title
      </Title>,
    );

    const wrapper = screen.getByText("Right content").closest(".content-right");
    expect(wrapper).not.toBeNull();
  });

  it("renders a horizontal divider between left and right contents", () => {
    render(
      <Title
        heading="h3"
        contentLeft={<span>L</span>}
        contentRight={<span>R</span>}
      >
        A title
      </Title>,
    );

    const container = screen.getByRole("heading", { level: 3 }).parentElement!;
    const content = container.querySelector(".af-title--content")!;
    expect(content.querySelector("hr.af-divider")).not.toBeNull();
  });
});
