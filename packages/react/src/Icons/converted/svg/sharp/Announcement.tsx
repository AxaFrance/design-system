import type { SVGProps } from "react";

const SvgAnnouncement = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 2H2v20l4-4h16zm-9 9h-2V5h2zm0 4h-2v-2h2z" />
  </svg>
);

export { SvgAnnouncement };
