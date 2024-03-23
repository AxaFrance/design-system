import type { SVGProps } from "react";

const SvgArticle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 3v18h18V3zm11 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z" />
  </svg>
);

export { SvgArticle };
