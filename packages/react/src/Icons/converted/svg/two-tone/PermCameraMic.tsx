import type { SVGProps } from "react";

const SvgPermCameraMic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="m16.11 7-.59-.65L14.28 5h-4.24L8.81 6.35l-.6.65H4v12h7v-1.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V19h7V7zM14 12c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2z"
      opacity={0.3}
    />
    <path d="M12 6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2m8-1h-3.17l-1.86-2H8.96L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 14h-7v-1.09c2.83-.48 5-2.94 5-5.91h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6c0 2.97 2.17 5.43 5 5.91V19H4V7h4.21l.59-.65L10.04 5h4.24l1.24 1.35.59.65H20z" />
  </svg>
);

export { SvgPermCameraMic };
