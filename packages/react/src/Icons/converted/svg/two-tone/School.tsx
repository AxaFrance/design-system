import type { SVGProps } from "react";

const SvgSchool = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M7 12.27v3.72l5 2.73 5-2.73v-3.72L12 15zM5.18 9 12 12.72 18.82 9 12 5.28z"
      opacity={0.3}
    />
    <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm5 12.99-5 2.73-5-2.73v-3.72L12 15l5-2.73zm-5-3.27L5.18 9 12 5.28 18.82 9z" />
  </svg>
);

export { SvgSchool };
