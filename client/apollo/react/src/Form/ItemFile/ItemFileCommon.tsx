import visibilityIcon from "@material-symbols/svg-400/outlined/visibility-fill.svg";

import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ComponentType,
  useId,
} from "react";

import classNames from "classnames";
import { ItemStateIcon } from "./ItemStateIcon";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";
import { Spinner } from "../../Spinner/SpinnerCommon";
import type { ClickIconProps } from "../../ClickIcon/ClickIconCommon";
import type { IconProps } from "../../Icon/IconCommon";

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
  deleteIcon: string;
  success?: string;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  ItemIconComponent: ComponentType<IconProps>;
  ItemClickIconComponent: ComponentType<ClickIconProps>;
  ItemSpinnerComponent: ComponentType<ComponentProps<typeof Spinner>>;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;

export const ItemFileCommon = ({
  className,
  state,
  title,
  subTitle,
  errorMessage,
  deleteIcon,
  success,
  ItemSpinnerComponent,
  ItemClickIconComponent,
  ItemIconComponent,
  ItemMessageComponent,
  ...props
}: ItemFileCommonProps) => {
  const idMessage = useId();

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
        <div className="af-item-file__actions" aria-label="File actions">
          {state === "success" && (
            <ItemClickIconComponent src={visibilityIcon} />
          )}
          <ItemClickIconComponent src={deleteIcon} />
        </div>
      </main>
      <ItemMessageComponent
        id={idMessage}
        message={errorMessage ?? success}
        messageType={errorMessage ? "error" : "success"}
      />
    </section>
  );
};
