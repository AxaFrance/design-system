import type { SVGProps } from "react";

const SvgCarRepair = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 17.01V19h7v3h2v-3h7v-1.99zM7 14h10v2h2V8.69L17.11 3H6.89L5 8.69V16h2zm2-2.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M8.33 5h7.34l.66 2H7.67z" />
  </svg>
);

export { SvgCarRepair };
