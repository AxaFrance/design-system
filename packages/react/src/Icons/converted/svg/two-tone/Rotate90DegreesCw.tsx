import type { SVGProps } from "react";

const SvgRotate90DegreesCw = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4.64 19.37c3.03 3.03 7.67 3.44 11.15 1.25l-1.46-1.46c-2.66 1.43-6.04 1.03-8.28-1.21a7.007 7.007 0 0 1 0-9.9C7.42 6.69 9.21 6.03 11 6.03V9l4-4-4-4v3.01c-2.3 0-4.61.87-6.36 2.63-3.52 3.51-3.52 9.21 0 12.73M11 13l6 6 6-6-6-6zm6 3.17L13.83 13 17 9.83 20.17 13z" />
    <path
      d="m13.817 12.995 3.175-3.175 3.175 3.175-3.175 3.174z"
      opacity={0.3}
    />
  </svg>
);

export { SvgRotate90DegreesCw };
