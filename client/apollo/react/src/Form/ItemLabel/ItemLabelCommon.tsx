import {
  useId,
  type ComponentType,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import infoIcon from "@material-symbols/svg-400/outlined/info.svg";
import { Svg } from "../../Svg/Svg";
import type { ButtonProps } from "../../Button/ButtonCommon";

type ItemLabelProps = {
  label?: ReactNode;
  description?: string;
  required?: boolean;
  inputId: string;
  sideButtonLabel?: string;
  onSideButtonClick?: MouseEventHandler<HTMLButtonElement>;
  buttonLabel?: string;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
  ButtonComponent: ComponentType<ButtonProps>;
};

export const ItemLabel = ({
  label,
  description,
  required,
  inputId,
  sideButtonLabel,
  onSideButtonClick,
  buttonLabel,
  onButtonClick,
  ButtonComponent,
}: ItemLabelProps) => {
  const idDescription = useId();
  if (!label && !description && !buttonLabel && !sideButtonLabel) {
    return null;
  }
  return (
    <div className="af-item-label">
      {label ? (
        <label
          htmlFor={inputId}
          aria-describedby={description ? idDescription : undefined}
          className="af-item-label__label"
        >
          {label} {required ? <span aria-hidden> *</span> : null}
        </label>
      ) : null}

      {sideButtonLabel ? (
        <ButtonComponent
          variant="ghost"
          onClick={onSideButtonClick}
          className="af-item-label__sidebutton"
        >
          {sideButtonLabel}
        </ButtonComponent>
      ) : null}

      {description ? (
        <span id={idDescription} className="af-item-label__description">
          {description}
        </span>
      ) : null}

      {buttonLabel ? (
        <ButtonComponent
          className="af-item-label__more"
          variant="ghost"
          iconLeft={<Svg src={infoIcon} aria-hidden="true" />}
          onClick={onButtonClick}
        >
          {buttonLabel}
        </ButtonComponent>
      ) : null}
    </div>
  );
};
