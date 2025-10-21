import "@axa-fr/design-system-slash-css/dist/Loader/LoaderLegacy.css";
import React from "react";
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

type LoaderProps = {
  className?: string;
  mode: LoaderMode;
  text?: string;
  children: React.ReactNode;
  classModifier?: string;
};

/**
 * @deprecated This component is deprecated. Use the new Loader component instead.
 */
export const LoaderLegacy = ({
  className,
  text,
  children,
  classModifier,
  mode = "none",
}: LoaderProps) => {
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
