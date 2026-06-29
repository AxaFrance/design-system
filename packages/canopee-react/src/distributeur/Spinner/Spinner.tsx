import "@axa-fr/canopee-css/distributeur/Spinner/Spinner.css";
import spinner from "@axa-fr/canopee-css/spinner.svg";
import { Svg } from "../Svg";
import { getClassName } from "../utilities/helpers/getClassName";

export type SpinnerVariant = "inline" | "fullScreen" | "content";

type SpinnerProps = {
  text: string;
  variant?: SpinnerVariant;
  className?: string;
};

const DEFAULT_CLASS_NAME = "af-loader-spinner";

export const Spinner = ({
  className,
  text,
  variant = "inline",
}: SpinnerProps) => (
  <section
    role="alert"
    aria-live="assertive"
    aria-busy="true"
    className={getClassName({
      baseClassName: DEFAULT_CLASS_NAME,
      modifiers: [variant !== "inline" && variant],
      className,
    })}
  >
    <Svg className={`${DEFAULT_CLASS_NAME}__icon`} src={spinner} />
    <p className={`${DEFAULT_CLASS_NAME}__text`}>{text}</p>
  </section>
);
