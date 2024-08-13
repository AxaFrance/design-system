import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactElement,
} from "react";
import wbIncandescentOutlined from "@material-symbols/svg-400/outlined/wb_incandescent.svg";
import errorIcon from "@material-symbols/svg-400/outlined/emergency_home.svg";
import errorOutline from "@material-symbols/svg-400/outlined/error.svg";
import checkCircleOutline from "@material-symbols/svg-400/outlined/check_circle.svg";
import "@axa-fr/design-system-look-and-feel-css/dist/Alert/Alert.client.scss";
import { Svg } from "../Svg";
import { Link } from "../Link/Link.client";

export type AlertType =
  | "validation"
  | "error"
  | "warning"
  | "information"
  | "neutral";

type AlertProps = {
  type: AlertType;
  title?: string;
  link?: ReactElement<typeof Link>;
} & ComponentPropsWithoutRef<"div">;

function getIconFromType(type: AlertType) {
  switch (type) {
    case "error":
      return <Svg src={errorIcon} className="af-alert__icon" />;
    case "validation":
      return <Svg src={checkCircleOutline} className="af-alert__icon" />;
    case "neutral":
    case "warning":
      return <Svg src={errorOutline} className="af-alert__icon" />;
    case "information":
    default:
      return <Svg src={wbIncandescentOutlined} className="af-alert__icon" />;
  }
}

export const Alert = ({
  type = "information",
  title,
  children,
  link,
}: PropsWithChildren<AlertProps>) => {
  return (
    <div className={`af-alert af-alert--${type}`}>
      {getIconFromType(type)}
      <div className="af-alert-client__content">
        {title && <p className="af-alert__title">{title}</p>}
        {children}
        {link && <p className="af-alert__link">{link}</p>}
      </div>
    </div>
  );
};
