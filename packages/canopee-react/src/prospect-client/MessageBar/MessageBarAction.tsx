import type { ComponentType } from "react";
import type { ButtonProps } from "../Button/ButtonCommon";
import { getClassName } from "../utilities/getClassName";

type MessageBarActionProps = {
  buttonProps?: ButtonProps;
  ButtonComponent: ComponentType<ButtonProps>;
};

export const MessageBarAction = ({
  buttonProps,
  ButtonComponent,
}: MessageBarActionProps) =>
  buttonProps ? (
    <ButtonComponent
      {...buttonProps}
      className={getClassName({
        baseClassName: "af-message-bar__action",
        className: buttonProps.className,
      })}
    />
  ) : null;
