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

type Props = ComponentPropsWithRef<"textarea"> &
  Pick<
    ComponentProps<typeof ItemLabel>,
    | "label"
    | "description"
    | "buttonLabel"
    | "sideButtonLabel"
    | "onSideButtonClick"
  > & {
    classModifier?: string;
    helper?: string;
    error?: string;
    ItemLabelComponent: ComponentType<
      Omit<ComponentProps<typeof ItemLabel>, "ButtonComponent">
    >;
    ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
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
    const idHelp = useId();
    const idError = useId();

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
        />
        <textarea
          id={inputId}
          className={componentClassName}
          ref={inputRef}
          aria-errormessage={error ? idError : undefined}
          aria-describedby={helper ? idHelp : undefined}
          aria-invalid={Boolean(error)}
          {...otherProps}
        />
        {helper ? (
          <span id={idHelp} className="af-form__input-helper">
            {helper}
          </span>
        ) : null}
        <ItemMessageComponent id={idError} message={error} />
      </div>
    );
  },
);
TextArea.displayName = "TextArea";

export { TextArea };
