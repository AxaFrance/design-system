import type { SVGProps } from "react";

const SvgNotificationsOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2m6-11c0-3.07-1.64-5.64-4.5-6.32V2.5h-3v2.18c-.24.06-.47.15-.69.23L18 13.1zM5.41 3.35 4 4.76l2.81 2.81C6.29 8.57 6 9.73 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41z" />
  </svg>
);

export { SvgNotificationsOff };
