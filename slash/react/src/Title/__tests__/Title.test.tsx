import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Title } from "../Title";

describe("Title", () => {
  it("renders children with default h2 heading", () => {
    render(<Title>A title</Title>);
    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).toBeInTheDocument();
  });

  it("applies default class", () => {
    render(<Title>A title</Title>);
    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).toHaveClass("af-title", { exact: true });
  });

  it("applies custom class", () => {
    render(<Title className="custom-class">A title</Title>);
    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).toHaveClass("custom-class", { exact: true });
  });

  it("applies custom class with modifier", () => {
    render(
      <Title className="custom-class" classModifier="modifier">
        A title
      </Title>,
    );
    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).toHaveClass("custom-class custom-class--modifier", { exact: true });
  });

  it("does not expose classModifier attribute", () => {
    render(
      <Title className="custom-class" classModifier="modifier">
        A title
      </Title>,
    );
    expect(
      screen.getByRole("heading", { name: /A title/, level: 2 }),
    ).not.toHaveAttribute("classModifier");
  });

  it("uses configured heading level", () => {
    render(<Title heading="h3">A title</Title>);
    expect(
      screen.getByRole("heading", { name: /A title/, level: 3 }),
    ).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Title heading="h3">A title</Title>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("is wrapped in container", () => {
    render(<Title heading="h3">A title</Title>);
    const container = screen.getByRole("heading", {
      name: /A title/,
      level: 3,
    }).parentElement!;
    expect(container).toHaveClass("af-title--container");
  });

  it("renders contentLeft inside .content-left wrapper", () => {
    render(
      <Title heading="h3" contentLeft={<p>Left content</p>}>
        A title
      </Title>,
    );
    const el = screen.getByText("Left content");
    expect(el.closest(".content-left")).not.toBeNull();
  });

  it("renders contentRight inside .content-right wrapper", () => {
    render(
      <Title heading="h3" contentRight={<p>Right content</p>}>
        A title
      </Title>,
    );
    const el = screen.getByText("Right content");
    expect(el.closest(".content-right")).not.toBeNull();
  });

  it("renders horizontal divider between optional contents", () => {
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
    const contentWrapper = container.querySelector(".af-title--content")!;
    expect(contentWrapper.children[1]).toBeTruthy();
  });
});
