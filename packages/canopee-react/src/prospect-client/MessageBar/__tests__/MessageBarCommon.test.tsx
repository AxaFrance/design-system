import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import { ButtonCommon as Button } from "../../Button/ButtonCommon";
import { Icon } from "../../Icon/IconCommon";
import { Link } from "../../Link/LinkCommon";
import { Spinner } from "../../Spinner/SpinnerApollo";
import { messageBarVariants } from "../constants";
import { MessageBarCommon, type MessageBarProps } from "../MessageBarCommon";

const MoreDetails = () => (
  <Link openInNewTab href="https://fakelink.com">
    Plus de détails
  </Link>
);

const defaultProps = {
  variant: messageBarVariants.information,
  title: "my title",
  iconSize: 24,
  children: "some text",
};

describe("MessageBarCommon", () => {
  const renderMessageBarCommon = (props: Partial<MessageBarProps> = {}) =>
    render(
      <MessageBarCommon {...defaultProps} {...props} IconComponent={Icon} />,
    );

  it.each`
    variant                           | role        | title                 | children                 | icon
    ${undefined}                      | ${"status"} | ${undefined}          | ${undefined}             | ${"emoji_objects-fill.svg"}
    ${messageBarVariants.information} | ${"status"} | ${defaultProps.title} | ${defaultProps.children} | ${"emoji_objects-fill.svg"}
    ${messageBarVariants.error}       | ${"alert"}  | ${defaultProps.title} | ${defaultProps.children} | ${"error-fill.svg"}
    ${messageBarVariants.warning}     | ${"alert"}  | ${defaultProps.title} | ${defaultProps.children} | ${"warning-fill.svg"}
    ${messageBarVariants.neutral}     | ${"status"} | ${defaultProps.title} | ${defaultProps.children} | ${"info-fill.svg"}
    ${messageBarVariants.validation}  | ${"status"} | ${defaultProps.title} | ${defaultProps.children} | ${"check_circle-fill.svg"}
  `(
    "Should render correctly with variant: $variant, role: $role, title: $title, children: $children, icon: $icon",
    ({ variant, role, title, children, icon }) => {
      renderMessageBarCommon({ variant, title, children });

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
    renderMessageBarCommon({
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
    renderMessageBarCommon({
      action: <MoreDetails />,
    });

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://fakelink.com",
    );
  });

  it("should render with the given className", () => {
    renderMessageBarCommon({ className: "my-custom-class" });

    expect(screen.getByRole("status")).toHaveClass(
      "af-message af-message--information my-custom-class",
    );
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <Message />", async () => {
      const { container } = renderMessageBarCommon();

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
