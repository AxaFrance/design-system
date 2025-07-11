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
  icon: string;
  variant?: CardDataVariant;
  contentFitAllSize?: boolean;
  contentRight?: React.ReactNode;
};

const defaultClassName = "af-card-data";

export const CardData = ({
  title,
  subTitle,
  icon,
  variant = "default",
  contentFitAllSize = false,
  contentRight,
  children,
}: PropsWithChildren<CardDataProps>) => (
  <div className={defaultClassName}>
    <CardDataHeader
      title={title}
      subTitle={subTitle}
      icon={icon}
      variant={variant}
      contentRight={contentRight}
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
