import type { SVGProps } from "react";

const SvgMonitorHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M15.11 12.45 14 10.24l-3.11 6.21c-.17.34-.51.55-.89.55s-.72-.21-.89-.55L7.38 13H2v2h2v3h16v-3h2v-2h-6c-.38 0-.72-.21-.89-.55"
      opacity={0.3}
    />
    <path
      d="M20 6H4v3H2v2h6c.38 0 .72.21.89.55L10 13.76l3.11-6.21c.34-.68 1.45-.68 1.79 0L16.62 11H22V9h-2z"
      opacity={0.3}
    />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v3h2V6h16v3h2V6c0-1.1-.9-2-2-2M20 18H4v-3H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2z" />
    <path d="M14.89 7.55c-.34-.68-1.45-.68-1.79 0L10 13.76l-1.11-2.21A.99.99 0 0 0 8 11H2v2h5.38l1.72 3.45c.18.34.52.55.9.55s.72-.21.89-.55L14 10.24l1.11 2.21c.17.34.51.55.89.55h6v-2h-5.38z" />
  </svg>
);

export { SvgMonitorHeart };
