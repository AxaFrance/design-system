import {
  ComponentProps,
  type SVGAttributes,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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

export const Svg = ({ src, alt, ...props }: SvgProps) => {
  const rootRef = useRef<SVGSVGElement | null>(null);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    if (hasError) {
      setHasError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  useLayoutEffect(() => {
    if (hasError) {
      return;
    }

    const root = rootRef.current;
    if (root) {
      const parent = document.createElement("div");
      const svg = document.createElement("svg");
      parent.appendChild(svg);

      cloneAttributes(root, svg);

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
  }, [src, hasError]);

  if (hasError) {
    return alt ? (
      <span {...(props as ComponentProps<"span">)}>{alt}</span>
    ) : null;
  }

  return <svg ref={rootRef} data-src={src} {...props} />;
};
