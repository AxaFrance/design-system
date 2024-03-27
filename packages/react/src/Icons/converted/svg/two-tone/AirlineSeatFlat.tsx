import type { SVGProps } from "react";

const SvgAirlineSeatFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M5 11a1 1 0 0 0 .71-.3c.39-.4.39-1.02-.01-1.41C5.51 9.11 5.26 9 5 9a1 1 0 0 0-.71.3c-.39.4-.39 1.02.01 1.41.19.18.44.29.7.29m13-2h-7v2h9c0-1.1-.9-2-2-2"
      opacity={0.3}
    />
    <path d="M5 13a3 3 0 0 0 2.1-5.14C6.51 7.29 5.75 7 5 7a3 3 0 0 0-2.1 5.14c.59.57 1.35.86 2.1.86m-.71-3.7a1 1 0 0 1 1.41-.02c.4.39.4 1.01.02 1.41-.2.2-.45.31-.72.31-.26 0-.51-.1-.7-.28-.4-.4-.4-1.02-.01-1.42M18 7H9v6h13v-2c0-2.21-1.79-4-4-4m-7 4V9h7c1.1 0 2 .9 2 2zm-9 5h6v2h8v-2h6v-2H2z" />
  </svg>
);

export { SvgAirlineSeatFlat };
