import React from "react";

import "@axa-fr/design-system-slash-css/dist/CardData/CardData.css";
import classNames from "classnames";
import { Svg } from "../Svg";
import { CardDataVariant } from "./CardData";
import { Divider } from "../Divider/Divider";
import { Title } from "../Title/Title";

type CardDataHeaderProps = {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  description?: React.ReactNode;
  icon: string;
  variant?: CardDataVariant;
  contentRight?: React.ReactNode;
  withDivider?: boolean;
};

const defaultClassName = "af-card-data-header";
const iconDefaultClassName = `${defaultClassName}-icon`;

export const CardDataHeader = ({
  title,
  subTitle,
  description,
  icon,
  variant,
  contentRight,
  withDivider,
}: CardDataHeaderProps) => (
  <>
    <header className={defaultClassName}>
      <span
        className={classNames(
          iconDefaultClassName,
          variant !== "default" ? `${iconDefaultClassName}--${variant}` : null,
        )}
      >
        <Svg src={icon} />
      </span>
      <Title heading="h3">
        {title}
        {subTitle ? (
          <span className={`${defaultClassName}-subtitle`}>{subTitle}</span>
        ) : null}
        {description ? (
          <span className={`${defaultClassName}-description`}>
            {description}
          </span>
        ) : null}
      </Title>
      {contentRight ? (
        <span className={`${defaultClassName}-rightcontent`}>
          {contentRight}
        </span>
      ) : null}
    </header>
    {withDivider ? <Divider /> : null}
  </>
);
