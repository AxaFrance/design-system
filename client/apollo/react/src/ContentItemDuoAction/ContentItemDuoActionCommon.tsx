import { type ComponentType, type ReactElement } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
import type { ToggleProps } from "../Toggle/ToggleCommon";
import type { ContentItemProps } from "../ContentItemMono/ContentItemMonoCommon";
import type { ButtonProps } from "../Button/ButtonCommon";

export const ContentItemDuoActionState = {
  edit: "edit",
  toggle: "toggle",
} as const;

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
  const componentClassName = getComponentClassName(
    "af-content-item-duo-action",
    className,
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
