import { useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { ToggleProps } from "../Toggle/ToggleCommon";
import { ContentItemProps } from "../ContentItemMono/ContentItemMonoCommon";

export enum ActionMode {
  edit = "edit",
  toggle = "toggle",
}
export type ContentItemDuoActionCommonProps = {
  className?: string;
  action?: React.ReactNode;
  contentItemMono: React.ReactNode;
};

export type ContentItemDuoActionProps = Omit<
  ContentItemDuoActionCommonProps,
  "contentItemMono" | "action"
> & {
  mode: ActionMode;
  contentItemProps: ContentItemProps;
  toggleProps?: ToggleProps;
  onEditButtonClick?: () => void;
  onDeleteButtonClick?: () => void;
};

export const ContentItemDuoActionCommon = ({
  className,
  contentItemMono,
  action,
}: ContentItemDuoActionCommonProps) => {
  const componentClassName = useMemo(
    () => getComponentClassName("af-content-item-duo-action", className),
    [className],
  );

  return (
    <div className={componentClassName}>
      {contentItemMono}
      {action}
    </div>
  );
};
