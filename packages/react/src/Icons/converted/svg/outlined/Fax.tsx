import type { SVGProps } from "react";

const SvgFax = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 9h-1V4H8v5h-.78C6.67 8.39 5.89 8 5 8c-1.66 0-3 1.34-3 3v7c0 1.66 1.34 3 3 3 .89 0 1.67-.39 2.22-1H22v-8c0-1.66-1.34-3-3-3M6 18c0 .55-.45 1-1 1s-1-.45-1-1v-7c0-.55.45-1 1-1s1 .45 1 1zm4-12h6v3h-6zm10 12H8v-7h11c.55 0 1 .45 1 1z" />
    <circle cx={15} cy={13} r={1} />
    <circle cx={18} cy={13} r={1} />
    <circle cx={15} cy={16} r={1} />
    <circle cx={18} cy={16} r={1} />
    <path d="M9 12h4v5H9z" />
  </svg>
);

export { SvgFax };
