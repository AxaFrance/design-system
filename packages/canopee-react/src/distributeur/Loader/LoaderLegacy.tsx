import "@axa-fr/canopee-css/distributeur/Loader/LoaderLegacy.css";
import { type ReactNode } from "react";
import { getComponentClassName } from "../utilities";

type LoaderMode = "none" | "get" | "post" | "delete" | "update" | "error";

const getText = (index: LoaderMode) => {
  switch (index) {
    case "get":
      return "Chargement en cours";
    case "post":
      return "Sauvegarde en cours";
    case "delete":
      return "Suppression en cours";
    case "update":
      return "Mise à jour en cours";
    case "error":
      return "Une erreur est survenue lors du chargement du composant";
    default:
      return "";
  }
};

type LoaderLegacyProps = {
  className?: string;
  mode: LoaderMode;
  text?: string;
  children: ReactNode;
  classModifier?: string;
};

/**
 * @deprecated Use the new {@link Loader} variant-based component instead.
 * This wrapper-style loader is kept to ease the migration and will be
 * removed in the next major release.
 */
export const LoaderLegacy = ({
  className,
  text,
  children,
  classModifier,
  mode = "none",
}: LoaderLegacyProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-loader",
  );
  const message = text || getText(mode);
  const isLoaderVisible = mode !== "none";
  const isLoaderInError = mode === "error";

  return (
    <div className={componentClassName}>
      {children}
      {isLoaderVisible ? (
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
      ) : null}
    </div>
  );
};
