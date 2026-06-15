import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Timeline } from "../Timeline";

describe("Timeline component", () => {
  it("should render timeline headers", () => {
    render(
      <Timeline
        items={[
          {
            header: "Header 1",
            details: "Details 1",
            date: new Date("2024-11-14"),
          },
          {
            header: "Header 2",
            details: "Details 2",
            date: new Date("2035-12-17"),
          },
        ]}
      />,
    );

    expect(screen.getByText("Header 1")).toBeInTheDocument();
    expect(screen.getByText("Header 2")).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /devoiler le detail de la date 14\/11\/2024/i,
      }),
    ).toBeInTheDocument();
  });

  it("should open timeline details", async () => {
    const user = userEvent.setup();

    render(
      <Timeline
        items={[
          {
            header: "Header 1",
            details: "Details 1",
            date: new Date("2024-11-14"),
          },
        ]}
      />,
    );

    expect(screen.getByText("Details 1")).not.toBeVisible();

    await user.click(screen.getByText("Header 1"));

    expect(screen.getByText("Details 1")).toBeVisible();
    expect(
      screen.getByRole("img", {
        name: /masquer le detail de la date 14\/11\/2024/i,
      }),
    ).toBeInTheDocument();
  });

  it("should set single item class when timeline contains one item", () => {
    render(
      <Timeline
        items={[
          {
            header: "Header 1",
            details: "Details 1",
            date: new Date("2024-11-14"),
          },
        ]}
      />,
    );

    expect(screen.getByRole("list")).toHaveClass("af-timeline--single-item");
  });

  it("should render withoutDetails variant without details/summary", () => {
    render(
      <Timeline
        variant="withoutDetails"
        items={[
          {
            header: "Header 1",
            date: new Date("2024-11-14"),
          },
        ]}
      />,
    );

    expect(screen.getByRole("list")).toHaveClass(
      "af-timeline--without-details",
    );
    expect(screen.queryByText("Details 1")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("img", { name: /detail de la date/i }),
    ).toBeNull();
    expect(screen.queryByRole("group")).toBeNull();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(
      <Timeline
        items={[
          {
            header: "Header 1",
            details: "Details 1",
            date: new Date("2024-11-14"),
          },
          {
            header: "Header 2",
            details: "Details 2",
            date: new Date("2035-12-17"),
          },
        ]}
      />,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
