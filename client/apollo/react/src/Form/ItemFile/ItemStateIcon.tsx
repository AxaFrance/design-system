import React from "react";
import classNames from "classnames";

import type { ComponentType, ComponentProps } from "react";

import validationIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import type { IconProps } from "../../Icon/IconCommon";
import { Spinner } from "../../Spinner/SpinnerCommon";

interface ItemStateIconProps {
  state: "loading" | "success" | "error";
  ItemIconComponent: ComponentType<IconProps>;
  ItemSpinnerComponent: ComponentType<ComponentProps<typeof Spinner>>;
}

const ItemStateIcon: React.FC<ItemStateIconProps> = ({
  state,
  ItemIconComponent,
  ItemSpinnerComponent,
}) =>
  state === "loading" ? (
    <ItemSpinnerComponent size={24} className="af-item-file__spinner" />
  ) : (
    <ItemIconComponent
      className={classNames("af-icon", `af-icon__${state}`)}
      size="S"
      src={state === "success" ? validationIcon : errorIcon}
    />
  );

export { ItemStateIcon };
