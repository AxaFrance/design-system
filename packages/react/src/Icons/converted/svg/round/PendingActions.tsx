import type { SVGProps } from "react";

const SvgPendingActions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 3h-3.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H6c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h6.11a6.7 6.7 0 0 1-1.42-2H6V5h2v1c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V5h2v5.08c.71.1 1.38.31 2 .6V5c0-1.1-.9-2-2-2m-6 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m5 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.29 7-1.65-1.65a.5.5 0 0 1-.15-.35v-2.49c0-.28.22-.5.5-.5s.5.22.5.5v2.29l1.5 1.5c.2.2.2.51 0 .71-.19.19-.5.19-.7-.01" />
  </svg>
);

export { SvgPendingActions };
