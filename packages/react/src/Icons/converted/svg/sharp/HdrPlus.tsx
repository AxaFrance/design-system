import type { SVGProps } from "react";

const SvgHdrPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8.5 14.5h2v1h-2zM14.5 7.5H16v3h-1.5z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 15-.86-.01L12 19h-1.5l-.9-2H8.5v2H7v-6h5v4m0-5h-1.5V9.5h-2V12H7V6h1.5v2h2V6H12zm5.5 4H16v1.5h-1.5V16H13v-1.5h1.5V13H16v1.49h1.5zm0-5.5c0 .8-.7 1.5-1.5 1.5h-3V6h3c.8 0 1.5.7 1.5 1.5z" />
  </svg>
);

export { SvgHdrPlus };
