import type { SVGProps } from "react";

const SvgFormatShapes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M3 3h2v2H3zm16 16h2v2h-2zm0-16h2v2h-2zM3 19h2v2H3z"
      opacity={0.3}
    />
    <path d="m11.29 7-3.4 9h1.62l.73-2h3.49l.74 2h1.63l-3.41-9zm-.6 5.74L12 8.91l1.3 3.83zM17 3H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2V1h-6zM3 3h2v2H3zm2 18H3v-2h2zm16 0h-2v-2h2zM19 3h2v2h-2zm0 14h-2v2H7v-2H5V7h2V5h10v2h2z" />
  </svg>
);

export { SvgFormatShapes };
