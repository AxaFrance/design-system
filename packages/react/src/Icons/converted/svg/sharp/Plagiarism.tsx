import type { SVGProps } from "react";

const SvgPlagiarism = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={11.5} cy={14.5} r={1.5} />
    <path d="M14 2H4v20h16V8zm1.04 17.45-1.88-1.88c-1.33.71-3.01.53-4.13-.59a3.495 3.495 0 0 1 0-4.95 3.495 3.495 0 0 1 4.95 0 3.48 3.48 0 0 1 .59 4.13l1.88 1.88zM13 9V3.5L18.5 9z" />
  </svg>
);

export { SvgPlagiarism };
