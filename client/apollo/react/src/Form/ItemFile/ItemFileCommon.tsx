import {
  ReactNode,
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ComponentType,
} from "react";

import classNames from "classnames";
import type { IconProps } from "../../Icon/IconCommon";
import { Spinner } from "../../Spinner/SpinnerCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";
import { ItemStateIcon } from "./ItemStateIcon";

export const itemFileVariants = {
  success: "success",
  error: "error",
  loading: "loading",
} as const;

type ItemFileState = keyof typeof itemFileVariants;

export type ItemFileCommonProps = {
  state: ItemFileState;
  title: string;
  subTitle: string;
  errorMessage?: string;
  deleteIcon: ReactNode;
  visibilityIcon?: ReactNode;
  success?: string;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  ItemIconComponent: ComponentType<IconProps>;
  ItemSpinnerComponent: ComponentType<ComponentProps<typeof Spinner>>;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;

export const ItemFileCommon = ({
  className,
  state,
  title,
  subTitle,
  errorMessage,
  deleteIcon,
  visibilityIcon,
  success,
  ItemSpinnerComponent,
  ItemIconComponent,
  ItemMessageComponent,
  ...props
}: ItemFileCommonProps) => {
  const classname = classNames(
    "af-item-file",
    errorMessage && "af-item-file--error",
    className,
  );

  return (
    <section className={classname} {...props}>
      <main className="af-item-file__body">
        <ItemStateIcon
          state={state}
          ItemIconComponent={ItemIconComponent}
          ItemSpinnerComponent={ItemSpinnerComponent}
        />
        <p className="af-item-file__title">{title}</p>
        <p className="af-item-file__subtitle">{subTitle}</p>
        <div aria-label="button" className="af-item-file__actions">
          {state === "success" && visibilityIcon}
          {deleteIcon}
        </div>
      </main>
      <ItemMessageComponent
        message={errorMessage ?? success}
        messageType={errorMessage ? "error" : "success"}
      />
    </section>
  );
};
