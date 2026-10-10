import type { ComponentType } from "react";
import type { TagProps } from "../../../Tag/TagCommon";

export type ClickItemContentProps = {
  title: string;
  subtitle?: string;
  textSecondary?: string;
  textTertiary?: string;
  tagLabel?: string;
  tagProps?: TagProps;
};

export type ClickItemContentPart =
  | "title"
  | "subtitle"
  | "secondary"
  | "tertiary"
  | "tag";

export const getClickItemContentId = (
  idPrefix: string,
  part: ClickItemContentPart,
) => `${idPrefix}-${part}`;

export type ClickItemContentComponentProps = ClickItemContentProps & {
  /** Prefix of the ids the item uses to name and describe its action */
  idPrefix?: string;
};

export type ClickItemContentCommonProps = ClickItemContentComponentProps & {
  TagComponent: ComponentType<TagProps>;
};

export const ClickItemContentCommon = ({
  title,
  subtitle,
  textSecondary,
  textTertiary,
  tagLabel,
  tagProps,
  idPrefix,
  TagComponent,
}: ClickItemContentCommonProps) => {
  const getId = (part: ClickItemContentPart) =>
    idPrefix ? getClickItemContentId(idPrefix, part) : undefined;

  return (
    <>
      <p id={getId("title")} className="af-apollo-click-item__title">
        {title}
      </p>
      {subtitle ? (
        <p id={getId("subtitle")} className="af-apollo-click-item__subtitle">
          {subtitle}
        </p>
      ) : null}
      {textSecondary ? (
        <p id={getId("secondary")} className="af-apollo-click-item__secondary">
          {textSecondary}
        </p>
      ) : null}
      {textTertiary ? (
        <p id={getId("tertiary")} className="af-apollo-click-item__tertiary">
          {textTertiary}
        </p>
      ) : null}
      {tagLabel ? (
        <div id={getId("tag")} className="af-apollo-click-item__tag-container">
          <TagComponent {...tagProps}>{tagLabel}</TagComponent>
        </div>
      ) : null}
    </>
  );
};
