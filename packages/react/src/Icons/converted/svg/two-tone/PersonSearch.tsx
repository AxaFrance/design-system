import type { SVGProps } from "react";

const SvgPersonSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 18c.22-.72 3.31-2 6-2 0-.7.13-1.37.35-1.99C7.62 13.91 2 15.27 2 18v2h9.54c-.52-.58-.93-1.25-1.19-2zM10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6a2 2 0 1 1 .001 3.999A2 2 0 0 1 10 7" />
    <path d="M10.35 18s-.35-.79-.35-2c-2.69 0-5.77 1.28-6 2z" opacity={0.3} />
    <path d="M19.43 18.02c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59c-1.5-1.5-.79-.8-2.57-2.57M16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" />
    <circle cx={10} cy={9} r={2} opacity={0.3} />
  </svg>
);

export { SvgPersonSearch };
