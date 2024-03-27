import type { SVGProps } from "react";

const SvgAllOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m16.21 4.16 4 4v-4zm4 12-4 4h4zm-12 4-4-4v4zm-4-12 4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9m-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7" />
    <path fill="none" d="M.21.16h24v24h-24z" />
  </svg>
);

export { SvgAllOut };
