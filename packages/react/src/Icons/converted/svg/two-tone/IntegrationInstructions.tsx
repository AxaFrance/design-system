import type { SVGProps } from "react";

const SvgIntegrationInstructions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={12} cy={3.5} r={0.75} fill="none" />
    <circle cx={12} cy={3.5} r={0.75} fill="none" />
    <path fill="none" d="M19 5H5M5 19h14" />
    <path d="M11 14.17 8.83 12 11 9.83 9.59 8.41 6 12l3.59 3.59zM14.41 15.59 18 12l-3.59-3.59L13 9.83 15.17 12 13 14.17z" />
    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.01 2.01 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75M19 19H5V5h14z" />
    <path fill="none" d="M19 5H5M5 19h14" opacity={0.3} />
    <path d="M5 5h14v14H5z" opacity={0.3} />
  </svg>
);

export { SvgIntegrationInstructions };
