import type { SVGProps } from "react";

const SvgDonutSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 9.18c.85.3 1.51.97 1.82 1.82h7.13c-.47-4.72-4.23-8.48-8.95-8.95zm-2 5.64C9.84 14.4 9 13.3 9 12s.84-2.4 2-2.82V2.05c-5.05.5-9 4.76-9 9.95s3.95 9.45 9 9.95zM14.82 13c-.3.85-.97 1.51-1.82 1.82v7.13c4.72-.47 8.48-4.23 8.95-8.95z" />
  </svg>
);

export { SvgDonutSmall };
