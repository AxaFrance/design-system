import classNames from "classnames";
import checkIcon from "@material-symbols/svg-700/outlined/check.svg";
import { type FormatOptionLabelMeta } from "react-select";
import { Option } from "./MultiSelect";
import { Svg } from "../..";

const formatOptionLabel = (
  data: Option,
  formatOptionLabelMeta: FormatOptionLabelMeta<Option>,
) => {
  if (formatOptionLabelMeta.context === "value") {
    return data.label;
  }

  const isChecked = formatOptionLabelMeta.selectValue.some(
    (selectValue) => data.value === selectValue.value,
  );

  return (
    <div className="react-select__multi-option-label">
      <div className="checkbox-indicator">
        <span
          className={classNames("indicator", isChecked && "checkbox-checked")}
        >
          {isChecked && <Svg src={checkIcon} />}
        </span>
      </div>
      {data.label}
    </div>
  );
};

export { formatOptionLabel };
