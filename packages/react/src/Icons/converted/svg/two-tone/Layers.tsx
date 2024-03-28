import type { SVGProps } from "react";

const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6.26 9 12 13.47 17.74 9 12 4.53z" opacity={0.3} />
    <path d="m19.37 12.8-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2 3 9l1.63 1.27L12 16l7.36-5.73L21 9zm0 11.47L6.26 9 12 4.53 17.74 9z" />
  </svg>
);

export { SvgLayers };
