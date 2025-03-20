import {
  useId,
  type ComponentProps,
  type ComponentType,
  type MouseEventHandler,
} from "react";
import infoIcon from "@material-symbols/svg-400/outlined/info.svg";
import { Svg } from "../../Svg/Svg";
import { Button } from "../../Button/ButtonCommon";

type ItemLabelProps = {
  label: string;
  description?: string;
  required?: boolean;
  inputId: string;
  idLabel: string;
  sideButtonLabel?: string;
  onSideButtonClick?: MouseEventHandler<HTMLButtonElement>;
  buttonLabel?: string;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
  ButtonComponent: ComponentType<ComponentProps<typeof Button>>;
};

export const ItemLabel = ({
  label,
  description,
  required,
  inputId,
  idLabel,
  sideButtonLabel,
  onSideButtonClick,
  buttonLabel,
  onButtonClick,
  ButtonComponent,
}: ItemLabelProps) => {
  const idDescription = useId();

  return (
    <div className="af-item-label">
      <label htmlFor={inputId} id={idLabel} aria-describedby={idDescription}>
        {label} {required && <span aria-hidden="true"> *</span>}
      </label>

      {sideButtonLabel && (
        <ButtonComponent
          variant="ghost"
          onClick={onSideButtonClick}
          className="af-item-label__sidebutton"
        >
          {sideButtonLabel}
        </ButtonComponent>
      )}

      {description && (
        <span id={idDescription} className="af-item-label__description">
          {description}
        </span>
      )}

      {buttonLabel && (
        <ButtonComponent
          className="af-item-label__more"
          variant="ghost"
          iconLeft={<Svg src={infoIcon} />}
          onClick={onButtonClick}
        >
          {buttonLabel}
        </ButtonComponent>
      )}
    </div>
  );
};
