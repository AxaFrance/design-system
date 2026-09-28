import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import { getClassName } from "../prospect-client/utilities/getClassName";
import { Svg } from "./Svg";

import "@axa-fr/canopee-css/distributeur/Link/Link.css";
import { linkClassName } from "./Link/linkClassName";

export type ClickableComponentProps = {
  /**
   * The content to be displayed inside the clickable component.
   */
  children: ReactNode;
  /**
   * The icon to be displayed on the left side of the clickable component.
   */
  leftIcon?: ReactElement<typeof Svg>;
  /**
   * The icon to be displayed on the right side of the clickable component.
   */
  rightIcon?: ReactElement<typeof Svg>;
};

type Props = ClickableComponentProps & {
  className?: string;
  variant?: "ghost" | "reverse";
} & (
    | ({
        component: "a";
      } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({
        component: "button";
      } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

/**
 * Internal component to render the "ghost" style of interactive elements.
 * This component supports both anchor and button elements, and allows for optional left and right icons.
 *
 * This is used to share the look of the link and the ghost button.
 *
 * @param props The props for the ClickableGhost component.
 * @returns
 */
export const ClickableGhost = ({
  children,
  className,
  leftIcon,
  rightIcon,
  variant = "ghost",
  ...props
}: Props) => {
  const componentClassName = getClassName({
    baseClassName: linkClassName,
    modifiers: [variant === "reverse" ? "reverse" : ""],
    className,
  });

  if (props.component === "a") {
    return (
      <a className={componentClassName} {...props}>
        {leftIcon}
        {children}
        {rightIcon}
      </a>
    );
  }

  return (
    <button className={componentClassName} type="button" {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};
