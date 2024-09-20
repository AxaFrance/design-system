import { render, screen } from "@testing-library/react";
import { ClickItem } from "../ClickItem";

describe("ClickItem", () => {
  it("should render label correctly with children prop", () => {
    const label = "Sample Label";

    render(<ClickItem>{label}</ClickItem>);

    const labelElement = screen.getByText(label);

    expect(labelElement).toBeInTheDocument();
  });

  it("should render label correctly with label prop", () => {
    const label = "Sample Label";

    render(<ClickItem label={label} />);

    const labelElement = screen.getByText(label);

    expect(labelElement).toBeInTheDocument();
  });

  it("should have custom class with modifier", () => {
    const label = "Sample Label";
    const className = "custom-class";
    const classModifier = "modifier";

    render(
      <ClickItem className={className} classModifier={classModifier}>
        {label}
      </ClickItem>,
    );

    expect(screen.getByRole("button", { name: label })).toHaveClass(
      `${className} ${className}--${classModifier}`,
    );
  });

  it("should render icon correctly", () => {
    const label = "Sample Label";
    const icon = <span>Icon</span>;

    render(<ClickItem icon={icon}>{label}</ClickItem>);

    const iconElement = screen.getByText("Icon");

    expect(iconElement).toBeInTheDocument();
  });

  it("should render as a button by default", () => {
    const label = "Sample Label";

    render(<ClickItem>{label}</ClickItem>);

    const buttonElement = screen.getByRole("button", { name: label });

    expect(buttonElement).toBeInTheDocument();
  });

  it("should render as a link when href is provided", () => {
    const label = "Sample Label";
    const href = "https://example.com";

    render(<ClickItem href={href}>{label}</ClickItem>);

    const linkElement = screen.getByRole("link", { name: label });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", href);
  });

  it("should be a disabled anchor", () => {
    const label = "Sample Label";
    const href = "https://example.com";
    const disabled = true;

    render(
      <ClickItem href={href} isDisabled={disabled}>
        {label}
      </ClickItem>,
    );

    const anchorElement = screen.getByRole("link", { name: label });

    expect(anchorElement).toHaveClass("af-click-item--disabled");
    expect(anchorElement).toHaveAttribute("aria-disabled", "true");
  });

  it("should be a disabled button", () => {
    const label = "Sample Label";
    const disabled = true;

    render(<ClickItem isDisabled={disabled}>{label}</ClickItem>);

    const buttonElement = screen.getByRole("button", { name: label });

    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass("af-click-item--disabled");
  });
});
