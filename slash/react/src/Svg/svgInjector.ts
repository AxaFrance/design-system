import {
  type AfterAll,
  type BeforeEach,
  type Errback,
  type EvalScripts,
  SVGInjector,
} from "@tanem/svg-injector";
import DOMPurify from "dompurify";

type Options = {
  afterAll?: AfterAll;
  afterEach?: Errback;
  beforeEach?: BeforeEach;
  cacheRequests?: boolean;
  evalScripts?: EvalScripts;
  httpRequestWithCredentials?: boolean;
  renumerateIRIElements?: boolean;
};

const attributesToRestore = ["fill", "stroke"];

const restoreAttributes = (
  element: HTMLElement | SVGSVGElement | null,
  svg: SVGSVGElement,
) => {
  const attributes = {} as Record<string, string>;
  element?.getAttributeNames().forEach((attribute) => {
    if (
      attribute.startsWith("aria-") ||
      attributesToRestore.includes(attribute)
    ) {
      attributes[attribute] = element.getAttribute(attribute) as string;
    }
  });

  Object.keys(attributes).forEach((attribute) => {
    svg.setAttribute(attribute, attributes[attribute]);
  });
};

export const svgInjector = (
  element: HTMLElement | SVGSVGElement | null,
  { beforeEach = () => {}, ...options }: Options = {},
) => {
  SVGInjector(element, {
    ...options,
    beforeEach: (svg) => {
      DOMPurify.sanitize(svg, {
        USE_PROFILES: { svg: true, svgFilters: true },
        IN_PLACE: true,
      });

      restoreAttributes(element, svg);

      beforeEach(svg);
    },
  });
};
