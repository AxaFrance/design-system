import type { SVGProps } from "react";

const SvgPersonAddAlt1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={9} cy={8} r={2} opacity={0.3} />
    <path d="M9 16c-2.7 0-5.8 1.29-6 2h12c-.22-.72-3.31-2-6-2" opacity={0.3} />
    <path d="M9 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m-6 4c.2-.71 3.3-2 6-2 2.69 0 5.78 1.28 6 2zM20 10V7h-2v3h-3v2h3v3h2v-3h3v-2zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
  </svg>
);

export { SvgPersonAddAlt1 };
