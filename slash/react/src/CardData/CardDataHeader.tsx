import React from "react";

import "@axa-fr/design-system-slash-css/dist/CardData/CardData.css";
import classNames from "classnames";
import { Svg } from "../Svg";
import { CardDataVariant } from "./CardData";

type CardDataHeaderProps = {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  icon: string;
  variant?: CardDataVariant;
  contentRight?: React.ReactNode;
};

const defaultClassName = "af-card-data-header";
const iconDefaultClassName = `${defaultClassName}-icon`;

export const CardDataHeader = ({
  title,
  subTitle,
  icon,
  variant,
  contentRight,
}: CardDataHeaderProps) => (
  <header className={defaultClassName}>
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
    </h3>
    {contentRight ? (
      <span className={`${defaultClassName}-rightcontent`}>{contentRight}</span>
    ) : null}
  </header>
);
