import { useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { ContentItemCommonProps, ContentItemMonoCommon, ContentItemProps } from "../ContentItemMono/ContentItemMonoCommon";
import { Toggle, ToggleProps } from "../Toggle/ToggleCommon";
import { Icon } from "../Icon/IconCommon";

export type ContentItemDuoActionCommonProps = {
    contentItemProps: ContentItemCommonProps;
    mode: "toggle" | "edit";
    toggleProps?: ToggleProps;
    className?: string;
    editButton?: React.ReactNode;
    deleteButton?: React.ReactNode;
    contentItemMono: React.ReactNode;
};

export type ContentItemDuoActionProps = Omit<ContentItemDuoActionCommonProps, "editButton" | "deleteButton" | "contentItemMono"> & {
    onEditButtonClick?: () => void;
    onDeleteButtonClick?: () => void;
    contentItemMonoProps: ContentItemProps;
};

export const ContentItemDuoActionCommon = ({ className, contentItemProps, mode, toggleProps, editButton, deleteButton, contentItemMono}: ContentItemDuoActionCommonProps) => {
    const componentClassName = useMemo(
        () => getComponentClassName("af-content-item-duo-action", className),
        [className],
    );

    return <div className={componentClassName}>
        {contentItemMono}
        {mode === "toggle" ? (
            <Toggle {...toggleProps} />
        ) : (
            <div className="af-content-item-duo-action__edit">
                {editButton}
                {deleteButton}
            </div>
        )}
    </div>;
};
