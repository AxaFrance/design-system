import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { Icon } from "../Icons/Icon.client";
import "@axa-fr/design-system-css/dist/Alert/Alert.client.scss";

export type AlertType =
  | "validation"
  | "error"
  | "warning"
  | "information"
  | "neutral";

type AlertProps = {
  type: AlertType;
  title?: string;
} & ComponentPropsWithoutRef<"div">;

function getIconFromType(type: AlertType) {
  switch (type) {
    case "information":
      return (
        <Icon
          name="WbIncandescent"
          styleType="outlined"
          className="af-alert__icon"
        />
      );
    case "neutral":
      return <Icon name="ErrorOutline" className="af-alert__icon" />;
    case "warning":
      return <Icon name="AccessTime" className="af-alert__icon" />;
    case "validation":
      return <Icon name="CheckCircleOutline" className="af-alert__icon" />;
    case "error":
      return <Icon name="ErrorOutline" className="af-alert__icon" />;
    default:
      return (
        <Icon
          name="WbIncandescent"
          styleType="outlined"
          className="af-alert__icon"
        />
      );
  }
}

export const Alert = ({
  title,
  type = "information",
  children,
}: PropsWithChildren<AlertProps>) => {
  return (
    <div className={`af-alert af-alert--${type}`}>
      {getIconFromType(type)}
      <div>
        {title && <p className="af-alert__title">{title}</p>}
        {children}
      </div>
    </div>
  );
};
