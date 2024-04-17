import {
  type AriaAttributes,
  type SVGAttributes,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { svgInjector } from "./svgInjector";

type SvgProps = Pick<
  SVGAttributes<SVGSVGElement>,
  "id" | "width" | "height" | "className" | "style" | "fill" | "stroke"
> &
  AriaAttributes & {
    src: string;
    alt?: string;
  };

export const Svg = ({
  src,
  alt,
  width,
  height,
  fill,
  stroke,
  ...props
}: SvgProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    if (hasError) {
      setHasError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (root) {
      const svg = document.createElement("svg");
      root.appendChild(svg);

      const attributes: Record<string, unknown> = {
        "data-src": src,
        width,
        height,
        fill,
        stroke,
        ...props,
      };

      Object.keys(attributes).forEach((attribute) => {
        const value = attributes[attribute] as string | number;
        if (value) {
          svg.setAttribute(attribute, value.toString());
        }
      });

      svgInjector(svg, {
        afterEach: (error) => {
          if (error) {
            setHasError(true);
          }
        },
      });
    }

    return () => {
      if (root) {
        root.innerHTML = "";
      }
    };
  }, [fill, height, props, src, stroke, width]);

  if (hasError) {
    return alt ? <span {...props}>{alt}</span> : null;
  }

  return <div style={{ display: "contents" }} ref={rootRef} />;
};
