import type { SVGProps } from "react";

const SvgLaptopChromebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 5h16v10H4z" opacity={0.3} />
    <path d="M22 18V3H2v15H0v2h24v-2zm-8 0h-4v-1h4zm6-3H4V5h16z" />
  </svg>
);

export { SvgLaptopChromebook };
