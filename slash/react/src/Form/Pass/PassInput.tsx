import { ComponentProps, ReactNode, useState } from "react";
import { ConsumerFieldProps, Field } from "../core";
import { Pass } from "./Pass";

const strengthList: Record<number, string> = {
  0: "bad",
  1: "okay",
  2: "good",
  3: "verygood",
  4: "excellent",
};

const calculateStrength = (score?: string | null) => {
  if (score === null || score === undefined) {
    return null;
  }

  const scoreToNumber = Number(score);
  let strength = Number.isNaN(scoreToNumber) ? 0 : scoreToNumber;
  if (strength > 4) {
    strength = 4;
  }
  if (strength < 0) {
    strength = 0;
  }
  return strengthList[strength];
};

type PassProps = ComponentProps<typeof Pass>;
type Props = Omit<
  ConsumerFieldProps &
    PassProps & {
      helpMessage?: ReactNode;
      score?: string;
    },
  "onToggleType" | "type"
>;

const PassInput = ({
  children,
  score,
  classModifier,
  disabled,
  ...props
}: Props) => {
  const strength = calculateStrength(score);

  const [type, setType] = useState<PassProps["type"]>("password");

  return (
    <Field
      {...props}
      classModifier={classModifier}
      renderInput={({ id, classModifier: modifier, ariaInvalid, errorId }) => (
        <>
          <Pass
            {...props}
            type={type}
            id={id}
            disabled={disabled}
            classModifier={`${modifier} ${strength}`}
            aria-describedby={errorId}
            aria-invalid={ariaInvalid}
            onToggleType={() =>
              setType(type === "password" ? "text" : "password")
            }
          />
          {children}
        </>
      )}
    />
  );
};

export { PassInput };
