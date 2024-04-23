import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import wbIncandescentOutlined from "@material-design-icons/svg/outlined/wb_incandescent.svg";
import errorOutline from "@material-design-icons/svg/outlined/error_outline.svg";
import accessTime from "@material-design-icons/svg/outlined/access_time.svg";
import checkCircleOutline from "@material-design-icons/svg/outlined/check_circle_outline.svg";
import "@axa-fr/design-system-css/dist/Alert/Alert.client.scss";
import { Svg } from "../Svg";

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
    case "warning":
      return <Svg src={accessTime} className="af-alert__icon" />;
    case "validation":
      return <Svg src={checkCircleOutline} className="af-alert__icon" />;
    case "neutral":
    case "error":
      return <Svg src={errorOutline} className="af-alert__icon" />;
    case "information":
    default:
      return <Svg src={wbIncandescentOutlined} className="af-alert__icon" />;
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
