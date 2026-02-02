import { type ComponentPropsWithRef } from "react";
import unfoldMore from "@material-symbols/svg-400/rounded/unfold_more-fill.svg";
import { getClassName } from "../utilities/getClassName";
import { Checkbox } from "../Form/Checkbox/Checkbox/CheckboxCommon";
import { ClickIcon } from "../ClickIcon/ClickIconCommon";

export type HeaderCellPositionVariants = "left" | "center" | "right";

export type ThProps = ComponentPropsWithRef<"th"> & {
  position?: HeaderCellPositionVariants;
  checkboxPosition?: HeaderCellPositionVariants;
  onCheck?: () => void;
  onSort?: () => void;
};

export const Th = ({
  position = "left",
  onCheck,
  checkboxPosition = "left",
  onSort,
  className,
  children,
  id,
  ...tableHeaderProps
}: ThProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__th",
    className,
    modifiers: [position, checkboxPosition && `checkbox-${checkboxPosition}`],
  });
  return (
    <th id={id} className={componentClassName} {...tableHeaderProps}>
      <div className="af-table__th-wrapper">
        {onCheck ? <Checkbox onChange={onCheck} /> : null}
        <span className="af-table__th-content">{children}</span>
        {onSort ? (
          <ClickIcon
            onClick={onSort}
            src={unfoldMore}
            variant="ghost"
            className="af-table__th-sort-icon"
          />
        ) : null}
      </div>
    </th>
  );
};
