import type { SVGProps } from "react";

const SvgMedication = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6 3h12v2H6zM19 6H5v15h14zm-3 9h-2.5v2.5h-3V15H8v-3h2.5V9.5h3V12H16z" />
  </svg>
);

export { SvgMedication };
