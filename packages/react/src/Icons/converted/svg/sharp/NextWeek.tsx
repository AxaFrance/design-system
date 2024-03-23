import type { SVGProps } from "react";

const SvgNextWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 7h-6V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H2v15h20zM10 5h4v2h-4zm1 13.5-1-1 3-3-3-3 1-1 4 4z" />
  </svg>
);

export { SvgNextWeek };
