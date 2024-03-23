import type { SVGProps } from "react";

const SvgTakeoutDining = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fillRule="evenodd"
      d="M5.26 11h13.48l-.67 9H5.93zm3.76-7h5.95L19 7.38l1.59-1.59L22 7.21 19.21 10H4.79L2 7.21 3.41 5.8 5 7.38z"
    />
  </svg>
);

export { SvgTakeoutDining };
