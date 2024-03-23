import type { SVGProps } from "react";

const SvgHdrEnhancedSelect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m3 7h-2v2h-2V9H9V7h2V5h2v2h2zM10 16H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5H8v-3h2zM18 16h-5v6h1.5v-2h1.1l.9 2H18l-.86-2H18zm-1.5 2.5h-2v-1h2zM3.5 18h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5zM22 18.5v-2h-1.5v2h-2V20h2v2H22v-2h2v-1.5z" />
  </svg>
);

export { SvgHdrEnhancedSelect };
