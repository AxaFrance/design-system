import type { SVGProps } from "react";

const SvgLayersClear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m19.81 14.99 1.19-.92-1.43-1.43-1.19.92zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88zM3.27 1 2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73z" />
  </svg>
);

export { SvgLayersClear };
