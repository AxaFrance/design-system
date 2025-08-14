import React from "react";

import "@axa-fr/design-system-slash-css/dist/CardData/CardData.css";
import classNames from "classnames";
import { Svg } from "../Svg";
import { CardDataVariant } from "./CardData";

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
  <header
    className={classNames(
      defaultClassName,
      withDivider ? `${defaultClassName}-with-divider` : null,
    )}
  >
    <span
      className={classNames(
        iconDefaultClassName,
        variant !== "default" ? `${iconDefaultClassName}--${variant}` : null,
      )}
    >
      <Svg src={icon} />
    </span>
    <h3>
      {title}
      {subTitle ? (
        <span className={`${defaultClassName}-subtitle`}>{subTitle}</span>
      ) : null}
      {description ? (
        <span className={`${defaultClassName}-description`}>{description}</span>
      ) : null}
    </h3>
    {contentRight ? (
      <span className={`${defaultClassName}-rightcontent`}>{contentRight}</span>
    ) : null}
  </header>
);
