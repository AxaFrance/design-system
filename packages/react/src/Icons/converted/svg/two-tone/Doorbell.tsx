import type { SVGProps } from "react";

const SvgDoorbell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M6 10v9h12v-9l-6-4.5zm6 7.5c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1m.75-8.25v.25c1.44.34 2.25 1.62 2.25 3.16V15h1v1H8v-1h1v-2.34c0-1.54.82-2.82 2.25-3.16v-.25c0-.41.34-.75.75-.75s.75.34.75.75"
      opacity={0.3}
    />
    <path d="M12 3 4 9v12h16V9zm6 16H6v-9l6-4.5 6 4.5z" />
    <path d="M11.25 9.25v.25C9.82 9.84 9 11.12 9 12.66V15H8v1h8v-1h-1v-2.34c0-1.54-.81-2.82-2.25-3.16v-.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75M12 17.5c.55 0 1-.45 1-1h-2c0 .55.45 1 1 1" />
  </svg>
);

export { SvgDoorbell };
