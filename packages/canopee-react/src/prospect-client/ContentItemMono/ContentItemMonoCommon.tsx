import type { ComponentProps, ComponentType } from "react";
import { Icon, IconProps } from "../Icon/IconCommon";
import { BasePicture } from "../BasePicture/BasePicture";
import {
  type ContentItemCoreProps,
  ContentItemMonoCore,
} from "./ContentItemMonoCore";

export type ContentMonoItemSize = "medium" | "large";

export type ContentMonoItemPictureProps = {
  type: "picture";
  size?: ContentMonoItemSize;
  picture: string;
  title: string;
  subtitle: string;
};

export type ContentMonoItemIconProps = {
  type: "icon";
  /**
   * @deprecated Use `iconProps` instead.
   */
  title?: string;
  subtitle1?: string;
  subtitle2?: string;
  icon?: string;
  iconProps?: IconProps;
};

export type ContentMonoItemStickProps = {
  type: "stick";
  title: string;
  subtitle?: string;
};

export type ContentItemProps =
  | ContentMonoItemPictureProps
  | ContentMonoItemIconProps
  | ContentMonoItemStickProps;

export type ContentItemCommonProps = ContentItemProps & {
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
};

export const getContentItemCoreProps = ({
  IconComponent,
  type,
  ...props
}: ContentItemCommonProps): ContentItemCoreProps => {
  if (type === "icon") {
    const { icon, iconProps, title, subtitle1, subtitle2 } =
      props as ContentMonoItemIconProps;

    return {
      title,
      primarySubtitle: subtitle1,
      subtitle: subtitle2,
      leftComponent:
        (iconProps && <IconComponent data-testid="icon" {...iconProps} />) ||
        (icon && <IconComponent data-testid="icon" src={icon} />),
    } as ContentItemCoreProps;
  }

  if (type === "picture") {
    return {
      ...props,
      leftComponent: (
        <BasePicture
          src={(props as ContentMonoItemPictureProps).picture}
          alt={props.title}
        />
      ),
    } as ContentItemCoreProps;
  }

  return {
    ...props,
    leftComponent: <div className="stick" />,
  } as ContentItemCoreProps;
};

export const ContentItemMonoCommon = (props: ContentItemCommonProps) => {
  return <ContentItemMonoCore {...getContentItemCoreProps(props)} />;
};
