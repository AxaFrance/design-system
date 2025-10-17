import {
  type ComponentPropsWithoutRef,
  type ComponentType,
  type MouseEvent,
} from "react";

import classNames from "classnames";
import type { ClickIconProps } from "../../../ClickIcon/ClickIconCommon";
import type { IconProps } from "../../../Icon/IconCommon";
import type { SpinnerProps } from "../../../Spinner/SpinnerCommon";
import type { ItemMessageProps } from "../../ItemMessage/ItemMessageCommon";
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
  onDeleteClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onVisibilityClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  subTitle: string;
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
  ItemMessageComponent: ComponentType<ItemMessageProps>;
  ItemIconComponent: ComponentType<IconProps>;
  ItemSpinnerComponent: ComponentType<SpinnerProps>;
  ClickIconComponent: ComponentType<ClickIconProps>;
  deleteIcon: string;
  visibilityIcon: string;
};

export const ItemFileCommon = ({
  className,
  state,
  filename,
  title,
  subTitle,
  errorMessage,
  success,
  message,
  messageType,
  onDeleteClick,
  onVisibilityClick,
  ariaLabelDelete,
  ariaLabelVisibility,
  deleteIcon,
  visibilityIcon,
  ItemSpinnerComponent,
  ItemIconComponent,
  ItemMessageComponent,
  ClickIconComponent,
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
          {state === "success" && (
            <ClickIconComponent
              src={visibilityIcon}
              onClick={onVisibilityClick}
              aria-label={
                ariaLabelVisibility || `Observer le fichier ${filename}`
              }
            />
          )}
          <ClickIconComponent
            src={deleteIcon}
            onClick={onDeleteClick}
            aria-label={ariaLabelDelete || `Suppression du fichier ${filename}`}
          />
        </div>
      </div>
      <ItemMessageComponent
        message={message || errorMessage || success}
        messageType={messageType || (errorMessage ? "error" : "success")}
      />
    </section>
  );
};
