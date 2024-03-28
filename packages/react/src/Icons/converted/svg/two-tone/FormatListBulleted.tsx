import type { SVGProps } from "react";

const SvgFormatListBulleted = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 5h14v2H7z" />
    <circle cx={4} cy={6} r={1.5} />
    <path d="M7 11h14v2H7zm0 6h14v2H7zm-3 2.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5-1.5.68-1.5 1.5.68 1.5 1.5 1.5" />
    <circle cx={4} cy={12} r={1.5} />
  </svg>
);

export { SvgFormatListBulleted };
