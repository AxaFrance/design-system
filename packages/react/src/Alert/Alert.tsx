import { MouseEventHandler, PropsWithChildren } from "react";
import { getComponentClassName } from "../Form/core";
import "@axa-fr/design-system-css/dist/Alert/Alert.scss";

export enum TypeIcons {
  error = "glyphicon glyphicon-minus-sign",
  danger = "glyphicon glyphicon-alert",
  info = "glyphicon glyphicon-info-sign",
  success = "glyphicon glyphicon-ok",
}

export type AlertCoreComponentProps = {
  title: string;
  iconClassName?: string;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  classModifier?: "error" | "danger" | "info" | "success";
};

export const Alert = ({
  className,
  onClose,
  iconClassName,
  title,
  children,
  classModifier,
}: PropsWithChildren<AlertCoreComponentProps>) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-alert",
  );

  return (
    <div className={componentClassName} role="alert">
      <div className="af-alert__title">
        <div className="af-alert__title-icon">
          <i
            className={
              iconClassName ||
              TypeIcons[classModifier as keyof typeof TypeIcons]
            }
          />
        </div>
        <div className="af-alert__title-text">{title}</div>
        {onClose && (
          <button
            type="button"
            className="af-alert__title-icon-close"
            onClick={onClose}
            aria-label="close"
          >
            <i className="glyphicon glyphicon-close" />
          </button>
        )}
      </div>
      {children && (
        <div className="af-alert__content">
          <div className="af-alert__content-left" />
          <div className="af-alert__content-right">{children}</div>
        </div>
      )}
    </div>
  );
};
