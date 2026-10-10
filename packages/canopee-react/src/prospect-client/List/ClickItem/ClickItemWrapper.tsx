import type { AnchorHTMLAttributes, HTMLAttributes } from "react";

type ClickItemWrapperProps = HTMLAttributes<HTMLElement> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel"> & {
    isClickable?: boolean;
    disabled?: boolean;
  };

export const ClickItemWrapper = ({
  isClickable = true,
  href,
  target,
  rel,
  disabled,
  onClick,
  children,
  ...props
}: ClickItemWrapperProps) => {
  if (href !== undefined) {
    // Without href, tabIndex -1 keeps the focus on an item that gets disabled
    return disabled ? (
      <a role="link" aria-disabled="true" tabIndex={-1} {...props}>
        {children}
      </a>
    ) : (
      <a href={href} target={target} rel={rel} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }
  if (isClickable) {
    return (
      <button type="button" disabled={disabled} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }
  return <div {...props}>{children}</div>;
};
