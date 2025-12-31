import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { ComponentProps } from "react";
import { Button } from "../../Button/ButtonLF";
import { Icon } from "../../Icon/IconCommon";
import { Message, messageVariants } from "../../Message/MessageLF";
import { Spinner } from "../../Spinner/SpinnerLF";
import {
  MultiMessageCommon,
  type MultiMessageProps,
  type Notification,
} from "../MultiMessageCommon";

const defaultNotifications: Notification[] = [
  { key: "Notification 1", value: "Premier message important" },
  { key: "Notification 2", value: "Deuxième message important" },
  { key: "Notification 3", value: "Troisième message important" },
];

const ButtonWithSpinner = (props: ComponentProps<typeof Button>) => (
  <Button {...props} SpinnerComponent={Spinner} />
);

const defaultProps = {
  notifications: defaultNotifications,
  MessageComponent: Message,
  ButtonComponent: ButtonWithSpinner,
  IconComponent: Icon,
  iconLeft: "keyboard_arrow_left-fill.svg",
  iconRight: "keyboard_arrow_right-fill.svg",
};

describe("MultiMessageCommon", () => {
  const renderMultiMessageCommon = (props: Partial<MultiMessageProps> = {}) =>
    render(
      <MultiMessageCommon
        {...defaultProps}
        {...props}
        notifications={props.notifications || defaultNotifications}
      />,
    );

  it("should return null when notifications array is empty", () => {
    const { container } = renderMultiMessageCommon({ notifications: [] });

    expect(container.firstChild).toBeNull();
  });

  it("should render a single message without controls when there is only one notification", () => {
    const singleNotification = [{ key: "Solo", value: "Unique message" }];
    renderMultiMessageCommon({ notifications: singleNotification });

    expect(screen.getByText("Solo")).toBeInTheDocument();
    expect(screen.getByText("Unique message")).toBeInTheDocument();
    expect(
      screen.queryByLabelText("Notification précédente"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByLabelText("Notification suivante"),
    ).not.toBeInTheDocument();
  });

  it("should render the first notification by default", () => {
    renderMultiMessageCommon();

    expect(screen.getByText("Notification 1")).toBeInTheDocument();
    expect(screen.getByText("Premier message important")).toBeInTheDocument();
  });

  it("should display counter with correct format", () => {
    renderMultiMessageCommon();

    const counter = screen.getByText((content, element) => {
      return (
        element?.className === "af-multimessage__counter" &&
        element?.textContent?.includes("1") &&
        element?.textContent?.includes("sur") &&
        element?.textContent?.includes("3")
      );
    });
    expect(counter).toBeInTheDocument();
  });

  it("should navigate to next notification when next button is clicked", async () => {
    const user = userEvent.setup();
    renderMultiMessageCommon();

    const nextButton = screen.getByLabelText("Notification suivante");
    await user.click(nextButton);

    expect(screen.getByText("Notification 2")).toBeInTheDocument();
    expect(screen.getByText("Deuxième message important")).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => {
        return (
          element?.className === "af-multimessage__counter" &&
          element?.textContent?.includes("2") &&
          element?.textContent?.includes("sur") &&
          element?.textContent?.includes("3")
        );
      }),
    ).toBeInTheDocument();
  });

  it("should navigate to previous notification when previous button is clicked", async () => {
    const user = userEvent.setup();
    renderMultiMessageCommon();

    const prevButton = screen.getByLabelText("Notification précédente");
    await user.click(prevButton);

    expect(screen.getByText("Notification 3")).toBeInTheDocument();
    expect(screen.getByText("Troisième message important")).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => {
        return (
          element?.className === "af-multimessage__counter" &&
          element?.textContent?.includes("3") &&
          element?.textContent?.includes("sur") &&
          element?.textContent?.includes("3")
        );
      }),
    ).toBeInTheDocument();
  });

  it("should wrap from last to first notification when clicking next", async () => {
    const user = userEvent.setup();
    renderMultiMessageCommon();

    const nextButton = screen.getByLabelText("Notification suivante");

    await user.click(nextButton);
    await user.click(nextButton);
    await user.click(nextButton);

    expect(screen.getByText("Notification 1")).toBeInTheDocument();
    expect(screen.getByText("Premier message important")).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => {
        return (
          element?.className === "af-multimessage__counter" &&
          element?.textContent?.includes("1") &&
          element?.textContent?.includes("sur") &&
          element?.textContent?.includes("3")
        );
      }),
    ).toBeInTheDocument();
  });

  it("should render with custom heading level", () => {
    renderMultiMessageCommon({ heading: "h3" });

    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent("Notification 1");
  });

  it("should render with custom aria labels", () => {
    renderMultiMessageCommon({
      previousLabel: "Message précédent",
      nextLabel: "Message suivant",
    });

    expect(screen.getByLabelText("Message précédent")).toBeInTheDocument();
    expect(screen.getByLabelText("Message suivant")).toBeInTheDocument();
  });

  it("should render with custom separator text", () => {
    renderMultiMessageCommon({ separatorText: "de" });

    expect(
      screen.getByText((content, element) => {
        return (
          element?.className === "af-multimessage__counter" &&
          element?.textContent?.includes("1") &&
          element?.textContent?.includes("de") &&
          element?.textContent?.includes("3")
        );
      }),
    ).toBeInTheDocument();
  });

  it("should render with the given className", () => {
    renderMultiMessageCommon({ className: "my-custom-class" });

    const container = screen.getByRole("status").parentElement?.parentElement;
    expect(container).toHaveClass("af-multimessage my-custom-class");
  });

  it("should apply className to single notification wrapper", () => {
    const singleNotification = [{ key: "Solo", value: "Unique message" }];
    renderMultiMessageCommon({
      notifications: singleNotification,
      className: "my-custom-class",
    });

    const container = screen.getByRole("status").parentElement;
    expect(container).toHaveClass("af-multimessage my-custom-class");
  });

  it("should have correct structure with controls", () => {
    renderMultiMessageCommon();

    const wrapper = document.querySelector(".af-multimessage__wrapper");
    expect(wrapper).toBeInTheDocument();

    const message = document.querySelector(".af-multimessage__message");
    expect(message).toBeInTheDocument();

    const controls = document.querySelector(".af-multimessage__controls");
    expect(controls).toBeInTheDocument();

    const counter = document.querySelector(".af-multimessage__counter");
    expect(counter).toBeInTheDocument();
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation with single notification", async () => {
      const singleNotification = [{ key: "Solo", value: "Unique message" }];
      const { container } = renderMultiMessageCommon({
        notifications: singleNotification,
      });

      expect(await axe(container)).toHaveNoViolations();
    });

    it("shouldn't have an accessibility violation with multiple notifications", async () => {
      const { container } = renderMultiMessageCommon();

      expect(await axe(container)).toHaveNoViolations();
    });

    it("should have proper aria-labels on navigation buttons", () => {
      renderMultiMessageCommon();

      const prevButton = screen.getByLabelText("Notification précédente");
      const nextButton = screen.getByLabelText("Notification suivante");

      expect(prevButton).toHaveAttribute(
        "aria-label",
        "Notification précédente",
      );
      expect(nextButton).toHaveAttribute("aria-label", "Notification suivante");
    });
  });

  describe("Variants", () => {
    it.each(Object.values(messageVariants))(
      "should render with variant %s",
      (variant) => {
        renderMultiMessageCommon({ variant });

        const role =
          variant === "error" || variant === "warning" ? "alert" : "status";
        const message = screen.getByRole(role);
        expect(message).toHaveClass(`af-message--${variant}`);
      },
    );

    it("should use information variant by default", () => {
      renderMultiMessageCommon();

      const message = screen.getByRole("status");
      expect(message).toHaveClass("af-message--information");
    });

    it("should apply variant to single notification", () => {
      const singleNotification = [{ key: "Solo", value: "Unique message" }];
      renderMultiMessageCommon({
        notifications: singleNotification,
        variant: "error",
      });

      const message = screen.getByRole("alert");
      expect(message).toHaveClass("af-message--error");
    });
  });
});
