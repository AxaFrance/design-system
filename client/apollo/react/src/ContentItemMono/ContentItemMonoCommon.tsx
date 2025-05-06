import { ComponentProps, ComponentType } from "react";
import { Icon } from "../Icon/IconCommon";
import { BasePicture } from "../BasePicture/BasePictureCommon";
import {
  ContentItemCoreProps,
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
  icon: string;
  title: string;
  subtitle1?: string;
  subtitle2?: string;
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
  BasePictureComponent: ComponentType<ComponentProps<typeof BasePicture>>;
};

export const getContentItemCoreProps = ({
  IconComponent,
  BasePictureComponent,
  type,
  ...props
}: ContentItemCommonProps): ContentItemCoreProps => {
  if (type === "icon") {
    const { icon, title, subtitle1, subtitle2 } =
      props as ContentMonoItemIconProps;

    return {
      title,
      primarySubtitle: subtitle1,
      subtitle: subtitle2,
      leftComponent: <IconComponent data-testid="icon" src={icon} />,
    };
  }

  if (type === "picture") {
    return {
      ...props,
      leftComponent: (
        <BasePictureComponent
          src={(props as ContentMonoItemPictureProps).picture}
          alt={props.title}
        />
      ),
    };
  }

  return props;
};

export const ContentItemMonoCommon = (props: ContentItemCommonProps) => {
  return <ContentItemMonoCore {...getContentItemCoreProps(props)} />;
};
