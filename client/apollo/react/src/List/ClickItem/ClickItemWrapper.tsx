import { HTMLAttributes } from "react";

type ClickItemWrapperProps = HTMLAttributes<HTMLElement> & {
  isClickable?: boolean;
};

export const ClickItemWrapper = ({
  isClickable = true,
  children,
  ...props
}: ClickItemWrapperProps) => {
  if (isClickable) {
    return (
      <button type="button" {...props}>
        {children}
      </button>
    );
  }
  return <div {...props}>{children}</div>;
};
