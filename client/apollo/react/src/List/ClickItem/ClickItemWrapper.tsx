import { HTMLAttributes } from "react";

export const ClickItemWrapper = ({
  isClickable = true,
  children,
  ...props
}: HTMLAttributes<HTMLElement> & { isClickable?: boolean }) => {
  if (isClickable) {
    return (
      <button type="button" {...props}>
        {children}
      </button>
    );
  }
  return <div {...props}>{children}</div>;
};
