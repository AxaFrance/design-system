import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { PropsWithChildren } from "react";
import { Link } from "../Link";

describe("Link component", () => {
  it("should renders correctly", () => {
    render(<Link href="/">Test Link</Link>);

    const link = screen.getByRole("link", { name: "Test Link" });
    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveClass("af-slash-link");
  });

  it("should render set ref props correctly if target _blank", () => {
    render(
      <Link href="/" target="_blank">
        Test Link
      </Link>,
    );

    const link = screen.getByRole("link", { name: "Test Link" });
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render leftIcon correctly", () => {
    render(
      <Link href="/" leftIcon={<span>Left Icon</span>}>
        Test Link
      </Link>,
    );

    const link = screen.getByRole("link", { name: "Left Icon Test Link" });
    expect(link).toBeInTheDocument();
  });

  it("should render rightIcon correctly", () => {
    render(
      <Link href="/" rightIcon={<span>Right Icon</span>}>
        Test Link
      </Link>,
    );

    const link = screen.getByRole("link", { name: "Test Link Right Icon" });
    expect(link).toBeInTheDocument();
  });

  it("should render disabled correctly", () => {
    render(
      <Link href="/" disabled>
        Test Link
      </Link>,
    );

    const link = screen.getByRole("link", { name: "Test Link" });
    expect(link).toHaveAttribute("aria-disabled", "true");
  });

  it("should render correclty with component prop", () => {
    const FakeRouterLink = ({
      children,
      to,
    }: PropsWithChildren<{ to: string }>) => <a href={to}>{children}</a>;

    render(
      <Link component={FakeRouterLink} to="/contact">
        Test Link
      </Link>,
    );

    const link = screen.getByRole("link", { name: "Test Link" });
    expect(link).toHaveAttribute("href", "/contact");
  });
});
