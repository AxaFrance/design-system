import type { SVGProps } from "react";

const SvgArchitecture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M6.36 18.78 6.61 21l1.62-1.54 2.77-7.6c-.68-.17-1.28-.51-1.77-.98zM14.77 10.88c-.49.47-1.1.81-1.77.98l2.77 7.6L17.39 21l.26-2.22zM14.94 8.6c.3-1.56-.6-2.94-1.94-3.42V4c0-.55-.45-1-1-1s-1 .45-1 1v1.18C9.84 5.6 9 6.7 9 8c0 1.84 1.66 3.3 3.56 2.95 1.18-.22 2.15-1.17 2.38-2.35M12 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
  </svg>
);

export { SvgArchitecture };
