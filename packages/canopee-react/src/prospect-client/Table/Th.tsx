import { type ComponentPropsWithRef, useId } from "react";
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
  /** Sort state of the column, set as `aria-sort` when `onSort` is set */
  sortDirection?: "ascending" | "descending" | "none";
  /**
   * Accessible name of the sort button. By default, "Trier par" followed by
   * the header text, or "Trier la colonne" without text.
   */
  sortLabel?: string;
  /** Accessible name of the checkbox, defaults to "Tout sélectionner" */
  checkboxLabel?: string;
};

export const Th = ({
  position = "left",
  onCheck,
  checkboxPosition = "left",
  onSort,
  sortDirection,
  sortLabel,
  checkboxLabel = "Tout sélectionner",
  className,
  children,
  ...tableHeaderProps
}: ThProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__th",
    className,
    modifiers: [position, checkboxPosition && `checkbox-${checkboxPosition}`],
  });
  const contentId = useId();
  const sortPrefixId = `${contentId}-sort`;
  const hasText = Boolean(children);
  // The checkbox and the sort button would join the name of the column header
  const isNamedByContent =
    Boolean(onCheck || onSort) &&
    hasText &&
    !tableHeaderProps["aria-label"] &&
    !tableHeaderProps["aria-labelledby"];
  const isSortNamedByContent = Boolean(onSort) && !sortLabel && hasText;

  return (
    <th
      className={componentClassName}
      aria-sort={onSort ? sortDirection : undefined}
      aria-labelledby={isNamedByContent ? contentId : undefined}
      {...tableHeaderProps}
    >
      <div className="af-table__th-wrapper">
        {onCheck ? (
          <Checkbox onChange={onCheck} aria-label={checkboxLabel} />
        ) : null}
        <span id={contentId} className="af-table__th-content">
          {children}
        </span>
        {isSortNamedByContent ? (
          <span id={sortPrefixId} hidden>
            Trier par
          </span>
        ) : null}
        {onSort ? (
          <ClickIcon
            onClick={onSort}
            aria-label={
              isSortNamedByContent
                ? undefined
                : (sortLabel ?? "Trier la colonne")
            }
            aria-labelledby={
              isSortNamedByContent ? `${sortPrefixId} ${contentId}` : undefined
            }
            src={unfoldMore}
            variant="ghost"
            className="af-table__th-sort-icon"
          />
        ) : null}
      </div>
    </th>
  );
};
