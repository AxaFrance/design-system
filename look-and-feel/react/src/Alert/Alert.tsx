import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from "react";
import wbIncandescentOutlined from "@material-symbols/svg-400/outlined/wb_incandescent.svg";
import errorIcon from "@material-symbols/svg-400/outlined/emergency_home.svg";
import errorOutline from "@material-symbols/svg-400/outlined/error.svg";
import checkCircleOutline from "@material-symbols/svg-400/outlined/check_circle.svg";
import "@axa-fr/design-system-look-and-feel-css/dist/Alert/Alert.scss";
import { Svg } from "../Svg";
import { Link } from "../Link/Link";

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
  iconSize?: number;
} & ComponentPropsWithoutRef<"div">;

function getIconFromType(type: AlertType) {
  switch (type) {
    case "error":
      return errorIcon;
    case "validation":
      return checkCircleOutline;
    case "neutral":
    case "warning":
      return errorOutline;
    case "information":
    default:
      return wbIncandescentOutlined;
  }
}

export const Alert = ({
  type = "information",
  title,
  children,
  link,
  iconSize = 24,
}: PropsWithChildren<AlertProps>) => {
  const icon = useMemo(() => getIconFromType(type), [type]);

  return (
    <div className={`af-alert af-alert--${type}`}>
      <Svg
        src={icon}
        width={iconSize}
        height={iconSize}
        className="af-alert__icon"
      />
      <div className="af-alert-client__content">
        {title && <p className="af-alert__title">{title}</p>}
        {children}
        {link && <p className="af-alert__link">{link}</p>}
      </div>
    </div>
  );
};
