import {
  type ComponentProps,
  type ComponentType,
  type ReactNode,
  useId,
} from "react";
import type { GridContainerProps } from "../../utilities/types/GridContainerProps";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomCommon";
import {
  ItemLabelCommon,
  type ItemLabelProps,
} from "../ItemLabel/ItemLabelCommon";
import {
  ItemMessage,
  type ItemMessageProps,
} from "../ItemMessage/ItemMessageCommon";

export type InputTextProps = ComponentProps<"input"> & {
  unit?: ReactNode;
  classModifier?: string;
  label?: ItemLabelProps["children"];
  helper?: string;
  containerProps?: GridContainerProps;
} & Pick<
    ItemLabelProps,
    | "description"
    | "moreButtonLabel"
    | "onMoreButtonClick"
    | "sideButtonLabel"
    | "onSideButtonClick"
  > &
  Pick<ItemMessageProps, "message" | "messageType">;

type InputTextCommonProps = InputTextProps & {
  ItemLabelComponent: ComponentType<
    Omit<ComponentProps<typeof ItemLabelCommon>, "ButtonComponent">
  >;
  ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
  InputTextAtomComponent: ComponentType<ComponentProps<typeof InputTextAtom>>;
};

const InputTextCommon = ({
  unit,
  className,
  classModifier = "",
  helper,
  message,
  messageType = "error",
  label,
  description,
  moreButtonLabel,
  onMoreButtonClick,
  required,
  sideButtonLabel,
  onSideButtonClick,
  ItemLabelComponent,
  ItemMessageComponent,
  InputTextAtomComponent,
  containerProps,
  ...otherProps
}: InputTextCommonProps) => {
  let inputId = useId();
  inputId = otherProps.id || inputId;
  const idMessage = useId();
  const idHelp = useId();

  const ariaDescribedby = [
    helper && idHelp,
    message && messageType === "success" && idMessage,
  ].filter(Boolean) as string[];

  return (
    <div className="af-form__input-container" {...containerProps}>
      <ItemLabelComponent
        description={description}
        moreButtonLabel={moreButtonLabel}
        onMoreButtonClick={onMoreButtonClick}
        sideButtonLabel={sideButtonLabel}
        onSideButtonClick={onSideButtonClick}
        required={required}
        htmlFor={inputId}
      >
        {label}
      </ItemLabelComponent>

      <InputTextAtomComponent
        id={inputId}
        unit={unit}
        className={className}
        classModifier={classModifier}
        error={message && messageType === "error" ? messageType : undefined}
        warning={message && messageType === "warning" ? messageType : undefined}
        required={required}
        idMessage={message ? idMessage : undefined}
        idHelp={
          ariaDescribedby.length > 0 ? ariaDescribedby.join(" ") : undefined
        }
        {...otherProps}
      />

      {helper ? (
        <span id={idHelp} className="af-form__input-helper">
          {helper}
        </span>
      ) : null}

      <ItemMessageComponent
        id={idMessage}
        message={message}
        messageType={messageType}
      />
    </div>
  );
};

InputTextCommon.displayName = "InputText";

export { InputTextCommon };
