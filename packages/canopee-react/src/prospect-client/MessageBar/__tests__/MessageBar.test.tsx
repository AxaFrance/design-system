import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentProps } from "react";
import { beforeEach, describe, expect, it } from "vitest";
import {
  AccordionCoreCommon,
  type AccordionCoreProps,
} from "../../AccordionCore/AccordionCoreCommon";
import { ButtonCommon, type ButtonProps } from "../../Button/ButtonCommon";
import { Icon } from "../../Icon/IconCommon";
import { Spinner } from "../../Spinner/SpinnerCommon";
import { MessageBarCommon } from "../MessageBarCommon";

const ButtonComponent = (props: ButtonProps) => (
  <ButtonCommon {...props} SpinnerComponent={Spinner} />
);

const renderAccordionCore = (props: AccordionCoreProps) => (
  <AccordionCoreCommon {...props} IconComponent={Icon} />
);

const renderMessageBar = (
  props: Partial<ComponentProps<typeof MessageBarCommon>> = {},
) =>
  render(
    <MessageBarCommon
      title="Important information"
      icon="custom.svg"
      AccordionCoreComponent={renderAccordionCore}
      ButtonComponent={ButtonComponent}
      IconComponent={Icon}
      {...props}
    />,
  );

const setScreenWidth = (width: number) => {
  Object.defineProperty(globalThis, "innerWidth", {
    configurable: true,
    writable: true,
    value: width,
  });
};

describe("MessageBar", () => {
  beforeEach(() => {
    setScreenWidth(1024);
  });

  it("renders the icon, content and action", () => {
    renderMessageBar({
      description: "Read this update",
      buttonProps: { children: "Read more", className: "custom-action" },
      defaultDescriptionOpen: true,
    });

    const messageBar = screen.getByRole("region", {
      name: "Important information",
    });
    expect(messageBar).toHaveClass("af-message-bar--blue");
    expect(screen.getByText("Important information")).toBeInTheDocument();
    expect(screen.getByText("Read this update")).toBeInTheDocument();

    const action = screen.getByRole("button", { name: "Read more" });
    expect(action).toHaveClass("af-message-bar__action", "custom-action");

    const icon = within(messageBar)
      .getAllByRole("presentation")
      .find((element) => element.dataset.src === "custom.svg");
    expect(icon).toHaveAttribute("data-src", "custom.svg");
    expect(icon?.parentElement).toHaveClass("af-icon--primary");
  });

  it("renders the icon with the red variant", () => {
    renderMessageBar({ title: "Alert", variant: "red" });

    const icon = screen.getByRole("presentation");
    expect(icon).toHaveAttribute("data-src", "custom.svg");
    expect(icon.parentElement).toHaveClass("af-icon--error");
  });

  it("uses a paragraph for a text description", () => {
    renderMessageBar({
      description: "Read this update",
      defaultDescriptionOpen: true,
    });

    expect(screen.getByText("Read this update").tagName).toBe("P");
  });

  it("uses a div for a custom description node", () => {
    renderMessageBar({
      description: <span>Custom content</span>,
      defaultDescriptionOpen: true,
    });

    expect(screen.getByText("Custom content").parentElement?.tagName).toBe(
      "DIV",
    );
  });

  it("toggles the mobile description state", async () => {
    setScreenWidth(320);
    renderMessageBar({
      title: "Toggle title",
      description: "Toggle body",
    });

    const user = userEvent.setup();
    const messageBar = screen.getByRole("region", { name: "Toggle title" });
    const summary = within(messageBar).getByText("Toggle title");
    expect(messageBar).not.toHaveAttribute("open");

    await user.click(summary);

    expect(messageBar).toHaveAttribute("open");
  });

  it("uses AccordionCore with a ghost arrow on mobile", () => {
    setScreenWidth(320);
    renderMessageBar({
      description: "Accordion body",
    });

    const messageBar = screen.getByRole("region", {
      name: "Important information",
    });
    const arrow = messageBar.querySelector(".af-accordion__arrow");

    expect(messageBar).toHaveClass("af-apollo-accordion");
    expect(arrow).toHaveClass("af-click-icon", "af-click-icon--ghost");
  });

  it("does not render buttons when there is no description or action", () => {
    renderMessageBar({ title: "Only title" });

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: "Only title" }),
    ).toBeInTheDocument();
  });
});
