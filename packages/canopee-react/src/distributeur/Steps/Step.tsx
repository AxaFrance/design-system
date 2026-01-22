import { StepCurrent } from "./StepCurrent";
import { StepDisabled } from "./StepDisabled";
import { StepLink, type StepLinkProps } from "./StepLink";
import { StepMode } from "./types";

type Props = Omit<StepLinkProps, "href"> & {
  href?: string;
  mode?: StepMode;
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
  stateLabel,
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
          stateLabel={stateLabel || "complété"}
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
          stateLabel={stateLabel || "en cours"}
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
          stateLabel={stateLabel || "à venir"}
        />
      );
  }
};

export { Step };
