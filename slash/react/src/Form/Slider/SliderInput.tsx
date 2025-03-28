import { useId, useMemo, type ComponentProps, type ReactNode } from "react";
import { HelpMessage, LegacyField } from "../core";
import { Slider } from "./Slider";

type Props = ComponentProps<typeof LegacyField> &
  ComponentProps<typeof Slider> & {
    helpMessage?: ReactNode;
  };

const SliderInput = ({
  id,
  children,
  helpMessage,
  message,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  messageType,
  isVisible,
  forceDisplayMessage,
  className,
  classModifier,
  ...sliderProps
}: Props) => {
  const generatedId = useId();
  const newId = useMemo(() => {
    if (id) {
      return id;
    }
    return generatedId;
  }, [generatedId, id]);

  return (
    <LegacyField
      id={newId}
      label={label}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}
    >
      <Slider {...sliderProps} id={id} classModifier={classModifier} />
      {children}
      <HelpMessage
        message={helpMessage}
        isVisible={!message}
        ariaDescribedBy={newId}
      />
    </LegacyField>
  );
};

export { SliderInput };
