import type { SVGProps } from "react";

const SvgLightbulb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2M8 17h8v2H8zM12 2C7.86 2 4.5 5.36 4.5 9.5c0 3.82 2.66 5.86 3.77 6.5h7.46c1.11-.64 3.77-2.68 3.77-6.5C19.5 5.36 16.14 2 12 2" />
  </svg>
);

export { SvgLightbulb };
