import type { SVGProps } from "react";

const SvgTimerOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9 1h6v2H9zM12 6c3.87 0 7 3.13 7 7 0 .94-.19 1.83-.52 2.65l1.5 1.5a8.963 8.963 0 0 0-.95-9.76l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42a8.96 8.96 0 0 0-9.77-.96l1.5 1.5A7.1 7.1 0 0 1 12 6" />
    <path d="m11 8.17 2 2V8h-2zM2.81 2.81 1.39 4.22l3.4 3.4a8.994 8.994 0 0 0 12.59 12.59l2.4 2.4 1.41-1.41zM12 20c-3.87 0-7-3.13-7-7 0-1.47.45-2.83 1.22-3.95l9.73 9.73A6.95 6.95 0 0 1 12 20" />
  </svg>
);

export { SvgTimerOff };
