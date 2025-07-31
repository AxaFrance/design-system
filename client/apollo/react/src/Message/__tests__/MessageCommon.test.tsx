import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { vi } from "vitest";
import { ButtonCommon as Button } from "../../Button/ButtonCommon";
import { Icon } from "../../Icon/IconCommon";
import { Link } from "../../Link/LinkCommon";
import { Spinner } from "../../Spinner/SpinnerApollo";
import { messageVariants } from "../constants";
import * as MessageHelpers from "../Message.helpers";
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

  const mockHelpers = () => {
    const getAriaRoleMock = vi
      .spyOn(MessageHelpers, "getAriaRole")
      .mockReturnValue("status");
    const getIconFromVariantMock = vi
      .spyOn(MessageHelpers, "getIconFromVariant")
      .mockReturnValue("mock-icon.svg");

    return { getAriaRoleMock, getIconFromVariantMock };
  };

  it("should render with the mocked role and icon", () => {
    const { getAriaRoleMock, getIconFromVariantMock } = mockHelpers();
    const variant = messageVariants.error;
    renderMessageCommon({ variant });

    expect(getAriaRoleMock).toHaveBeenCalledWith(variant);
    expect(getIconFromVariantMock).toHaveBeenCalledWith(variant);
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByRole("presentation")).toHaveAttribute(
      "data-src",
      expect.stringContaining("mock-icon.svg"),
    );

    getAriaRoleMock.mockRestore();
    getIconFromVariantMock.mockRestore();
  });

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
