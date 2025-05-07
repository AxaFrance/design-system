import validationIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";
import visibilityIcon from "@material-symbols/svg-400/outlined/visibility-fill.svg";

import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ComponentType,
  useId,
} from "react";

import { ItemMessage } from "../ItemMessage/ItemMessageCommon";
import { Spinner, spinnerVariants } from "../../Spinner/SpinnerCommon";
import { ClickIcon } from "../../ClickIcon/ClickIconCommon";
import { Icon } from "../../Icon/IconCommon";

export const itemFileStates = {
  success: "success",
  error: "error",
  loading: "loading",
} as const;

type ItemFileState = keyof typeof itemFileStates;

type ItemFileProps = {
  state: ItemFileState;
  title: string;
  subTitle: string;
  errorMessage?: string;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  ItemIconComponent: ComponentType<ComponentProps<typeof Icon>>;
  ItemClickIconComponent: ComponentType<ComponentProps<typeof ClickIcon>>;
  ItemSpinnerComponent: ComponentType<ComponentProps<typeof Spinner>>;
} & ComponentPropsWithoutRef<"div">;

export const ItemFile = ({
  state = "success",
  title,
  subTitle,
  errorMessage,
  ItemSpinnerComponent,
  ItemClickIconComponent,
  ItemIconComponent,
  ItemMessageComponent,
}: ItemFileProps) => {
  const idError = useId();

  const getIconByState = () => {
    if (state === "loading") {
      return <ItemSpinnerComponent size={24} variant={spinnerVariants.blue} />;
    }

    const iconSrc = state === "success" ? validationIcon : errorIcon;

    return (
      <ItemIconComponent
        variant="primary"
        className="item-file-icon"
        size="S"
        src={iconSrc}
      />
    );
  };

  return (
    <div className="af-item-file" role="alert">
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
            <ItemClickIconComponent src={deleteIcon} />
          </>
        ) : (
          <ItemClickIconComponent src={deleteIcon} />
        )}
      </div>

      {state === "error" && (
        <ItemMessageComponent id={idError} message={errorMessage} />
      )}
    </div>
  );
};
