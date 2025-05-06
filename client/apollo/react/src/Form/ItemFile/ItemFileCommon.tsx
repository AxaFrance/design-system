import validationIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";
import visibilityIcon from "@material-symbols/svg-400/outlined/visibility-fill.svg";
import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type PropsWithChildren,
  useId,
  useMemo,
} from "react";

import { ItemMessage } from "../ItemMessage/ItemMessageCommon";
import { Spinner, spinnerVariants } from "../../Spinner/SpinnerCommon";
import { ClickIcon } from "../../ClickIcon/ClickIconCommon";
import { Icon } from "../../Icon/IconCommon";

export const itemFileVariants = {
  success: "success",
  error: "error",
  loading: "loading",
} as const;

type ItemFileVariants = keyof typeof itemFileVariants;

type ItemFileProps = {
  success: boolean;
  error: string;
  loading: boolean;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  ItemIconComponent: ComponentType<ComponentProps<typeof Icon>>;
  ItemClickIconComponent: ComponentType<ComponentProps<typeof ClickIcon>>;
  ItemSpinnerComponent: ComponentType<ComponentProps<typeof Spinner>>;
  variant?: ItemFileVariants;
  title: string;
  subTitle: string;
} & ComponentPropsWithoutRef<"div">;

const getIconFromType = (variant: ItemFileVariants) =>
  ({
    [itemFileVariants.success]: validationIcon,
    [itemFileVariants.error]: errorIcon,
    [itemFileVariants.loading]: errorIcon,
  })[variant];

export const ItemFile = ({
  variant = itemFileVariants.success,
  className,
  success,
  error,
  loading,
  title,
  subTitle,
  ItemSpinnerComponent,
  ItemClickIconComponent,
  ItemIconComponent,
  ItemMessageComponent,
}: PropsWithChildren<ItemFileProps>) => {
  const icon = useMemo(() => getIconFromType(variant), [variant]);
  const idError = useId();

  return (
    <div
      className={["af-item-file", `af-item-file--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      role="alert"
    >
      <div className="af-icon">
        {loading ? (
          <ItemIconComponent
            variant="primary"
            className="item-file-icon"
            size="S"
            src={icon}
          />
        ) : (
          <ItemSpinnerComponent size={24} variant={spinnerVariants.blue} />
        )}
        <div>
          <div className="af-item-file-title">{title} IMG_879687880.jpg</div>
          <div className="af-item-file-subtitle">{subTitle} 0.12 Mo</div>
        </div>
      </div>

      <div className="af-click-icon__content">
        {success ? (
          <>
            <ItemClickIconComponent src={visibilityIcon} />
            <ItemClickIconComponent src={deleteIcon} />
          </>
        ) : (
          <ItemClickIconComponent src={deleteIcon} />
        )}
      </div>
      <ItemMessageComponent id={idError} message={error} />
    </div>
  );
};
