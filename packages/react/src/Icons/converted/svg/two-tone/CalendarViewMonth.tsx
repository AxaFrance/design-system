import type { SVGProps } from "react";

const SvgCalendarViewMonth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M4 6h4v5H4zM4 13h4v5H4zM10 13h4v5h-4zM16 13h4v5h-4zM16 6h4v5h-4zM10 6h4v5h-4z"
      opacity={0.3}
    />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M8 18H4v-5h4zm0-7H4V6h4zm6 7h-4v-5h4zm0-7h-4V6h4zm6 7h-4v-5h4zm0-7h-4V6h4z" />
  </svg>
);

export { SvgCalendarViewMonth };
