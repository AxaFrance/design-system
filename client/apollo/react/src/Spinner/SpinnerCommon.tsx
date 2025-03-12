export const spinnerVariants = {
  blue: "blue",
  gray: "gray",
  white: "white",
} as const;

export type SpinnerVariants = keyof typeof spinnerVariants;

const DEFAULT_CLASSNAME = "af-spinner";

type SpinnerProps = {
  size?: 24 | 32 | 40;
  variant?: SpinnerVariants;
  text?: string;
};

const Spinner = ({
  size = 40,
  variant = "blue",
  text = "Chargement en cours",
}: SpinnerProps) => (
  <div
    role="alert"
    aria-busy
    aria-label={text}
    aria-live="assertive"
    className={[
      DEFAULT_CLASSNAME,
      `${DEFAULT_CLASSNAME}--${variant}`,
      `${DEFAULT_CLASSNAME}--${size}`,
    ]
      .filter(Boolean)
      .join(" ")}
    style={
      {
        "--spinner-size": size,
      } as React.CSSProperties
    }
  >
    <div className="af-spinner__container-spin" aria-hidden="true" />
  </div>
);

Spinner.displayName = "Spinner";

export { Spinner };
