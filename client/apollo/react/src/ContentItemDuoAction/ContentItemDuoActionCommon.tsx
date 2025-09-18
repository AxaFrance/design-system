import { ComponentType, ReactElement, useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { ToggleProps } from "../Toggle/ToggleCommon";
import { ContentItemProps } from "../ContentItemMono/ContentItemMonoCommon";
import { ButtonProps } from "../Button/ButtonCommon";

export const actionStates = {
  edit: "edit",
  toggle: "toggle",
} as const;
export type ActionStates = keyof typeof actionStates;

export type ContentItemDuoActionToggleProps = {
  className?: string;
  state: "toggle";
  ContentItemMonoComponent: ComponentType<ContentItemProps>;
  contentItemProps: ContentItemProps;
  ToggleComponent: ComponentType<ToggleProps>;
  toggleProps: ToggleProps;
};

export type ContentItemDuoActionButtonsProps = {
  className?: string;
  state: "edit";
  ContentItemMonoComponent: ComponentType<ContentItemProps>;
  contentItemProps: ContentItemProps;
  buttons: ReactElement<ComponentType<ButtonProps>>;
};

export type ContentItemDuoActionProps =
  | Omit<
      ContentItemDuoActionToggleProps,
      "ToggleComponent" | "ContentItemMonoComponent"
    >
  | Omit<ContentItemDuoActionButtonsProps, "ContentItemMonoComponent">;

export type ContentItemDuoActionCommonProps =
  | ContentItemDuoActionToggleProps
  | ContentItemDuoActionButtonsProps;

export const ContentItemDuoActionCommon = ({
  className,
  state,
  ContentItemMonoComponent,
  contentItemProps,
  ToggleComponent,
  ...props
}: ContentItemDuoActionCommonProps & {
  ToggleComponent?: ComponentType<ToggleProps>;
}) => {
  const componentClassName = useMemo(
    () => getComponentClassName("af-content-item-duo-action", className),
    [className],
  );

  return (
    <div className={componentClassName}>
      <ContentItemMonoComponent {...contentItemProps} />
      {state === "edit" ? (
        <div className="af-action-edit-buttons-container">
          {(props as ContentItemDuoActionButtonsProps).buttons}
        </div>
      ) : (
        <ToggleComponent
          {...(props as ContentItemDuoActionToggleProps).toggleProps}
        />
      )}
    </div>
  );
};
