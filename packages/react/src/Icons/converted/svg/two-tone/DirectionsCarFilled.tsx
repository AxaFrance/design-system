import type { SVGProps } from "react";

const SvgDirectionsCarFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M5 17h14v-5H5zm11.5-4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m-9 0c.83 0 1.5.67 1.5 1.5S8.33 16 7.5 16 6 15.33 6 14.5 6.67 13 7.5 13"
      opacity={0.3}
    />
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8zM6.85 7h10.29l1.04 3H5.81zM19 17H5v-5h14z" />
    <circle cx={7.5} cy={14.5} r={1.5} />
    <circle cx={16.5} cy={14.5} r={1.5} />
  </svg>
);

export { SvgDirectionsCarFilled };
