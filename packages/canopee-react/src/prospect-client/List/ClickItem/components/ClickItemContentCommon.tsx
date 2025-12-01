import { ComponentType } from "react";
import type { TagProps } from "../../../Tag/TagCommon";

export type ClickItemContentProps = {
  title: string;
  subtitle?: string;
  textSecondary?: string;
  textTertiary?: string;
  tagLabel?: string;
  tagProps?: TagProps;
};

export type ClickItemContentCommonProps = ClickItemContentProps & {
  TagComponent: ComponentType<TagProps>;
};

export const ClickItemContentCommon = ({
  title,
  subtitle,
  textSecondary,
  textTertiary,
  tagLabel,
  tagProps,
  TagComponent,
}: ClickItemContentCommonProps) => {
  return (
    <>
      <p className="af-apollo-click-item__title">{title}</p>
      {subtitle ? (
        <p className="af-apollo-click-item__subtitle">{subtitle}</p>
      ) : null}
      {textSecondary ? (
        <p className="af-apollo-click-item__secondary">{textSecondary}</p>
      ) : null}
      {textTertiary ? (
        <p className="af-apollo-click-item__tertiary">{textTertiary}</p>
      ) : null}
      {tagLabel ? (
        <div className="af-apollo-click-item__tag-container">
          <TagComponent {...tagProps}>{tagLabel}</TagComponent>
        </div>
      ) : null}
    </>
  );
};
