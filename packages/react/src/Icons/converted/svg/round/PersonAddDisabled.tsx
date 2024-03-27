import type { SVGProps } from "react";

const SvgPersonAddDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14.48 11.95c.17.02.34.05.52.05 2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4c0 .18.03.35.05.52zm2.21 2.21 5.74 5.74c.33-.17.57-.5.57-.9v-1c0-2.14-3.56-3.5-6.31-3.84M2.12 2.42A.996.996 0 1 0 .71 3.83L4 7.12V10H2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v1c0 .55.45 1 1 1h8.88l3.29 3.29a.996.996 0 1 0 1.41-1.41zM6 10v-.88l.88.88z" />
  </svg>
);

export { SvgPersonAddDisabled };
