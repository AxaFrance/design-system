import { render, screen } from "@testing-library/react";
import { Alert, alertTypes } from "../Alert";
import { Link } from "../../Link/Link";
import { Button } from "../../Button/Button";

const MoreDetails = () => (
  <Link openInNewTab href="https://fakelink.com">
    Plus de détails
  </Link>
);

describe("Alert", () => {
  it.each`
    type                      | title         | children       | action                                           | icon                     | iconSize     | expectLink | expectButton
    ${undefined}              | ${undefined}  | ${undefined}   | ${undefined}                                     | ${"wb_incandescent.svg"} | ${undefined} | ${false}   | ${false}
    ${alertTypes.information} | ${"my title"} | ${"some text"} | ${(<MoreDetails />)}                             | ${"wb_incandescent.svg"} | ${undefined} | ${true}    | ${false}
    ${alertTypes.error}       | ${"my title"} | ${"some text"} | ${(<MoreDetails />)}                             | ${"emergency_home.svg"}  | ${undefined} | ${true}    | ${false}
    ${alertTypes.neutral}     | ${"my title"} | ${"some text"} | ${(<MoreDetails />)}                             | ${"error.svg"}           | ${undefined} | ${true}    | ${false}
    ${alertTypes.validation}  | ${"my title"} | ${"some text"} | ${(<MoreDetails />)}                             | ${"check_circle.svg"}    | ${undefined} | ${true}    | ${false}
    ${alertTypes.warning}     | ${"my title"} | ${"some text"} | ${(<Button variant="ghost">Actualiser</Button>)} | ${"error.svg"}           | ${undefined} | ${false}   | ${true}
  `(
    "Should render correctly with type: $type, title: $title, children: $children, icon: $icon, action: $action, iconSize: $iconSize",
    ({
      type,
      title,
      children,
      action,
      icon,
      iconSize,
      expectLink,
      expectButton,
    }) => {
      const { container } = render(
        <Alert {...{ type, title, action, iconSize }}>{children}</Alert>,
      );

      if (title) {
        expect(screen.getByText(RegExp(title))).toBeDefined();
      }

      if (children) {
        expect(screen.getByText(RegExp(children))).toBeDefined();
      }

      expect(screen.getByRole("alert")).toHaveClass(
        `af-alert--${type || alertTypes.information}`,
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
