import type { SVGProps } from "react";

const SvgLandslide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m15.47 13.79-2.58-1.03L6 15.05l-4-1.54v2.1l4 1.34zM10.57 11.42 8 8H2v3.61l4 1.34zM6 19.05l-4-1.33V22h20l-4.97-6.62zM17 6V1l-5-1-3 2v4l3 2zM18.5 7 16 9v3l2.5 2 4.5-2V8z" />
  </svg>
);

export { SvgLandslide };
