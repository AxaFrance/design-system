import { render, screen } from "@testing-library/react";
import bank from "@material-symbols/svg-700/rounded/account_balance.svg";
import { axe } from "jest-axe";
import { Heading } from "../HeadingCommon";
import { Tag } from "../../Tag/TagCommon";
import { HeadingLevel } from "../types";

describe("Heading", () => {
  it("should render correctly h1 by default", () => {
    render(
      <Heading firstSubtitle="firstSubtitle" secondSubtitle="secondSubtitle">
        Title
      </Heading>,
    );

    expect(
      screen.getByRole("heading", { name: "Title", level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByText("firstSubtitle")).toBeInTheDocument();
    expect(screen.getByText("secondSubtitle")).toBeInTheDocument();
  });

  it("should render icon and second subtitle when level is 1", () => {
    render(
      <Heading
        level={1}
        firstSubtitle="firstSubtitle"
        secondSubtitle="secondSubtitle"
        icon={bank}
        iconProps={{ "aria-label": "icon" }}
      >
        Title
      </Heading>,
    );

    expect(
      screen.getByRole("heading", { name: "Title", level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByText("firstSubtitle")).toBeInTheDocument();
    expect(screen.getByText("secondSubtitle")).toBeInTheDocument();
    expect(screen.getByLabelText("icon")).toBeInTheDocument();
  });

  it.each([1, 2] as HeadingLevel[])(
    "should render tag when level is %i",
    (level) => {
      render(
        <Heading
          level={level}
          tagComponent={Tag}
          tagProps={{ children: "tag" }}
        >
          Title
        </Heading>,
      );

      expect(
        screen.getByRole("heading", { name: "Title", level }),
      ).toBeInTheDocument();
      expect(screen.getByText("tag")).toBeInTheDocument();
    },
  );

  it.each([2, 3] as HeadingLevel[])(
    "should not display icon and second subtitle when level is %i",
    (level) => {
      render(
        <Heading
          firstSubtitle="firstSubtitle"
          secondSubtitle="secondSubtitle"
          icon="icon"
          iconProps={{ "aria-label": "icon" }}
          level={level}
        >
          Title
        </Heading>,
      );

      expect(
        screen.getByRole("heading", { name: "Title", level }),
      ).toBeInTheDocument();
      expect(screen.getByText("firstSubtitle")).toBeInTheDocument();
      expect(screen.queryByText("secondSubtitle")).not.toBeInTheDocument();
      expect(screen.queryByLabelText("icon")).not.toBeInTheDocument();
    },
  );

  it("should not display tag when level is 3", () => {
    render(
      <Heading
        firstSubtitle="firstSubtitle"
        tagComponent={Tag}
        tagProps={{ children: "tag" }}
        level={3}
      >
        Title
      </Heading>,
    );

    expect(
      screen.getByRole("heading", { name: "Title", level: 3 }),
    ).toBeInTheDocument();
    expect(screen.getByText("firstSubtitle")).toBeInTheDocument();
    expect(screen.queryByText("tag")).not.toBeInTheDocument();
  });

  it("should have custom class", () => {
    render(
      <Heading firstSubtitle="firstSubtitle" className="custom-class">
        Title
      </Heading>,
    );

    expect(screen.getByText("Title").parentElement).toHaveClass("custom-class");
  });

  it.each([{ level: 1 }, { level: 2 }, { level: 3 }] as {
    level: HeadingLevel;
  }[])(
    "should use the h$level heading tag when level is $level",
    ({ level }) => {
      render(<Heading level={level}>Title H{level}</Heading>);

      expect(
        screen.getByRole("heading", { name: `Title H${level}`, level }),
      ).toBeInTheDocument();
    },
  );

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <Heading
        firstSubtitle="firstSubtitle"
        secondSubtitle="secondSubtitle"
        icon={bank}
      >
        Title
      </Heading>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
