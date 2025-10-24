import { type ComponentProps, useId } from "react";
import { ItemMessage } from "@axa-fr/design-system-apollo-react/lf";
import {
  BREAKPOINT,
  getComponentClassName,
  useIsSmallScreen,
} from "../../utilities";
import type { Radio } from "./Radio";
import { CardRadioItem } from "./CardRadioItem";
import type { TCardRadioItemOption } from "./types";

import "@axa-fr/design-system-look-and-feel-css/dist/Form/RadioCard/RadioCard.scss";

export type CardRadioProps = Omit<ComponentProps<typeof Radio>, "size"> & {
  type: "vertical" | "horizontal";
  labelGroup?: string;
  descriptionGroup?: string;
  isRequired?: boolean;
  value?: number | string;
  options: TCardRadioItemOption[];
  error?: string;
};

export const RadioCard = ({
  className,
  labelGroup,
  descriptionGroup,
  isRequired,
  options,
  type = "vertical",
  error,
  name,
  value,
  onChange,
  ...inputProps
}: CardRadioProps) => {
  const componentClassName = getComponentClassName(
    "af-card-radio__container",
    className,
  );
  const RadioGroupClassName = getComponentClassName(
    "af-card-radio-group",
    className,
    type,
  );

  const cardRadioId = useId();
  const errorId = `${cardRadioId}:error`;

  const isMobile = useIsSmallScreen(BREAKPOINT.SM);
  const size: ComponentProps<typeof CardRadioItem>["size"] = isMobile
    ? "M"
    : "L";

  return (
    <fieldset
      className={componentClassName}
      aria-invalid={Boolean(error)}
      aria-errormessage={error ? errorId : undefined}
    >
      {labelGroup ? (
        <legend className="af-card-radio__legend">
          <p>
            {labelGroup}
            {isRequired ? <span aria-hidden>&nbsp;*</span> : null}
          </p>

          {descriptionGroup ? (
            <p className="af-card-radio__description">{descriptionGroup}</p>
          ) : null}
        </legend>
      ) : null}
      <div className={RadioGroupClassName}>
        {options.map((cardRadioItemProps) => (
          <CardRadioItem
            key={`${name ?? cardRadioId}-${cardRadioItemProps.label}`}
            name={name}
            onChange={onChange}
            size={size}
            isInvalid={Boolean(error)}
            checked={
              value !== undefined
                ? value === cardRadioItemProps.value
                : undefined
            }
            {...inputProps}
            {...cardRadioItemProps}
          />
        ))}
      </div>
      <ItemMessage id={errorId} message={error} messageType="error" />
    </fieldset>
  );
};

RadioCard.displayName = "RadioCard";
