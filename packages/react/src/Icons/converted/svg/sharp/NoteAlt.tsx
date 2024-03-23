import type { SVGProps } from "react";

const SvgNoteAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18zm-9-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75M9.1 17H7v-2.14l5.96-5.96 2.12 2.12zm8.1-8.09-1.41 1.41-2.13-2.12 1.41-1.41z" />
  </svg>
);

export { SvgNoteAlt };
