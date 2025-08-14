import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Message, messageVariants } from "../MessageCommon";
import { Link } from "../../Link/LinkCommon";
import { ButtonCommon as Button } from "../../Button/ButtonCommon";
import { Spinner } from "../../Spinner/SpinnerApollo";

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
    ${undefined}                   | ${undefined}          | ${undefined}             | ${"emoji_objects-fill.svg"}
    ${messageVariants.information} | ${defaultProps.title} | ${defaultProps.children} | ${"emoji_objects-fill.svg"}
    ${messageVariants.error}       | ${defaultProps.title} | ${defaultProps.children} | ${"error-fill.svg"}
    ${messageVariants.neutral}     | ${defaultProps.title} | ${defaultProps.children} | ${"info-fill.svg"}
    ${messageVariants.validation}  | ${defaultProps.title} | ${defaultProps.children} | ${"check_circle-fill.svg"}
    ${messageVariants.warning}     | ${defaultProps.title} | ${defaultProps.children} | ${"warning-fill.svg"}
  `(
    "Should render correctly with variant: $variant, title: $title, children: $children, icon: $icon",
    ({ variant, title, children, icon }) => {
      render(<Message {...{ variant, title }}>{children}</Message>);

      if (title) {
        expect(screen.getByText(RegExp(title))).toBeDefined();
      }

      if (children) {
        expect(screen.getByText(RegExp(children))).toBeDefined();
      }

      expect(screen.getByRole("presentation")).toHaveAttribute(
        "data-src",
        expect.stringContaining(icon),
      );
    },
  );

  it("should render correctly with Button", () => {
    render(
      <Message
        {...defaultProps}
        action={
          <Button variant="ghost" SpinnerComponent={Spinner}>
            Actualiser
          </Button>
        }
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

  describe("Accessibility roles", () => {
    it.each`
      variant                        | expectedRole
      ${undefined}                   | ${"status"}
      ${messageVariants.information} | ${"status"}
      ${messageVariants.validation}  | ${"status"}
      ${messageVariants.neutral}     | ${"status"}
      ${messageVariants.error}       | ${"alert"}
      ${messageVariants.warning}     | ${"alert"}
    `(
      'should assign role="$expectedRole" by default for variant: $variant',
      ({ variant, expectedRole }) => {
        render(<Message variant={variant}>{`Test ${variant}`}</Message>);
        const messageDiv = screen.getByRole(expectedRole);
        expect(messageDiv).toBeInTheDocument();
        expect(messageDiv).toHaveClass(
          `af-message--${variant || messageVariants.information}`,
        );
      },
    );

    it("should use the explicitly passed role over the default", () => {
      render(
        <Message variant="error" role="status">
          Error message with custom role
        </Message>,
      );
      const messageDiv = screen.getByRole("status");
      expect(messageDiv).toBeInTheDocument();
    });
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <Message />", async () => {
      const { container } = render(<Message {...defaultProps} />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
