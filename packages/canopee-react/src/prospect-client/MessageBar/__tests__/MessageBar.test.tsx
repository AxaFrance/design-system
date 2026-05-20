import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentProps } from "react";
import { describe, expect, it } from "vitest";
import { ButtonCommon, type ButtonProps } from "../../Button/ButtonCommon";
import { ClickIcon } from "../../ClickIcon/ClickIconCommon";
import { Icon } from "../../Icon/IconCommon";
import { Spinner } from "../../Spinner/SpinnerCommon";
import { MessageBarCommon } from "../MessageBarCommon";

const ButtonComponent = (props: ButtonProps) => (
  <ButtonCommon {...props} SpinnerComponent={Spinner} />
);

const renderMessageBar = (
  props: Partial<ComponentProps<typeof MessageBarCommon>> = {},
) =>
  render(
    <MessageBarCommon
      title="Important information"
      icon="custom.svg"
      ButtonComponent={ButtonComponent}
      ClickIconComponent={ClickIcon}
      IconComponent={Icon}
      {...props}
    />,
  );

describe("MessageBar", () => {
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

    const icon = within(messageBar).getByRole("presentation");
    expect(icon).toHaveAttribute("data-src", "custom.svg");
    expect(icon.parentElement).toHaveClass("af-icon--primary");
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
    renderMessageBar({
      title: "Toggle title",
      description: "Toggle body",
    });

    const user = userEvent.setup();
    const messageBar = screen.getByRole("region", { name: "Toggle title" });
    const toggle = screen.getByRole("button", {
      name: "Développer le message",
    });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(messageBar).not.toHaveClass("af-message-bar--open");

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(messageBar).toHaveClass("af-message-bar--open");
  });

  it("does not render buttons when there is no description or action", () => {
    renderMessageBar({ title: "Only title" });

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: "Only title" }),
    ).toBeInTheDocument();
  });
});
