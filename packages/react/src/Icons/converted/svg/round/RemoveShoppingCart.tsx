import type { SVGProps } from "react";

const SvgRemoveShoppingCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M.71 1.83a.996.996 0 0 0 0 1.41l3.68 3.68 2.21 4.66-1.35 2.45c-.19.33-.28.73-.24 1.15.1 1.06 1.06 1.82 2.12 1.82h7.33l1.38 1.38A1.997 1.997 0 0 0 17 22c.67 0 1.26-.33 1.62-.84l2.13 2.13a.996.996 0 1 0 1.41-1.41L2.12 1.83a.996.996 0 0 0-1.41 0M7 15l1.1-2h2.36l2 2zm9.05-2.06c.54-.14.99-.49 1.25-.97l3.58-6.49C21.25 4.82 20.76 4 20 4H7.12zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2" />
  </svg>
);

export { SvgRemoveShoppingCart };
