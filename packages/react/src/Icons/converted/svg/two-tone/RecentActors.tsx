import type { SVGProps } from "react";

const SvgRecentActors = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M13 7H3v10h10zM8 8c1.07 0 1.95.87 1.95 1.95 0 1.07-.87 1.95-1.95 1.95s-1.95-.87-1.95-1.95S6.93 8 8 8m3.89 8H4.11v-.65c0-1.3 2.59-1.95 3.89-1.95s3.89.65 3.89 1.95z"
      opacity={0.3}
    />
    <path d="M21 5h2v14h-2zm-4 0h2v14h-2zm-3 14c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1zM3 7h10v10H3z" />
    <circle cx={8} cy={9.94} r={1.95} />
    <path d="M8 13.4c-1.3 0-3.89.65-3.89 1.95V16h7.78v-.65c0-1.3-2.59-1.95-3.89-1.95" />
  </svg>
);

export { SvgRecentActors };
