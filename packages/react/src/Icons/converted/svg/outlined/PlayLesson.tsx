import type { SVGProps } from "react";

const SvgPlayLesson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 20V4h2v7l2.5-1.5L12 11V4h5v7.08c.33-.05.66-.08 1-.08s.67.03 1 .08V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26c-.42-.6-.75-1.28-.97-2zm13-7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m-1.25 7.5v-5l4 2.5z" />
  </svg>
);

export { SvgPlayLesson };
