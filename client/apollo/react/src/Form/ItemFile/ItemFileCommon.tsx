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
  helper: string;
  subTitle: string;
  errorMessage?: string;
  deleteIcon: string;
  success?: string;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  ItemIconComponent: ComponentType<IconProps>;
  ItemClickIconComponent: ComponentType<ClickIconProps>;
  ItemSpinnerComponent: ComponentType<ComponentProps<typeof Spinner>>;
} & ComponentPropsWithoutRef<"div">;

export const ItemFileCommon = ({
  state,
  helper,
  title,
  subTitle,
  errorMessage,
  deleteIcon,
  success,
  ItemSpinnerComponent,
  ItemClickIconComponent,
  ItemIconComponent,
  ItemMessageComponent,
}: ItemFileCommonProps) => {
  const idHelp = useId();
  const idMessage = useId();

  const classname = classNames(
    "af-item-file",
    errorMessage && "af-item-file--error",
  );

  return (
    <section className={classname} role="alert" aria-describedby={idHelp}>
      <div className="af-item-file__header">
        <ItemStateIcon
          state={state}
          ItemIconComponent={ItemIconComponent}
          ItemSpinnerComponent={ItemSpinnerComponent}
        />

        <div>
          <h1 className="af-item-file__title">{title}</h1>
          <p className="af-item-file__subtitle">{subTitle}</p>
        </div>
      </div>

      <div className="af-item-file__actions" aria-label="File actions">
        {state === "success" && <ItemClickIconComponent src={visibilityIcon} />}
        <ItemClickIconComponent src={deleteIcon} />
      </div>

      {helper && (
        <span id={idHelp} className="af-form__input-helper">
          {helper}
        </span>
      )}
      <ItemMessageComponent
        id={idMessage}
        message={errorMessage || success}
        messageType={errorMessage ? "error" : "success"}
      />
    </section>
  );
};
