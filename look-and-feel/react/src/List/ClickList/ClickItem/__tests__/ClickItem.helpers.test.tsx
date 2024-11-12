import { render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { createClickItemParent } from "../ClickItem.helpers";

describe("createClickItemParent", () => {
  it("renders a native html wrapper component with the correct props", () => {
    const wrapperProps: ComponentProps<"a"> = {
      href: "https://my-link.com",
    };
    const ClickItemWrapper = createClickItemParent("a", wrapperProps);

    render(
      <ClickItemWrapper>
        <span>Test Child</span>
      </ClickItemWrapper>,
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://my-link.com");
    expect(link).toContainHTML("<span>Test Child</span>");
  });

  it("renders a custom wrapper component with the correct props", () => {
    const CustomLink = ({ children, ...props }: ComponentProps<"a">) => (
      <a {...props}>{children}</a>
    );

    const wrapperProps: ComponentProps<"a"> = {
      href: "https://my-link.com",
    };

    const ClickItemWrapper = createClickItemParent(CustomLink, wrapperProps);

    render(
      <ClickItemWrapper>
        <span>Test Child</span>
      </ClickItemWrapper>,
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://my-link.com");
    expect(link).toContainHTML("<span>Test Child</span>");
  });
});
