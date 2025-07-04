import classNames from "classnames";

import type { ComponentType, ComponentProps } from "react";

import validationIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import type { IconProps } from "../../Icon/IconCommon";
import { Spinner } from "../../Spinner/SpinnerCommon";
import { ItemFileState } from "./ItemFileCommon";

interface ItemStateIconProps {
  state: ItemFileState;
  ItemIconComponent: ComponentType<IconProps>;
  ItemSpinnerComponent: ComponentType<ComponentProps<typeof Spinner>>;
}

const ItemStateIcon = ({
  state,
  ItemIconComponent,
  ItemSpinnerComponent,
}: ItemStateIconProps) => {
  const classname = classNames("af-icon", `af-icon__${state}`);
  return state === "loading" ? (
    <ItemSpinnerComponent size={24} className="af-item-file__spinner" />
  ) : (
    <ItemIconComponent
      className={classname}
      size="S"
      src={state === "success" ? validationIcon : errorIcon}
    />
  );
};

export { ItemStateIcon };
