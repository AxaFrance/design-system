import type { SVGProps } from "react";

const SvgGppGood = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M6 6.31v4.78c0 4 2.55 7.7 6 8.83 3.45-1.13 6-4.82 6-8.83V6.31l-6-2.12zm10.6 3.57-5.66 5.66L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24z"
      opacity={0.3}
    />
    <path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12zm-9.18-.5L7.4 12l3.54 3.54 5.66-5.66-1.41-1.41-4.24 4.24z" />
  </svg>
);

export { SvgGppGood };
