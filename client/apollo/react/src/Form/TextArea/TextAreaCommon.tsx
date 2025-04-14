import {
  type ComponentProps,
  ComponentPropsWithRef,
  type ComponentType,
  forwardRef,
  MouseEventHandler,
  useId,
} from "react";
import { getComponentClassName } from "../../utilities/getComponentClassName";
import { ItemLabel } from "../ItemLabel/ItemLabelCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";

type Props = ComponentPropsWithRef<"textarea"> & {
  classModifier?: string;
  sideButtonLabel: string;
  onSideButtonClick?: MouseEventHandler<HTMLButtonElement>;
  helper?: string;
  error?: string;
  description?: string;
  label: ComponentProps<typeof ItemLabel>["label"];
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabel>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  buttonLabel?: string;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
} & Partial<ComponentPropsWithRef<typeof ItemMessage>>;

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      className,
      classModifier = "",
      label,
      description,
      helper,
      error,
      buttonLabel,
      onButtonClick,
      required,
      sideButtonLabel,
      ItemLabelComponent,
      ItemMessageComponent,
      onSideButtonClick,
      ...otherProps
    },
    inputRef,
  ) => {
    const componentClassName = getComponentClassName(
      "af-form__input-textarea",
      className,
      classModifier,
    );

    let inputId = useId();
    inputId = otherProps.id || inputId;
    const idError = useId();
    const idLabel = useId();

    return (
      <div className="af-form__input-container">
        <ItemLabelComponent
          label={label}
          description={description}
          buttonLabel={buttonLabel}
          onButtonClick={onButtonClick}
          sideButtonLabel={sideButtonLabel}
          onSideButtonClick={onSideButtonClick}
          required={required}
          inputId={inputId}
          idLabel={idLabel}
        />
        <textarea
          id={inputId}
          className={componentClassName}
          ref={inputRef}
          aria-errormessage={idError}
          aria-invalid={Boolean(error)}
          {...otherProps}
        />
        {helper && <span className="af-form__input-helper">{helper}</span>}
        <ItemMessageComponent id={idError} message={error} />
      </div>
    );
  },
);
TextArea.displayName = "TextArea";

export { TextArea };
