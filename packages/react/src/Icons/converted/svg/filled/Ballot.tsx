import type { SVGProps } from "react";

const SvgBallot = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 9.5h5v-2h-5zm0 7h5v-2h-5zm6 4.5H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2M6 11h5V6H6zm1-4h3v3H7zM6 18h5v-5H6zm1-4h3v3H7z"
    />
  </svg>
);

export { SvgBallot };
