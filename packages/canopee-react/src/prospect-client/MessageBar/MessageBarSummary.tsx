import type { ComponentType } from "react";
import type { IconProps } from "../Icon/IconCommon";

type MessageBarSummaryProps = {
  title: string;
  titleId: string;
  icon: string;
  iconVariant: IconProps["variant"];
  IconComponent: ComponentType<IconProps>;
};

export const MessageBarSummary = ({
  title,
  titleId,
  icon,
  iconVariant,
  IconComponent,
}: MessageBarSummaryProps) => (
  <>
    <IconComponent
      src={icon}
      className="af-message-bar__icon"
      role="presentation"
      variant={iconVariant}
    />
    <p id={titleId} className="af-message-bar__title">
      {title}
    </p>
  </>
);
