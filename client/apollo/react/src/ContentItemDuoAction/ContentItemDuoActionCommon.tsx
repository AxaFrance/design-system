import { ComponentType, MouseEventHandler, useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { ToggleProps } from "../Toggle/ToggleCommon";
import { ContentItemProps } from "../ContentItemMono/ContentItemMonoCommon";
import { ButtonProps } from "../Button/ButtonCommon";

export type ActionMode = "edit" | "toggle";
export type ContentItemDuoActionCommonProps = {
  className?: string;
  mode: ActionMode;
  ButtonComponent: ComponentType<ButtonProps>;
  editProps?: EditProps;
  ContentItemMonoComponent: ComponentType<ContentItemProps>;
  contentItemProps: ContentItemProps;
  ToggleComponent: ComponentType<ToggleProps>;
  toggleProps?: ToggleProps;
};

export type EditProps = {
  onEditButtonClick?: MouseEventHandler<HTMLButtonElement>;
  onDeleteButtonClick?: MouseEventHandler<HTMLButtonElement>;
};

export type ContentItemDuoActionProps = ContentItemDuoActionCommonProps & {};

export const ContentItemDuoActionCommon = ({
  className,
  mode,
  ToggleComponent,
  toggleProps,
  ButtonComponent,
  editProps,
  ContentItemMonoComponent,
  contentItemProps,
}: ContentItemDuoActionCommonProps) => {
  const componentClassName = useMemo(
    () => getComponentClassName("af-content-item-duo-action", className),
    [className],
  );
  const createAction = ({
    onEditButtonClick,
    onDeleteButtonClick,
  }: EditProps) => {
    if (mode === "edit") {
      return (
        <div className="af-action-edit-buttons-container">
          <ButtonComponent onClick={onEditButtonClick} variant="ghost">
            Modifier
          </ButtonComponent>
          <ButtonComponent onClick={onDeleteButtonClick} variant="ghost">
            Supprimer
          </ButtonComponent>
        </div>
      );
    }
    return <ToggleComponent {...toggleProps} />;
  };
  return (
    <div className={componentClassName}>
      <ContentItemMonoComponent {...contentItemProps} />
      {createAction({ ...editProps })}
    </div>
  );
};
