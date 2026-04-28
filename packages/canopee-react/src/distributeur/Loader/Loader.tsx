import "@axa-fr/canopee-css/distributeur/Loader/Loader.css";
import classNames from "classnames";
import { Spinner } from "../Spinner/Spinner";

/**
 * Available variants for the Loader component.
 * - "inline": standard one-line loader (default)
 * - "fullScreen": loader that covers the entire screen
 * - "content": vertical loader with a smaller spinner, intended for content areas
 */
type LoaderVariant = "inline" | "fullScreen" | "content";

type LoaderProps = {
  /** The text to display alongside the loading spinner. */
  text: string;
  /** The visual variant of the loader. @default "inline" */
  variant?: LoaderVariant;
  /** Additional CSS class names to apply to the loader container. */
  className?: string;
};

const DEFAULT_CLASS_NAME = "af-loader";

export const Loader = ({
  className,
  text,
  variant = "inline",
}: LoaderProps) => (
  <section
    role="alert"
    aria-live="assertive"
    aria-busy="true"
    className={classNames(
      DEFAULT_CLASS_NAME,
      variant !== "inline" && `${DEFAULT_CLASS_NAME}--${variant}`,
      className,
    )}
  >
    <Spinner />
    <p>{text}</p>
  </section>
);
