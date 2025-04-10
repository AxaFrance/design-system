import { render, screen } from "@testing-library/react";
import { Message, messageVariants } from "../MessageCommon";
import { Link } from "../../Link/LinkCommon";
import { Button } from "../../Button/ButtonCommon";

const MoreDetails = () => (
  <Link openInNewTab href="https://fakelink.com">
    Plus de détails
  </Link>
);

describe("Message", () => {
  it.each`
    variant                        | title         | children       | action                                           | icon                     | iconSize     | expectLink | expectButton
    ${undefined}                   | ${undefined}  | ${undefined}   | ${undefined}                                     | ${"wb_incandescent.svg"} | ${undefined} | ${false}   | ${false}
    ${messageVariants.information} | ${"my title"} | ${"some text"} | ${(<MoreDetails />)}                             | ${"wb_incandescent.svg"} | ${undefined} | ${true}    | ${false}
    ${messageVariants.error}       | ${"my title"} | ${"some text"} | ${(<MoreDetails />)}                             | ${"emergency_home.svg"}  | ${undefined} | ${true}    | ${false}
    ${messageVariants.neutral}     | ${"my title"} | ${"some text"} | ${(<MoreDetails />)}                             | ${"error.svg"}           | ${undefined} | ${true}    | ${false}
    ${messageVariants.validation}  | ${"my title"} | ${"some text"} | ${(<MoreDetails />)}                             | ${"check_circle.svg"}    | ${undefined} | ${true}    | ${false}
    ${messageVariants.warning}     | ${"my title"} | ${"some text"} | ${(<Button variant="ghost">Actualiser</Button>)} | ${"error.svg"}           | ${undefined} | ${false}   | ${true}
  `(
    "Should render correctly with type: $type, title: $title, children: $children, icon: $icon, action: $action, iconSize: $iconSize",
    ({
      variant,
      title,
      children,
      action,
      icon,
      iconSize,
      expectLink,
      expectButton,
    }) => {
      const { container } = render(
        <Message {...{ variant, title, action, iconSize }}>{children}</Message>,
      );

      if (title) {
        expect(screen.getByText(RegExp(title))).toBeDefined();
      }

      if (children) {
        expect(screen.getByText(RegExp(children))).toBeDefined();
      }

      expect(screen.getByRole("alert")).toHaveClass(
        `af-message--${variant || messageVariants.information}`,
      );

      if (expectLink && action) {
        expect(screen.getByRole("link")).toHaveAttribute(
          "href",
          "https://fakelink.com",
        );
      }

      if (expectButton && action) {
        expect(
          screen.getByRole("button", { name: /Actualiser/ }),
        ).toBeInTheDocument();
      }

      expect(container.querySelector(`[data-src$="${icon}"]`)).toBeDefined();
    },
  );
});
