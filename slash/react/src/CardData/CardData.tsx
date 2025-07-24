import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import { CardDataHeader } from "./CardDataHeader";

import "@axa-fr/design-system-slash-css/dist/CardData/CardData.css";

export type CardDataVariant =
  | "error"
  | "warning"
  | "information"
  | "success"
  | "default"
  | "dark"
  | "gray"
  | "purple";

type CardDataProps = {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  description?: React.ReactNode;
  icon: string;
  variant?: CardDataVariant;
  contentFitAllSize?: boolean;
  contentRight?: React.ReactNode;
  withDivider?: boolean;
};

const defaultClassName = "af-card-data";

export const CardData = ({
  title,
  subTitle,
  description,
  icon,
  variant = "default",
  contentFitAllSize = false,
  contentRight,
  children,
  withDivider = true,
}: PropsWithChildren<CardDataProps>) => (
  <div className={defaultClassName}>
    <CardDataHeader
      title={title}
      subTitle={subTitle}
      description={description}
      icon={icon}
      variant={variant}
      contentRight={contentRight}
      withDivider={withDivider}
    />
    <section
      className={classNames(
        { [`${defaultClassName}-content--max-size`]: contentFitAllSize },
        { [`${defaultClassName}-content`]: !contentFitAllSize },
      )}
    >
      {children}
    </section>
  </div>
);
