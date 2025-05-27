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
import type { ClickIconProps } from "../../ClickIcon/ClickIconCommon";
import type { IconProps } from "../../Icon/IconCommon";

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
  deleteIcon: string;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  ItemIconComponent: ComponentType<IconProps>;
  ItemClickIconComponent: ComponentType<ClickIconProps>;
  ItemSpinnerComponent: ComponentType<ComponentProps<typeof Spinner>>;
  deleteIconProps?: Partial<ClickIconProps>;
  visiibilityIconProps?: Partial<ClickIconProps>;
} & ComponentPropsWithoutRef<"div">;

export const ItemFileCommon = ({
  state,
  helper,
  title,
  subTitle,
  errorMessage,
  deleteIcon,
  ItemSpinnerComponent,
  ItemClickIconComponent,
  ItemIconComponent,
  ItemMessageComponent,
  deleteIconProps = {},
  visiibilityIconProps = {},
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

    return (
      <ItemIconComponent
        className={`af-icon__${state}`}
        size="S"
        src={state === "success" ? validationIcon : errorIcon}
      />
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
              <ItemClickIconComponent
                src={visibilityIcon}
                {...visiibilityIconProps}
              />
              <ItemClickIconComponent src={deleteIcon} {...deleteIconProps} />
            </>
          ) : (
            <ItemClickIconComponent src={deleteIcon} {...deleteIconProps} />
          )}
        </div>
        {helper && (
          <span id={idHelp} className="af-form__input-helper">
            {helper}
          </span>
        )}
      </div>
      <div className="af-item-file__message af-item-message--error" />
      {errorMessage && (
        <ItemMessageComponent id={idMessage} message={errorMessage} />
      )}
    </div>
  );
};
