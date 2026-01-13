import type { ComponentProps, ComponentType, PropsWithChildren } from "react";
import classNames from "classnames";
import { CardCommon } from "../Card/CardCommon";
import { Icon, type IconProps } from "../Icon/IconCommon";
import { ContentItemMonoCore } from "../ContentItemMono/ContentItemMonoCore";

export type FieldsetProps = PropsWithChildren<{
  title: string;
  iconProps?: IconProps;
  className?: string;
}>;

export type FieldsetCommonProps = FieldsetProps & {
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
  CardComponent: ComponentType<ComponentProps<typeof CardCommon>>;
};

export const FieldsetCommon = ({
  children,
  title,
  iconProps,
  className,
  IconComponent,
  CardComponent,
}: FieldsetCommonProps) => {
  const iconComponent = iconProps && (
    <IconComponent aria-hidden="true" {...iconProps} />
  );

  return (
    <CardComponent
      as="fieldset"
      className={classNames("af-fieldset", className)}
    >
      <ContentItemMonoCore
        as="legend"
        title={title}
        leftComponent={iconComponent}
      />
      <div className="af-fieldset__content">{children}</div>
    </CardComponent>
  );
};
