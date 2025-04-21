import validationIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";
import deleteFilledIcon from "@material-symbols/svg-400/outlined/delete-fill.svg";
import visibilityIcon from "@material-symbols/svg-400/outlined/visibility-fill.svg";
import {
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  type ReactElement,
  useId,
  useMemo,
} from "react";

import { ItemMessage } from "src/Form/ItemMessage/ItemMessageApollo";
import { Button } from "../../Button/ButtonCommon";
import { Link } from "../../Link/LinkCommon";
import { ClickIcon } from "../../ClickIcon/ClickIconCommon";
import { Icon } from "../../Icon/IconCommon";
import { Spinner } from "../../Spinner/SpinnerCommon";

type Headings = "h2" | "h3" | "h4" | "h5" | "h6";

export const itemFileVariants = {
  validation: "validation",
  error: "error",
  loading: "spinner",
} as const;

export type ItemFileVariants = keyof typeof itemFileVariants;

export type ItemFileProps = {
  error: string;
  variant: ItemFileVariants;
  title?: string;
  action?: ReactElement<typeof Link | typeof Button>;
  iconSize?: number;
  heading?: Headings;
} & ComponentPropsWithoutRef<"div">;

const getIconFromType = (variant: ItemFileVariants) =>
  ({
    [itemFileVariants.validation]: validationIcon,
    [itemFileVariants.error]: errorIcon,
    [itemFileVariants.loading]: <Spinner />,
  })[variant] || <Spinner />;

export const ItemFile = ({
  variant = itemFileVariants.validation,
  className,
  error,
  title,
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
        <Icon src={icon} variant="primary" size="S" />
      </div>
      <div className="af-message__content">IMG_879687880.jpg 12 Mo</div>

      <div className="af-click-icon__content">
        <ClickIcon src={visibilityIcon} />
        <ClickIcon src={deleteIcon} />
      </div>
      <ItemMessage id={idError} message={error} />
    </div>
  );
};
