import type { SVGProps } from "react";

const SvgAutoDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15 2h-3.5l-1-1h-5l-1 1H1v2h14zM16 9c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7m-7 7c0 .34.03.67.08 1H4V7h8v3.26c-1.81 1.27-3 3.36-3 5.74m7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5" />
    <path d="M16.5 12H15v5l3.6 2.1.8-1.2-2.9-1.7z" />
  </svg>
);

export { SvgAutoDelete };
