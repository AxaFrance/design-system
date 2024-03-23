import type { SVGProps } from "react";

const SvgTableChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M10 10.02h5V21h-5zM17 21h5V10h-5zm5-18H3v5h19zM3 21h5V10H3z" />
  </svg>
);

export { SvgTableChart };
