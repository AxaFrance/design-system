import validationIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";
// import deleteFilledIcon from "@material-symbols/svg-400/outlined/delete-fill.svg";
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
import { Spinner } from "../../Spinner/SpinnerCommon";
import { ClickIcon } from "../../ClickIcon/ClickIconCommon";
import { Icon } from "../../Icon/IconCommon";

export const itemFileVariants = {
  validation: "validation",
  error: "error",
} as const;

type ItemFileVariants = keyof typeof itemFileVariants;

type ItemFileProps = {
  error?: string;
  loading?: string;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  ItemIconComponent: ComponentType<ComponentProps<typeof Icon>>;
  ItemClickIconComponent: ComponentType<ComponentProps<typeof ClickIcon>>;
  ItemSpinnerComponent: ComponentType<ComponentProps<typeof Spinner>>;
  variant?: ItemFileVariants;
  title?: string;
  subTitle?: string;
} & ComponentPropsWithoutRef<"div">;

const getIconFromType = (variant: ItemFileVariants) =>
  ({
    [itemFileVariants.validation]: validationIcon,
    [itemFileVariants.error]: errorIcon,
  })[variant];

const ItemFile = ({
  variant = itemFileVariants.validation,
  className,
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
      className={["af-message", `af-message--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      role="alert"
    >
      <div className="af-icon__content">
        {loading ? (
          <ItemSpinnerComponent />
        ) : (
          <ItemIconComponent variant="primary" size="S" src={icon} />
        )}
      </div>

      <div className="af-message__content">{title}</div>
      <div className="af-message__content">{subTitle}</div>

      <div className="af-click-icon__content">
        <ItemClickIconComponent src={visibilityIcon} />
        <ItemClickIconComponent src={deleteIcon} />
      </div>
      <ItemMessageComponent id={idError} message={error} />
    </div>
  );
};
ItemFile.displayName = "ItemFile";

export { ItemFile };
