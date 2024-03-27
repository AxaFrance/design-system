import type { SVGProps } from "react";

const SvgNotificationAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 14v3H8v-7c0-2.21 1.79-4 4-4 .85 0 1.64.26 2.28.72l1.43-1.43A5.9 5.9 0 0 0 13.5 4.2v-.7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.7C7.91 4.86 6 7.21 6 10v7H4v2h16v-2h-2v-3zm-4 8c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2M24 8h-3V5h-2v3h-3v2h3v3h2v-3h3z" />
  </svg>
);

export { SvgNotificationAdd };
