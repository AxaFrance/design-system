import { useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { Toggle, ToggleProps } from "../Toggle/ToggleCommon";
import { ContentItemProps } from "../ContentItemMono/ContentItemMonoCommon";

export type ContentItemDuoActionCommonProps = {
  mode: "toggle" | "edit";
  toggleProps?: ToggleProps;
  className?: string;
  editButton?: React.ReactNode;
  deleteButton?: React.ReactNode;
  contentItemMono: React.ReactNode;
};

export type ContentItemDuoActionProps = Omit<
  ContentItemDuoActionCommonProps,
  "editButton" | "deleteButton" | "contentItemMono"
> & {
  onEditButtonClick?: () => void;
  onDeleteButtonClick?: () => void;
  contentItemProps: ContentItemProps;
};

export const ContentItemDuoActionCommon = ({
  className,
  mode,
  toggleProps,
  editButton,
  deleteButton,
  contentItemMono,
}: ContentItemDuoActionCommonProps) => {
  const componentClassName = useMemo(
    () => getComponentClassName("af-content-item-duo-action", className),
    [className],
  );

  return (
    <div className={componentClassName}>
      {contentItemMono}
      {mode === "toggle" ? (
        <Toggle {...toggleProps} />
      ) : (
        <div className="af-content-item-duo-action__edit">
          {editButton}
          {deleteButton}
        </div>
      )}
    </div>
  );
};
