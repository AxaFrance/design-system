import type { SVGProps } from "react";

const SvgAssistantPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m12.36 6 .08.39.32 1.61H18v6h-3.36l-.08-.39-.32-1.61H7V6zM14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" />
  </svg>
);

export { SvgAssistantPhoto };
