import "@axa-fr/design-system-apollo-css/dist/Loader/Loader.scss";
import classNames from "classnames";

type LoaderProps = {
  border?: number;
  size?: number;
  variant?: "blue" | "gray" | "white";
  text?: string;
};

const Loader = ({
  border = 5,
  size = 60,
  variant = "blue",
  text = "Chargement en cours",
}: LoaderProps) => (
  <div
    role="alert"
    aria-busy
    aria-label={text}
    aria-live="assertive"
    className={classNames(
      "af-loader__container",
      `af-loader__container--${variant}`,
    )}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      borderWidth: `${border}px`,
      borderTopWidth: `${border}px`,
    }}
  >
    <div className="af-loader__container-spin" aria-hidden="true" />
  </div>
);

Loader.displayName = "Loader";

export { Loader };
