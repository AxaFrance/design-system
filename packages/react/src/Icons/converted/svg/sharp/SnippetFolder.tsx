import type { SVGProps } from "react";

const SvgSnippetFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m12 6-2-2H2v16h20V6zm7 11h-6V9h3.5l2.5 2.5zm-3.12-6.5 1.62 1.62v3.38h-3v-5z" />
  </svg>
);

export { SvgSnippetFolder };
