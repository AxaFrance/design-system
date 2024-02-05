import { PropsWithChildren } from "react";
import { getComponentClassName } from "../Form/core";
import { Modes } from "./LoaderModes";
import "@axa-fr/design-system-css/dist/Loader/Loader.scss";

const texts: Record<string, string> = {
  get: "Chargement en cours",
  post: "Sauvegarde en cours",
  delete: "Suppression en cours",
  update: "Mise à jour en cours",
  error: "Une erreur est survenue lors du chargement du composant",
};

type ValueOf<T> = T[keyof T];
type Mode = ValueOf<typeof Modes>;

type LoaderProps = {
  className?: string;
  mode: Mode;
  text?: string;
  classModifier?: string;
};

export const Loader = ({
  className,
  text,
  children,
  classModifier,
  mode = Modes.none,
}: PropsWithChildren<LoaderProps>) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-loader",
  );
  const message = text || texts[mode];
  const isLoaderVisible = mode !== Modes.none;
  const isLoaderInError = mode === Modes.error;

  return (
    <div className={componentClassName}>
      {children}
      {isLoaderVisible && (
        <div className={`${componentClassName} af-loader-on`}>
          <div
            className="af-spinner"
            role="alert"
            aria-live="assertive"
            aria-busy={!isLoaderInError}
            aria-label={message}
          >
            {!isLoaderInError && <div className="af-spinner__animation" />}
            <div className="af-spinner__caption">{message}</div>
          </div>
        </div>
      )}
    </div>
  );
};
