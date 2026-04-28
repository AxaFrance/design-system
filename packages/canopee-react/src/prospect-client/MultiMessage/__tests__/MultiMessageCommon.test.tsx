import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { Icon } from "../../Icon/IconCommon";
import { Link } from "../../Link/LinkCommon";
import { messageVariants } from "../../Message/constants";
import {
  MultiMessageCommon,
  type MultiMessageProps,
} from "../MultiMessageCommon";

const items: MultiMessageProps["items"] = [
  {
    variant: messageVariants.information,
    title: "Title 1",
    children: "Body of message 1",
  },
  {
    variant: messageVariants.error,
    title: "Title 2",
    children: "Body of message 2",
    action: (
      <Link openInNewTab href="https://fakelink.com">
        Plus de détails
      </Link>
    ),
  },
  {
    variant: messageVariants.validation,
    title: "Title 3",
    children: "Body of message 3",
  },
];

const renderComponent = (props: Partial<MultiMessageProps> = {}) =>
  render(<MultiMessageCommon items={items} {...props} IconComponent={Icon} />);

describe("MultiMessageCommon", () => {
  it("renders the first message by default with status role", () => {
    renderComponent();
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Title 1/ }),
    ).toBeInTheDocument();
    expect(screen.getByText("Body of message 1")).toBeInTheDocument();
    expect(screen.getByText("1 sur 3")).toBeInTheDocument();
  });

  it("renders chevron buttons with default aria labels", () => {
    renderComponent();
    expect(screen.getByLabelText("Message précédent")).toBeDisabled();
    expect(screen.getByLabelText("Message suivant")).toBeEnabled();
  });

  it("navigates between messages on next click", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByLabelText("Message suivant"));

    expect(screen.getByText("Body of message 2")).toBeInTheDocument();
    expect(screen.getByText("2 sur 3")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://fakelink.com",
    );
  });

  it("disables the next button on the last message", async () => {
    const user = userEvent.setup();
    renderComponent({ defaultActiveIndex: items.length - 1 });

    expect(screen.getByLabelText("Message suivant")).toBeDisabled();
    await user.click(screen.getByLabelText("Message précédent"));
    expect(screen.getByText("2 sur 3")).toBeInTheDocument();
  });

  it("supports controlled mode and emits onChangeActive", async () => {
    const user = userEvent.setup();
    const onChangeActive = vi.fn();
    renderComponent({ activeIndex: 0, onChangeActive });

    await user.click(screen.getByLabelText("Message suivant"));

    expect(onChangeActive).toHaveBeenCalledWith(1);
    expect(screen.getByText("1 sur 3")).toBeInTheDocument();
  });

  it("hides pagination when only one item is provided", () => {
    renderComponent({ items: [items[0]] });
    expect(screen.queryByLabelText("Message suivant")).toBeNull();
    expect(screen.queryByText("1 sur 1")).toBeNull();
  });

  it("returns null when items is empty", () => {
    const { container } = renderComponent({ items: [] });
    expect(container.firstChild).toBeNull();
  });

  it("uses a custom counter formatter when provided", () => {
    renderComponent({ formatCounter: (c, t) => `${c}/${t}` });
    expect(screen.getByText("1/3")).toBeInTheDocument();
  });

  it("applies the className prop", () => {
    renderComponent({ className: "custom-class" });
    expect(screen.getByRole("status")).toHaveClass(
      "af-multi-message",
      "af-multi-message--information",
      "custom-class",
    );
  });

  describe("A11Y", () => {
    it("should not have any accessibility violation", async () => {
      const { container } = renderComponent();
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
