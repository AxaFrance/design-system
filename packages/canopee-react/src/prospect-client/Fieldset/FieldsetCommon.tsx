import type { ComponentProps, ComponentType, PropsWithChildren } from "react";
import { CardCommon } from "../Card/CardCommon";
import { Icon, type IconProps } from "../Icon/IconCommon";
import { ContentItemMonoCore } from "../ContentItemMono/ContentItemMonoCore";

export type FieldsetProps = PropsWithChildren<{
  title: string;
  iconProps?: IconProps;
  /**
   * @deprecated Use `iconProps` instead.
   */
  icon?: string;
  className?: string;
}>;

export type FieldsetCommonProps = FieldsetProps & {
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
};

export const FieldsetCommon = ({
  children,
  title,
  icon,
  iconProps,
  className,
  IconComponent,
}: FieldsetCommonProps) => {
  const iconComponent =
    (iconProps && (
      <IconComponent data-testid="fieldset-icon" {...iconProps} />
    )) ||
    (icon && <IconComponent data-testid="fieldset-icon" src={icon} />);

  return (
    <CardCommon
      as="fieldset"
      className={`af-fieldset${className ? ` ${className}` : ""}`}
    >
      <ContentItemMonoCore
        as="legend"
        title={title}
        leftComponent={iconComponent}
      />
      <div className="af-fieldset__content">{children}</div>
    </CardCommon>
  );
};
