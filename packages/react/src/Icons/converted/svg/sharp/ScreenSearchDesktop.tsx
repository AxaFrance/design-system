import type { SVGProps } from "react";

const SvgScreenSearchDesktop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M1 19h22v2H1zM22 3H2v15h19.99zm-6.53 12.03-2.09-2.09c-1.35.87-3.17.71-4.36-.47-1.37-1.37-1.37-3.58 0-4.95s3.58-1.37 4.95 0c1.18 1.18 1.34 3 .47 4.36l2.09 2.09z" />
    <circle cx={11.5} cy={10} r={2} />
  </svg>
);

export { SvgScreenSearchDesktop };
