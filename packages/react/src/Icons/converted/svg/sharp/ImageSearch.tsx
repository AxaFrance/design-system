import type { SVGProps } from "react";

const SvgImageSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 13v7H4V6h5.02c.05-.71.22-1.38.48-2H2v18h18v-7zm-1.5 5h-11l2.75-3.53 1.96 2.36 2.75-3.54zm2.8-9.11c.44-.7.7-1.51.7-2.39C20 4.01 17.99 2 15.5 2S11 4.01 11 6.5s2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21 13.42 22.42 12zM15.5 9a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5" />
  </svg>
);

export { SvgImageSearch };
