import type { SVGProps } from "react";

const SvgHdrAutoSelect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3.5 18h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5zM10 16H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5H8v-3h2zM22 18.5v-2h-1.5v2h-2V20h2v2H22v-2h2v-1.5zM13 22h1.5v-2h1.1l.9 2H18l-.86-2H18v-4h-5zm1.5-4.5h2v1h-2zM11.97 5.3l-1.02 2.89h2.1L12.03 5.3z" />
    <path d="M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m2.04 9-.63-1.79h-2.83L9.96 11H8.74l2.63-7h1.25l2.63 7z" />
  </svg>
);

export { SvgHdrAutoSelect };
