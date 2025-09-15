import {
  ReactNode,
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ComponentType,
} from "react";

import classNames from "classnames";
import type { IconProps } from "../../Icon/IconCommon";
import { Spinner } from "../../Spinner/SpinnerCommon";
import {
  ItemMessage,
  type ItemMessageProps,
} from "../ItemMessage/ItemMessageCommon";
import { ItemStateIcon } from "./ItemStateIcon";

export const itemFileVariants = {
  success: "success",
  error: "error",
  loading: "loading",
} as const;

export type ItemFileState = keyof typeof itemFileVariants;

export type ItemFileProps = {
  state: ItemFileState;
  ariaLabelVisibility?: string;
  ariaLabelDelete?: string;
  filename?: string;
  title: string;
  subTitle: string;
  deleteIcon: ReactNode;
  visibilityIcon?: ReactNode;
  /**
   * @deprecated Use `message` and messageType instead.
   */
  errorMessage?: string;
  /**
   * @deprecated Use `message` and messageType instead.
   */
  success?: string;
} & Omit<ComponentPropsWithoutRef<"section">, "children"> &
  Partial<ItemMessageProps>;

export type ItemFileCommonProps = ItemFileProps & {
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  ItemIconComponent: ComponentType<IconProps>;
  ItemSpinnerComponent: ComponentType<ComponentProps<typeof Spinner>>;
};

export const ItemFileCommon = ({
  className,
  state,
  title,
  subTitle,
  errorMessage,
  deleteIcon,
  visibilityIcon,
  success,
  message,
  messageType,
  ItemSpinnerComponent,
  ItemIconComponent,
  ItemMessageComponent,
  ...props
}: ItemFileCommonProps) => {
  const hasError =
    (Boolean(message) && messageType === "error") || Boolean(errorMessage);

  const classname = classNames(
    "af-item-file",
    hasError && "af-item-file--error",
    className,
  );

  return (
    <section className={classname} {...props}>
      <div className="af-item-file__body">
        <ItemStateIcon
          state={state}
          ItemIconComponent={ItemIconComponent}
          ItemSpinnerComponent={ItemSpinnerComponent}
        />
        <p className="af-item-file__title">{title}</p>
        <p className="af-item-file__subtitle">{subTitle}</p>
        <div className="af-item-file__actions">
          {state === "success" && visibilityIcon}
          {deleteIcon}
        </div>
      </div>
      <ItemMessageComponent
        message={message || errorMessage || success}
        messageType={messageType || (errorMessage ? "error" : "success")}
      />
    </section>
  );
};
