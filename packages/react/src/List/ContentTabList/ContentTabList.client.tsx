import React from "react";
import { Button, List, Tag } from "../../client";

import "@axa-fr/design-system-css/dist/List/ContentTabList/ContentTabList.client.scss";
import type { ContentTabItem } from "./types";

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
      ({ id, title, subtitle, tag, tagProps, date, buttons = [], value }) => (
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
          {(buttons.length > 0 || Boolean(value)) && (
            <div className="af-list-item__right-container">
              {buttons.map((button) => (
                <div
                  className="af-list-item__button-container"
                  key={button?.id}
                >
                  <Button {...button} />
                </div>
              ))}
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
