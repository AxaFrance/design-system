import arrowDropDown from "@material-symbols/svg-400/outlined/arrow_drop_down.svg";
import arrowDropUp from "@material-symbols/svg-400/outlined/arrow_drop_up.svg";
import React from "react";
import { components, DropdownIndicatorProps } from "react-select";
import classNames from "classnames";
import { Svg } from "../../../Svg";

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
  const {
    selectProps: { menuIsOpen, isDisabled },
  } = props;

  return (
    <components.DropdownIndicator {...props}>
      <Svg
        src={menuIsOpen ? arrowDropUp : arrowDropDown}
        className={classNames(
          isDisabled && "af-form__input-select-container-icon-disabled",
        )}
      />
    </components.DropdownIndicator>
  );
};

export { DropdownIndicator };
