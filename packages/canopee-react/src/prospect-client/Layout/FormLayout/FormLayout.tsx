import {
  Children,
  type CSSProperties,
  type FormHTMLAttributes,
  isValidElement,
  type PropsWithChildren,
} from "react";
import "@axa-fr/canopee-css/prospect/Layout/FormLayout/FormLayoutAll.css";
import { getClassName } from "../../utilities/getClassName";

export type FormLayoutProps = FormHTMLAttributes<HTMLFormElement> &
  PropsWithChildren;

const Header = ({ children }: PropsWithChildren) => children;
const Footer = ({ children }: PropsWithChildren) => children;
const Faq = ({ children }: PropsWithChildren) => children;

const setDataCols = ({
  dataColsMobile,
  dataColsTablet,
  dataColsDesktopSmall,
  dataColsDesktopMedium,
  dataColsDesktopLarge,
}: {
  dataColsMobile?: string;
  dataColsTablet?: string;
  dataColsDesktopSmall?: string;
  dataColsDesktopMedium?: string;
  dataColsDesktopLarge?: string;
}) => {
  return {
    "--cols-mobile": dataColsMobile || undefined,
    "--cols-tablet": dataColsTablet || undefined,
    "--cols-desktop-small": dataColsDesktopSmall || undefined,
    "--cols-desktop-medium": dataColsDesktopMedium || undefined,
    "--cols-desktop-large": dataColsDesktopLarge || undefined,
  };
};

const setResponsiveStyle = (childProps: Record<string, unknown>) => {
  const {
    "data-cols-mobile": dataColsMobile,
    "data-cols-tablet": dataColsTablet,
    "data-cols-desktop-small": dataColsDesktopSmall,
    "data-cols-desktop-medium": dataColsDesktopMedium,
    "data-cols-desktop-large": dataColsDesktopLarge,
    ...rest
  } = (childProps?.containerProps as Record<string, string>) || childProps;

  if (childProps?.containerProps) {
    return {
      ...childProps,
      ...rest,
      containerProps: {
        style: {
          ...((childProps.containerProps as Record<string, unknown>)?.style ||
            {}),
          ...setDataCols({
            dataColsMobile,
            dataColsTablet,
            dataColsDesktopSmall,
            dataColsDesktopMedium,
            dataColsDesktopLarge,
          }),
        },
      },
    };
  }

  return {
    ...rest,
    style: {
      ...((rest.style as CSSProperties) || {}),
      ...setDataCols({
        dataColsMobile,
        dataColsTablet,
        dataColsDesktopSmall,
        dataColsDesktopMedium,
        dataColsDesktopLarge,
      }),
    },
  };
};

export const Body = ({ children }: PropsWithChildren) =>
  Children.map(children, function (child) {
    if (isValidElement(child)) {
      const childProps =
        typeof child.props === "object" && child.props !== null
          ? (child.props as Record<string, unknown>)
          : {};
      const responsiveStyle = setResponsiveStyle(childProps);

      return {
        ...child,
        props: responsiveStyle,
      };
    }
    return child;
  });

export const FormLayout = ({
  children,
  className,
  "aria-label": ariaLabel = "Formulaire",
  ...formProps
}: FormLayoutProps) => {
  const childrenArray = Children.toArray(children);

  const header = childrenArray.find(
    (child) => isValidElement(child) && child.type === Header,
  );
  const body = childrenArray.find(
    (child) => isValidElement(child) && child.type === Body,
  );
  const footer = childrenArray.find(
    (child) => isValidElement(child) && child.type === Footer,
  );
  const faq = childrenArray.find(
    (child) => isValidElement(child) && child.type === Faq,
  );

  return (
    <>
      <form
        className={getClassName({
          baseClassName: "af-form-layout",
          className,
        })}
        aria-label={ariaLabel}
        {...formProps}
      >
        {header ? (
          <div className="af-form-layout__header subgrid">{header}</div>
        ) : null}
        {body ? (
          <div className="af-form-layout__fields subgrid">{body}</div>
        ) : null}
        {footer ? (
          <div className="af-form-layout__actions subgrid">{footer}</div>
        ) : null}
      </form>
      {faq ? <div className="af-form-layout__faq subgrid">{faq}</div> : null}
    </>
  );
};

FormLayout.Header = Header;
FormLayout.Body = Body;
FormLayout.Footer = Footer;
FormLayout.Faq = Faq;
