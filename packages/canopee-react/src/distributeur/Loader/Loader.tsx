import "@axa-fr/canopee-css/distributeur/Loader/Loader.css";
import type { ReactNode } from "react";

import { getClassName } from "../utilities/helpers/getClassName";
import { ItemLoader, type ItemLoaderVariant } from "./ItemLoader";

const SPINNER_CLASS_NAME = "af-spinner-loader";

export type LoaderProps = {
  className?: string;
  text: string;
  variant?: ItemLoaderVariant;
  children?: ReactNode;
};

export const Loader = ({
  className,
  text,
  variant = "fullscreen",
  children,
}: LoaderProps) => {
  const loader = (
    <section
      role="alert"
      aria-live="assertive"
      aria-busy="true"
      className={getClassName({
        baseClassName: SPINNER_CLASS_NAME,
        modifiers: [variant !== "inline" && variant],
        className,
      })}
    >
      <ItemLoader variant={variant} />
      <p className={`${SPINNER_CLASS_NAME}__text`}>{text}</p>
    </section>
  );

  if (variant === "fullscreen" && children) {
    return (
      <>
        {children}
        {loader}
      </>
    );
  }

  return loader;
};
