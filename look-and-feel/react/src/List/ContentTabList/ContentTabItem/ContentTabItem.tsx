import { Button, Tag } from "../../../look-and-feel";
import type { TContentTabItem } from "./types";

type TContentTabItemProps = TContentTabItem & {
  isMobile?: boolean;
};

export const ContentTabItem = ({
  title,
  subtitle,
  tag,
  tagProps,
  date,
  buttons = [],
  value,
  isMobile = false,
}: TContentTabItemProps) => (
  <>
    <div className="af-list-item__left-container">
      {Boolean(value) && (Boolean(tag) || Boolean(date)) && (
        <div className="af-list-item__additional-data-container">
          {Boolean(tag) && (
            <Tag classModifier="warning" {...tagProps}>
              {tag}
            </Tag>
          )}
          {Boolean(date) && <span className="af-list-item__date">{date}</span>}
        </div>
      )}
      <div className="af-list-item__label">
        <span className="af-list-item-label__title">{title}</span>
        {Boolean(subtitle) && (
          <span className="af-list-item-label__subtitle">{subtitle}</span>
        )}
      </div>
      {!value && isMobile && (Boolean(tag) || Boolean(date)) && (
        <div className="af-list-item__additional-data-container">
          {Boolean(tag) && (
            <Tag classModifier="warning" {...tagProps}>
              {tag}
            </Tag>
          )}
          {Boolean(date) && <span className="af-list-item__date">{date}</span>}
        </div>
      )}
    </div>
    {(buttons.length > 0 ||
      Boolean(tag) ||
      Boolean(date) ||
      Boolean(value)) && (
      <div className="af-list-item__right-container">
        {!value && (Boolean(tag) || Boolean(date)) && !isMobile && (
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
        {buttons.map((button) => (
          <div className="af-list-item__button-container" key={button?.id}>
            <Button {...button} />
          </div>
        ))}
        {Boolean(value) && <span className="af-list-item__value">{value}</span>}
      </div>
    )}
  </>
);
