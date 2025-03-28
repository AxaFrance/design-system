import "@axa-fr/design-system-slash-css/dist/Loader/Loader.scss";
import React from "react";
import { getComponentClassName } from "../utilities";

type LoaderMode = "none" | "get" | "post" | "delete" | "update" | "error";
type Variant = "blue" | "white";

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
  variant?: Variant;
};

export const Loader = ({
  className,
  text,
  children,
  classModifier,
  mode = "none",
  variant = "blue",
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
      {isLoaderVisible && (
        <div className={`${componentClassName} af-loader-on`}>
          <div
            className="af-spinner"
            role="alert"
            aria-live="assertive"
            aria-busy={!isLoaderInError}
            aria-label={message}
          >
            <div className="af-spinner__caption">{message}</div>
            {!isLoaderInError && (
              <div
                className={`af-loader-circle af-loader-circle--${variant}`}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
