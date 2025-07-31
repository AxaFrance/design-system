import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import { ButtonCommon as Button } from "../../Button/ButtonCommon";
import { Icon } from "../../Icon/IconCommon";
import { Link } from "../../Link/LinkCommon";
import { Spinner } from "../../Spinner/SpinnerApollo";
import { messageVariants } from "../constants";
import { MessageCommon, type MessageProps } from "../MessageCommon";

const MoreDetails = () => (
  <Link openInNewTab href="https://fakelink.com">
    Plus de détails
  </Link>
);

const defaultProps = {
  variant: messageVariants.information,
  title: "my title",
  iconSize: 24,
  children: "some text",
};

describe("MessageCommon", () => {
  const renderMessageCommon = (props: Partial<MessageProps> = {}) =>
    render(<MessageCommon {...defaultProps} {...props} IconComponent={Icon} />);

  it.each`
    variant                        | role        | title                 | children                 | icon
    ${undefined}                   | ${"status"} | ${undefined}          | ${undefined}             | ${"emoji_objects-fill.svg"}
    ${messageVariants.information} | ${"status"} | ${defaultProps.title} | ${defaultProps.children} | ${"emoji_objects-fill.svg"}
    ${messageVariants.error}       | ${"alert"}  | ${defaultProps.title} | ${defaultProps.children} | ${"error-fill.svg"}
    ${messageVariants.warning}     | ${"alert"}  | ${defaultProps.title} | ${defaultProps.children} | ${"warning-fill.svg"}
    ${messageVariants.neutral}     | ${"status"} | ${defaultProps.title} | ${defaultProps.children} | ${"info-fill.svg"}
    ${messageVariants.validation}  | ${"status"} | ${defaultProps.title} | ${defaultProps.children} | ${"check_circle-fill.svg"}
  `(
    "Should render correctly with variant: $variant, role: $role, title: $title, children: $children, icon: $icon",
    ({ variant, role, title, children, icon }) => {
      renderMessageCommon({ variant, title, children });

      const component = within(screen.getByRole(role));

      if (title) {
        expect(component.getByText(RegExp(title))).toBeDefined();
      }

      if (children) {
        expect(component.getByText(RegExp(children))).toBeDefined();
      }

      expect(component.getByRole("presentation")).toHaveAttribute(
        "data-src",

        expect.stringContaining(icon),
      );
    },
  );

  it("should render correctly with Button", () => {
    renderMessageCommon({
      action: (
        <Button variant="ghost" SpinnerComponent={Spinner}>
          Actualiser
        </Button>
      ),
    });

    expect(
      screen.getByRole("button", { name: /Actualiser/ }),
    ).toBeInTheDocument();
  });

  it("should render correctly with Link", () => {
    renderMessageCommon({
      action: <MoreDetails />,
    });

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://fakelink.com",
    );
  });

  it("should render with the given className", () => {
    renderMessageCommon({ className: "my-custom-class" });

    expect(screen.getByRole("status")).toHaveClass(
      "af-message af-message--information my-custom-class",
    );
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <Message />", async () => {
      const { container } = renderMessageCommon();

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
