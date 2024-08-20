import { useId, useMemo, type ComponentProps, type ReactNode } from "react";
import { Field, HelpMessage } from "../core";
import { Slider } from "./Slider";

type Props = ComponentProps<typeof Field> &
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
  const newId = useMemo(() => id ?? generatedId, [generatedId, id]);

  return (
    <Field
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
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

export { SliderInput };
