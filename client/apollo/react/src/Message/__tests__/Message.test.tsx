import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Message, messageVariants } from "../MessageCommon";
import { Link } from "../../Link/LinkCommon";
import { Button } from "../../Button/ButtonCommon";

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

describe("Message", () => {
  it.each`
    variant                        | title                 | children                 | icon
    ${undefined}                   | ${undefined}          | ${undefined}             | ${"wb_incandescent.svg"}
    ${messageVariants.information} | ${defaultProps.title} | ${defaultProps.children} | ${"wb_incandescent.svg"}
    ${messageVariants.error}       | ${defaultProps.title} | ${defaultProps.children} | ${"emergency_home.svg"}
    ${messageVariants.neutral}     | ${defaultProps.title} | ${defaultProps.children} | ${"error.svg"}
    ${messageVariants.validation}  | ${defaultProps.title} | ${defaultProps.children} | ${"check_circle.svg"}
    ${messageVariants.warning}     | ${defaultProps.title} | ${defaultProps.children} | ${"error.svg"}
  `(
    "Should render correctly with variant: $variant, title: $title, children: $children, icon: $icon",
    ({ variant, title, children, icon }) => {
      const { container } = render(
        <Message {...{ variant, title }}>{children}</Message>,
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

      expect(container.querySelector(`[data-src$="${icon}"]`)).toBeDefined();
    },
  );

  it("should render correctly with Button", () => {
    render(
      <Message
        {...defaultProps}
        action={<Button variant="ghost">Actualiser</Button>}
      />,
    );
    expect(
      screen.getByRole("button", { name: /Actualiser/ }),
    ).toBeInTheDocument();
  });

  it("should render correctly with Link", () => {
    render(<Message {...defaultProps} action={<MoreDetails />} />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://fakelink.com",
    );
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <Message />", async () => {
      const { container } = render(<Message {...defaultProps} />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
