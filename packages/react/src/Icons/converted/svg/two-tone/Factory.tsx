import type { SVGProps } from "react";

const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 12V9.95l-5 2V10l-3 1.32V20h16v-8zm-3 6H7v-4h2zm4 0h-2v-4h2zm4 0h-2v-4h2z"
      opacity={0.3}
    />
    <path d="M22 22H2V10l7-3v2l5-2v3h3l1-8h3l1 8zM12 9.95l-5 2V10l-3 1.32V20h16v-8h-8zM11 18h2v-4h-2zm-4 0h2v-4H7zm10-4h-2v4h2z" />
  </svg>
);

export { SvgFactory };
