import type { SVGProps } from "react";

const SvgLinkedCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 9v11H4V8h4.05l1.83-2H15V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9zm.67-1.01H22A6.003 6.003 0 0 0 16 2v1.33c2.58 0 4.66 2.08 4.67 4.66m-2.67 0h1.33A3.327 3.327 0 0 0 16 4.67V6c1.11 0 1.99.89 2 1.99M7 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5m8 0c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3 3 1.34 3 3" />
  </svg>
);

export { SvgLinkedCamera };
