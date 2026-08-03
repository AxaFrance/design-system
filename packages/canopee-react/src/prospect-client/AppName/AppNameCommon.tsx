import logoAxa from "@axa-fr/canopee-css/logo-axa.svg";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { getClassName } from "../utilities/getClassName";

/**
 * Props for the AppName component.
 */
export type AppNameProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * Application name displayed next to the AXA logo.
   */
  label: string;
  /**
   * Alt text for the AXA logo image.
   * @default "Logo AXA"
   */
  logoAlt?: string;
  /**
   * Props forwarded to the `LogoLinkComponent` (defaults to `<a>`).
   * @example { href: "/" }
   * @example { to: "/" } // for React Router Link
   */
  logoLinkProps?: Record<string, unknown>;
  /**
   * Element or component used to wrap the logo.
   * Accepts native HTML elements (`"a"`) or custom components (e.g. `Link` from React Router or the DS).
   * `logoLinkProps` are forwarded to it.
   * @default "a"
   * @example "a"
   * @example Link // from react-router-dom or the DS
   */
  LogoLinkComponent?: ElementType;
};

/**
 * Displays the application name alongside the AXA logo.
 * The logo can optionally be wrapped in a native anchor or a custom link component.
 *
 * @component
 * @param {AppNameProps} props - AppName props.
 * @param {string} props.label - Application name displayed next to the logo.
 * @param {string} [props.logoAlt="Logo AXA"] - Alt text for the AXA logo image.
 * @param {Record<string, unknown>} [props.logoLinkProps] - Props forwarded to the wrapping anchor or `LogoLinkComponent`.
 * @param {ElementType} [props.LogoLinkComponent="a"] - Element or component used to wrap the logo. Accepts `"a"` or any custom link component (e.g. React Router `Link`).
 * @returns {JSX.Element} The rendered AppName component.
 */

export const AppNameCommon = ({
  label,
  className,
  logoAlt = "Logo AXA",
  logoLinkProps,
  LogoLinkComponent = "a",
  ...props
}: AppNameProps) => {
  const logo = (
    <img src={logoAxa} alt={logoAlt} className="af-app-name__logo" />
  );

  return (
    <div
      className={getClassName({
        baseClassName: "af-app-name",
        className,
      })}
      {...props}
    >
      {LogoLinkComponent ? (
        <LogoLinkComponent
          className="af-app-name__logo-link"
          {...logoLinkProps}
        >
          {logo}
        </LogoLinkComponent>
      ) : (
        logo
      )}
      <span className="af-app-name__label">{label}</span>
    </div>
  );
};
