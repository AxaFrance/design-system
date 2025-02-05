import "@axa-fr/design-system-look-and-feel-css/dist/Alert/Alert.scss";
import checkCircleOutline from "@material-symbols/svg-400/outlined/check_circle.svg";
import errorIcon from "@material-symbols/svg-400/outlined/emergency_home.svg";
import errorOutline from "@material-symbols/svg-400/outlined/error.svg";
import infoIcon from "@material-symbols/svg-400/outlined/info.svg";
import wbIncandescentOutlined from "@material-symbols/svg-400/outlined/wb_incandescent.svg";
import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from "react";
import { Button } from "../Button/Button";
import { Link } from "../Link/Link";
import { Svg } from "../Svg";

type Headings = "h2" | "h3" | "h4" | "h5" | "h6";

export const alertTypes = {
  validation: "validation",
  error: "error",
  warning: "warning",
  information: "information",
  neutral: "neutral",
} as const;

export type AlertType = keyof typeof alertTypes;

type AlertProps = {
  type: AlertType;
  title?: string;
  action?: ReactElement<typeof Link | typeof Button>;
  iconSize?: number;
  heading?: Headings;
} & ComponentPropsWithoutRef<"div">;

const getIconFromType = (type: AlertType) =>
  ({
    [alertTypes.validation]: checkCircleOutline,
    [alertTypes.error]: errorIcon,
    [alertTypes.neutral]: infoIcon,
    [alertTypes.warning]: errorOutline,
    [alertTypes.information]: wbIncandescentOutlined,
  })[type] || wbIncandescentOutlined;

export const Alert = ({
  type = alertTypes.information,
  title,
  children,
  action,
  iconSize = 24,
  heading: Heading = "h4",
}: PropsWithChildren<AlertProps>) => {
  const icon = useMemo(() => getIconFromType(type), [type]);

  return (
    <div className={`af-alert af-alert--${type}`} role="alert">
      <Svg
        src={icon}
        width={iconSize}
        height={iconSize}
        className="af-alert__icon"
        aria-hidden
      />
      <div className="af-alert-client__content">
        {title && <Heading className="af-alert__title">{title}</Heading>}
        {children}
        {action && <div className="af-alert__action">{action}</div>}
      </div>
    </div>
  );
};
