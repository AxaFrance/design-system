import type { SVGProps } from "react";

const SvgTheaterComedy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 2v5.5h3.5v3.31C14.55 9.8 15.64 9 16.99 9c1.38 0 2.5.84 2.5 1.88H14.5v3.56c.76.36 1.61.56 2.5.56 3.31 0 6-2.69 6-6V2zm4 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
    <path d="M1 16c0 3.31 2.69 6 6 6s6-2.69 6-6V9H1zm6 1.88c-1.38 0-2.5-.84-2.5-1.88h5c0 1.04-1.12 1.88-2.5 1.88m2-5.38c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
  </svg>
);

export { SvgTheaterComedy };
