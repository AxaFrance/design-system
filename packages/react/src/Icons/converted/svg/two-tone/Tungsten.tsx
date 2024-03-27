import type { SVGProps } from "react";

const SvgTungsten = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 7.1V5h-2v2.1c.32-.06.66-.1 1-.1s.68.04 1 .1" opacity={0.3} />
    <path d="M11 19h2v3h-2zM2 11h3v2H2zM19 11h3v2h-3zM15.894 17.801l1.407-1.407 2.122 2.122-1.408 1.407zM4.584 18.509l2.121-2.122 1.408 1.407-2.122 2.122zM15 8.02V3H9v5.02c-1.21.92-2 2.35-2 3.98 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.06-2-3.98M11 5h2v2.1c-.32-.06-.66-.1-1-.1s-.68.04-1 .1zm1 10c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3" />
  </svg>
);

export { SvgTungsten };
