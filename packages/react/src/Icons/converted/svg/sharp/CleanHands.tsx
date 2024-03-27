import type { SVGProps } from "react";

const SvgCleanHands = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m14.99 7 1.37-.63.63-1.37.63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37zM20 14c1.1 0 2-.9 2-2s-2-4-2-4-2 2.9-2 4 .9 2 2 2M1 22h4V11H1zM9.24 9.5 15 11.65V11a5 5 0 0 0-4-4.9V4h2c.57 0 1.1.17 1.55.45l1.43-1.43A4.9 4.9 0 0 0 13 2H7.5v2H9v2.11c-1.78.37-3.2 1.68-3.75 3.39zM22 17h-9l-2.09-.73.33-.94L13 16h4v-2l-8.03-3H7v9.02L14 22l8-3z" />
  </svg>
);

export { SvgCleanHands };
