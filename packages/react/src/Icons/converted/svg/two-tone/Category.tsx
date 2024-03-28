import type { SVGProps } from "react";

const SvgCategory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={17.5} cy={17.5} r={2.5} opacity={0.3} />
    <path d="M5 15.5h4v4H5zm7-9.66L10.07 9h3.86z" opacity={0.3} />
    <path d="m12 2-5.5 9h11zm0 3.84L13.93 9h-3.87zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5m0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5M11 13.5H3v8h8zm-2 6H5v-4h4z" />
  </svg>
);

export { SvgCategory };
