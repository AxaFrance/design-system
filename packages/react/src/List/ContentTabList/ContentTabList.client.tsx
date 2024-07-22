import download from "@material-symbols/svg-400/rounded/download_2-fill.svg";
import visibility from "@material-symbols/svg-400/rounded/visibility-fill.svg";
import type { ComponentProps } from "react";
import React from "react";
import { Button, ButtonVariants, List, Svg, Tag } from "../../client";

import "@axa-fr/design-system-css/dist/List/ContentTabList/ContentTabList.client.scss";

type ContentTabItem = {
  id?: string;
  title: string;
  subtitle?: string;
  tag?: string;
  tagProps?: ComponentProps<typeof Tag>;
  date?: string;
  onDownload?: () => void;
  onDisplay?: () => void;
  value?: string;
};

type ContentTabListProps = {
  items: ContentTabItem[];
  classModifier?: string;
};

export const ContentTabList = ({
  items,
  classModifier,
}: ContentTabListProps) => (
  <List classModifier={`list content-tab-list ${classModifier}`} tabIndex={-1}>
    {items.map(
      ({
        id,
        title,
        subtitle,
        tag,
        tagProps,
        date,
        onDownload,
        onDisplay,
        value,
      }) => (
        <React.Fragment key={id ?? title}>
          <div className="af-list-item__left-container">
            {Boolean(value) && (Boolean(tag) || Boolean(date)) && (
              <div className="af-list-item__additional-data-container">
                {Boolean(tag) && (
                  <Tag classModifier="warning" {...tagProps}>
                    {tag}
                  </Tag>
                )}
                {Boolean(date) && (
                  <span className="af-list-item__date">{date}</span>
                )}
              </div>
            )}
            <div className="af-list-item__label">
              <span className="af-list-item-label__title">{title}</span>
              {Boolean(subtitle) && (
                <span className="af-list-item-label__subtitle">{subtitle}</span>
              )}
            </div>
            {!value && (Boolean(tag) || Boolean(date)) && (
              <div className="af-list-item__additional-data-container">
                {Boolean(tag) && (
                  <Tag classModifier="warning" {...tagProps}>
                    {tag}
                  </Tag>
                )}
                {Boolean(date) && (
                  <span className="af-list-item__date">{date}</span>
                )}
              </div>
            )}
          </div>
          {(Boolean(onDownload) || Boolean(onDisplay) || Boolean(value)) && (
            <div className="af-list-item__right-container">
              {Boolean(onDownload) && (
                <div className="af-list-item__button-container">
                  <Button
                    variant={ButtonVariants.ghost}
                    iconLeft={<Svg src={download} fill="#00008F" />}
                    onClick={onDownload}
                  >
                    Télécharger
                  </Button>
                </div>
              )}
              {Boolean(onDisplay) && (
                <div className="af-list-item__button-container">
                  <Button
                    variant={ButtonVariants.ghost}
                    iconLeft={<Svg src={visibility} fill="#00008F" />}
                    onClick={onDisplay}
                    aria-label="afficher"
                  >
                    Afficher
                  </Button>
                </div>
              )}
              {Boolean(value) && (
                <span className="af-list-item__value">{value}</span>
              )}
            </div>
          )}
        </React.Fragment>
      ),
    )}
  </List>
);
