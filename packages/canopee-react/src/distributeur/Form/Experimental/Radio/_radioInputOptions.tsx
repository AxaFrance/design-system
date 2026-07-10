import type {
  RadioInputPropsButtonVariant,
  RadioInputPropsCardVariant,
} from "./RadioInput";
import { AddRadioCard } from "./AddRadioCard";
import { RadioButton } from "./RadioButton";
import { RadioCard } from "./RadioCard";

type RadioInputOptionsProps = {
  inputId: string;
  isInvalid: boolean;
  describedBy?: string;
} & (
  | Pick<
      RadioInputPropsCardVariant,
      "variant" | "options" | "showAddButton" | "orientation" | "onAdd"
    >
  | Pick<RadioInputPropsButtonVariant, "variant" | "options">
);

export const RadioInputOptions = ({
  inputId,
  isInvalid,
  describedBy,
  ...props
}: RadioInputOptionsProps) => (
  <>
    {!props.variant || props.variant === "button"
      ? props.options.map((o) => (
          <RadioButton key={`${inputId}-${o.value}`} {...o} />
        ))
      : null}
    {props.variant === "card" ? (
      <>
        {props.options.map((o) => (
          <RadioCard
            key={`${inputId}-${o.value}`}
            id={`${inputId}-${o.value}`}
            {...o}
            aria-invalid={isInvalid}
            aria-describedby={describedBy}
            orientation={props.orientation || "horizontal"}
          />
        ))}
        {props.showAddButton ? (
          <AddRadioCard
            orientation={props.orientation || "horizontal"}
            onClick={props.onAdd}
          />
        ) : null}
      </>
    ) : null}
  </>
);
