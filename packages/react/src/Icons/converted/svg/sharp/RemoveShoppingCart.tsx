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
    <path d="M1.41 1.13 0 2.54l4.39 4.39 2.21 4.66L3.62 17h10.84l1.38 1.38A1.997 1.997 0 0 0 17 22c.67 0 1.26-.33 1.62-.84L21.46 24l1.41-1.41zM7 15l1.1-2h2.36l2 2zm9.05-2.06h.73L21.7 4H7.12zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2" />
  </svg>
);

export { SvgRemoveShoppingCart };
