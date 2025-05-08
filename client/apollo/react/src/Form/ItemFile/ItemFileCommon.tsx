import validationIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import visibilityIcon from "@material-symbols/svg-400/outlined/visibility-fill.svg";

import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ComponentType,
  useId,
} from "react";

import classNames from "classnames";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";
import { Spinner } from "../../Spinner/SpinnerCommon";
import { ClickIcon } from "../../ClickIcon/ClickIconCommon";
import { Icon } from "../../Icon/IconCommon";

export const itemFileStates = {
  success: "success",
  error: "error",
  loading: "loading",
} as const;

type ItemFileState = keyof typeof itemFileStates;

export type ItemFileCommonProps = {
  state: ItemFileState;
  title: string;
  helper: string;
  subTitle: string;
  errorMessage?: string;
  icon?: string;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  ItemIconComponent: ComponentType<ComponentProps<typeof Icon>>;
  ItemClickIconComponent: ComponentType<ComponentProps<typeof ClickIcon>>;
  ItemSpinnerComponent: ComponentType<ComponentProps<typeof Spinner>>;
} & ComponentPropsWithoutRef<"div">;

export const ItemFileCommon = ({
  state,
  helper,
  title,
  subTitle,
  errorMessage,
  icon,
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

  const getIconByState = () => {
    if (state === "loading") {
      return (
        <div className="af-item-file--spinner">
          <ItemSpinnerComponent size={24} />
        </div>
      );
    }

    const iconSrc = state === "success" ? validationIcon : errorIcon;
    const classNameByState =
      state === "success" ? "af-icon__success" : "af-icon__error";

    return (
      <ItemIconComponent className={classNameByState} size="S" src={iconSrc} />
    );
  };

  return (
    <div>
      <div className={classname} role="alert">
        <div className="af-icon">
          {getIconByState()}

          <div>
            <div className="af-item-file-title">{title}</div>
            <div className="af-item-file-subtitle">{subTitle}</div>
          </div>
        </div>

        <div className="af-click-icon__content">
          {state === "success" ? (
            <>
              <ItemClickIconComponent src={visibilityIcon} />
              <ItemClickIconComponent src={icon} />
            </>
          ) : (
            <ItemClickIconComponent src={icon} />
          )}
        </div>
        {helper && (
          <span id={idHelp} className="af-form__input-helper">
            {helper}
          </span>
        )}
      </div>
      {errorMessage && (
        <ItemMessageComponent id={idMessage} message={errorMessage} />
      )}
    </div>
  );
};
