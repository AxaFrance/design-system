import type { SVGProps } from "react";

const SvgSip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15.5 10.5h2v1h-2z" opacity={0.3} />
    <path
      d="M4 18h16V6H4zm10-9h4c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-2.5v2H14zm-3 0h2v6h-2zm-6 4.5h3.5v-.75H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h4v1.5H6.5v.75H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H5z"
      opacity={0.3}
    />
    <path d="M10 14v-1.75c0-.55-.45-1-1-1H6.5v-.75H10V9H6c-.55 0-1 .45-1 1v1.75c0 .55.45 1 1 1h2.5v.75H5V15h4c.55 0 1-.45 1-1" />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z" />
    <path d="M11 9h2v6h-2zM15.5 13H18c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-4v6h1.5zm0-2.5h2v1h-2z" />
  </svg>
);

export { SvgSip };
