import type { SVGProps } from "react";

const SvgEmojiPeople = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={4} r={2} />
    <path d="M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54a5.02 5.02 0 0 1-4.92-4.15A1 1 0 0 0 5.09 2c-.61 0-1.09.54-1 1.14A7.04 7.04 0 0 0 9 8.71V21c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1V10.05l3.24 3.24a.996.996 0 1 0 1.41-1.41z" />
  </svg>
);

export { SvgEmojiPeople };
