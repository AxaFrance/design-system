import type { SVGProps } from "react";

const SvgTornado = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="m20.11 8 1.16-2c.77-1.33-.19-3-1.73-3H4.47c-1.54 0-2.5 1.67-1.73 3L3.9 8zM7.95 15l2.32 4.01c.77 1.33 2.69 1.33 3.46 0L16.05 15zM18.95 10H5.05l1.74 3h10.42z" />
  </svg>
);

export { SvgTornado };
