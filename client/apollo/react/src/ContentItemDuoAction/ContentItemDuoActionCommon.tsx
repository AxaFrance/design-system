import { useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { ContentItemCommonProps, ContentItemMonoCommon } from "../ContentItemMono/ContentItemMonoCommon";
import { Toggle, ToggleProps } from "../Toggle/ToggleCommon";
import { Icon } from "../Icon/IconCommon";

export type ContentItemDuoActionCommonProps = {
    contentItemProps: ContentItemCommonProps;
    mode: "toggle" | "edit";
    toggleProps?: ToggleProps;
    className?: string;
    editButton?: React.ReactNode;
    deleteButton?: React.ReactNode;
};

export type ContentItemDuoActionProps = Omit<ContentItemDuoActionCommonProps, "editButton" | "deleteButton"> & {
    onEditButtonClick?: () => void;
    onDeleteButtonClick?: () => void;
};

export const ContentItemDuoActionCommon = ({ className, contentItemProps, mode, toggleProps, editButton, deleteButton }: ContentItemDuoActionCommonProps) => {
    const componentClassName = useMemo(
        () => getComponentClassName("af-content-item-duo-action", className),
        [className],
    );

    return <div className={componentClassName}>
        <ContentItemMonoCommon {...contentItemProps} IconComponent={Icon} />
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
