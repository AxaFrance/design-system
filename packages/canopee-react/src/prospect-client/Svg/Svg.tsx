import "@axa-fr/canopee-css/prospect/Svg/Svg.css";
import React, { type ComponentProps, type SVGAttributes } from "react";
import { svgInjector } from "./svgInjector";

type SvgProps = SVGAttributes<SVGSVGElement> & {
  src: string;
  alt?: string;
};

const cloneAttributes = (
  from: HTMLElement | SVGSVGElement,
  to: HTMLElement | SVGSVGElement,
) => {
  const attributes = from.getAttributeNames();
  attributes.forEach((attribute) => {
    to.setAttribute(attribute, from.getAttribute(attribute) as string);
  });
};

/**
 * @deprecated Use Icon instead
 */
export const Svg = ({
  className,
  src,
  alt,
  width = 24,
  height = 24,
  ...props
}: SvgProps) => {
  const rootRef = React.useRef<SVGSVGElement | null>(null);
  const [hasError, setHasError] = React.useState(false);

  React.useLayoutEffect(() => {
    if (hasError) {
      setHasError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  React.useLayoutEffect(() => {
    if (hasError) {
      return;
    }

    const root = rootRef.current;
    if (root) {
      const parent = document.createElement("div");
      const svg = document.createElement("svg");
      parent.appendChild(svg);

      cloneAttributes(root, svg);

      // Default SVG size was 24px with @material-design-icons/svg. With @material-symbols/svg-400 this is now 48px (with no native way to change it)
      // In order not to break existing CSS, we manually set the default value back to 24px
      svg.setAttribute("width", width.toString());
      svg.setAttribute("height", height.toString());

      svgInjector(svg, {
        afterEach: (error, svgInject) => {
          if (error) {
            setHasError(true);
          }

          if (svgInject) {
            root.innerHTML = svgInject.innerHTML;
            cloneAttributes(svgInject, root);
          }
        },
      });
    }
  }, [src, width, height, hasError]);

  if (hasError) {
    return alt ? (
      <span {...(props as ComponentProps<"span">)}>{alt}</span>
    ) : null;
  }

  return (
    <svg
      ref={rootRef}
      className={["af-svg", className].filter(Boolean).join(" ")}
      data-src={src}
      width={width}
      height={height}
      {...props}
    />
  );
};
