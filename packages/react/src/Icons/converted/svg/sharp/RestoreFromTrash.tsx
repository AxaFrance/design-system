import type { SVGProps } from "react";

const SvgRestoreFromTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6 21h12V7H6zm6-11 4 4h-2v4h-4v-4H8zm3.5-6-1-1h-5l-1 1H5v2h14V4z" />
  </svg>
);

export { SvgRestoreFromTrash };
