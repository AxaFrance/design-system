import type { SVGProps } from "react";

const SvgStadium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M5 10.04c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04m15 1.76c-1.82.73-4.73 1.2-8 1.2s-6.18-.47-8-1.2v6.78c.61.41 2.36 1.01 5 1.28V16h6v3.86c2.64-.27 4.39-.87 5-1.28z"
      opacity={0.3}
    />
    <path d="M7 5 3 7V3zm11-2v4l4-2zm-7-1v4l4-2zm2 16h-2v4c-5.05-.15-9-1.44-9-3v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.56-3.95 2.85-9 3zm-8-7.96c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04m15 1.76c-1.82.73-4.73 1.2-8 1.2s-6.18-.47-8-1.2v6.78c.61.41 2.36 1.01 5 1.28V16h6v3.86c2.64-.27 4.39-.87 5-1.28z" />
  </svg>
);

export { SvgStadium };
