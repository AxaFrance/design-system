import type { SVGProps } from "react";

const SvgEqualizer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z" />
  </svg>
);

export { SvgEqualizer };
