import { useId, type ChangeEventHandler } from "react";
import { ItemMessage } from "@axa-fr/design-system-apollo-react/lf";
import {
  BREAKPOINT,
  getComponentClassName,
  useIsSmallScreen,
} from "../../utilities";
import { CardCheckboxItem, type TCardCheckboxItem } from "./CardCheckboxItem";

import "@axa-fr/design-system-look-and-feel-css/dist/Form/CardCheckbox/CardCheckbox.scss";

export type CardCheckboxProps = Partial<TCardCheckboxItem> & {
  type: "vertical" | "horizontal";
  labelGroup?: string;
  descriptionGroup?: string;
  isRequired?: boolean;
  options: TCardCheckboxItem[];
  onChange?: ChangeEventHandler;
  error?: string;
};

/**
 * @deprecated Use `CardCheckbox` from `@axa-fr/design-system-apollo-react/lf` instead.
 */
export const CardCheckbox = ({
  className,
  labelGroup,
  descriptionGroup,
  isRequired,
  options,
  onChange,
  type = "vertical",
  error,
  ...inputProps
}: CardCheckboxProps) => {
  const componentClassName = getComponentClassName(
    "af-card-checkbox__container",
    className,
  );
  const checkboxGroupClassName = getComponentClassName(
    "af-card-checkbox-group",
    className,
    type,
  );
  const errorId = useId();

  const isMobile = useIsSmallScreen(BREAKPOINT.SM);
  const size = isMobile ? "M" : "L";

  return (
    <fieldset className={componentClassName}>
      {labelGroup ? (
        <legend className="af-card-checkbox__legend">
          <p>
            {labelGroup}
            {isRequired ? <span aria-hidden>&nbsp;*</span> : null}
          </p>
          {descriptionGroup ? (
            <p className="af-card-checkbox__description">{descriptionGroup}</p>
          ) : null}
        </legend>
      ) : null}
      <div className="af-card-checkbox__choices">
        <ul className={checkboxGroupClassName}>
          {options.map(({ hasError, ...optionProps }) => (
            <li key={crypto.randomUUID()}>
              <CardCheckboxItem
                {...inputProps}
                size={size}
                errorId={errorId}
                onChange={onChange}
                hasError={Boolean(error) || hasError}
                {...optionProps}
              />
            </li>
          ))}
        </ul>

        <ItemMessage id={errorId} message={error} messageType="error" />
      </div>
    </fieldset>
  );
};

CardCheckbox.displayName = "CardCheckbox";

/**
 * @deprecated Use `CardCheckbox` from `@axa-fr/design-system-apollo-react/lf` instead.
 */
export const CheckboxCard = CardCheckbox;
