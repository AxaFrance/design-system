import "@axa-fr/design-system-css/dist/Alert/Alert.client.scss";
import AccessTime from "@mui/icons-material/AccessTime";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import WbIncandescentOutlined from "@mui/icons-material/WbIncandescentOutlined";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

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
      return <WbIncandescentOutlined className="af-alert__icon" />;
    case "neutral":
      return <ErrorOutline className="af-alert__icon" />;
    case "warning":
      return <AccessTime className="af-alert__icon" />;
    case "validation":
      return <CheckCircleOutline className="af-alert__icon" />;
    case "error":
      return <ErrorOutline className="af-alert__icon" />;
    default:
      return <WbIncandescentOutlined className="af-alert__icon" />;
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
