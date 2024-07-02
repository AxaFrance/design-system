import { ComponentPropsWithoutRef } from "react";
import { StepCurrent } from "./StepCurrent";
import { StepDisabled } from "./StepDisabled";
import { StepLink } from "./StepLink";

type Props = Omit<ComponentPropsWithoutRef<typeof StepLink>, "href"> & {
  href?: string;
  mode?: "link" | "active" | "disabled";
};
const Step = ({
  number,
  id,
  title,
  classModifier,
  href,
  onClick,
  mode = "link",
  className,
}: Props) => {
  switch (mode) {
    case "link":
      return (
        <StepLink
          id={id}
          href={href ?? "#"}
          number={number}
          classModifier={classModifier}
          className={className}
          title={title}
          onClick={onClick}
        />
      );
    case "active":
      return (
        <StepCurrent
          id={id}
          title={title}
          classModifier={classModifier}
          className={className}
          number={number}
        />
      );
    default:
      return (
        <StepDisabled
          id={id}
          title={title}
          classModifier={classModifier}
          className={className}
          number={number}
        />
      );
  }
};

export { Step };
