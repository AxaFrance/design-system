import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { HeaderTitle } from "./HeaderTitle";
import { Tag } from "../../../Tag/Tag";

describe("HeaderTitle", () => {
  test("should render title and subtitle", async () => {
    const { container } = render(
      <HeaderTitle title="Main Title" subtitle="Subtitle" />,
    );
    expect(await axe(container)).toHaveNoViolations();
    expect(
      screen.getByRole("heading", { name: /main title/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Subtitle")).toBeInTheDocument();
  });

  test("should render contentLeft", async () => {
    const { container } = render(
      <HeaderTitle title="Title" contentLeft={<span>Left</span>} />,
    );
    expect(await axe(container)).toHaveNoViolations();
    expect(screen.getByText("Left")).toBeInTheDocument();
  });

  test("should render contentRight", async () => {
    const { container } = render(
      <HeaderTitle title="Title" contentRight={<span>Right</span>} />,
    );
    expect(await axe(container)).toHaveNoViolations();
    expect(screen.getByText("Right")).toBeInTheDocument();
  });

  test("should render children", async () => {
    const { container } = render(
      <HeaderTitle title="Title">
        <Tag classModifier="success"> Lorem ipsum </Tag>
      </HeaderTitle>,
    );
    expect(await axe(container)).toHaveNoViolations();
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
  });
});
