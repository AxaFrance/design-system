import type { SVGProps } from "react";

const SvgElectricalServices = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 13h3v2h-3zM12 12v2h-2v4h2v2h5v-8z" />
    <path d="M5 11h7V4H4v2h6v3H3v8h6v-2H5zM18 17h3v2h-3z" />
  </svg>
);

export { SvgElectricalServices };
