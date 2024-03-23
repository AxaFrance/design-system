import type { SVGProps } from "react";

const SvgIcecream = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24A4.01 4.01 0 0 0 3 10c0 2.21 1.79 4 4 4 .12 0 .23-.02.34-.02l3.83 7.31c.38.72 1.41.71 1.78-.01l3.73-7.31c.11.01.21.03.32.03 2.21 0 4-1.79 4-4 0-1.71-1.08-3.19-2.62-3.76m-6.33 12.39-2.73-5.21a6.468 6.468 0 0 0 5.4-.02z" />
  </svg>
);

export { SvgIcecream };
