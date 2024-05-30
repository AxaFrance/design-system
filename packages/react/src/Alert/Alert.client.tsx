import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactElement,
} from "react";
import wbIncandescentOutlined from "@material-design-icons/svg/outlined/wb_incandescent.svg";
import errorOutline from "@material-design-icons/svg/outlined/error_outline.svg";
import checkCircleOutline from "@material-design-icons/svg/outlined/check_circle_outline.svg";
import "@axa-fr/design-system-css/dist/Alert/Alert.client.scss";
import { Svg } from "../Svg";
import { Link } from "../client";

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
    case "validation":
      return <Svg src={checkCircleOutline} className="af-alert__icon" />;
    case "neutral":
    case "error":
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
      <div>
        {title && <p className="af-alert__title">{title}</p>}
        {children}
        {link && <p className="af-alert__link">{link}</p>}
      </div>
    </div>
  );
};
