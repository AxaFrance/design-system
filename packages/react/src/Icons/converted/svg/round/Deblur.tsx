import type { SVGProps } from "react";

const SvgDeblur = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 3v18a9 9 0 0 0 0-18" />
    <circle cx={6} cy={14} r={1} />
    <circle cx={6} cy={18} r={1} />
    <circle cx={6} cy={10} r={1} />
    <circle cx={3} cy={10} r={0.5} />
    <circle cx={6} cy={6} r={1} />
    <circle cx={3} cy={14} r={0.5} />
    <circle cx={10} cy={21} r={0.5} />
    <circle cx={10} cy={3} r={0.5} />
    <circle cx={10} cy={6} r={1} />
    <circle cx={10} cy={14} r={1.5} />
    <circle cx={10} cy={10} r={1.5} />
    <circle cx={10} cy={18} r={1} />
  </svg>
);

export { SvgDeblur };
