import type { SVGProps } from "react";

const SvgSynagogue = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M4 6c-.55 0-1 .45-1 1v1h2V7c0-.55-.45-1-1-1M3 10h2v9H3zM7 9.92V19h2v-3c0-1.65 1.35-3 3-3s3 1.35 3 3v3h2V9.92l-5-4.29zm6.5.08c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M20 6c-.55 0-1 .45-1 1v1h2V7c0-.55-.45-1-1-1M19 10h2v9h-2z"
      opacity={0.3}
    />
    <path d="M20 4c-1.66 0-3 1.34-3 3v.29L12 3 7 7.29V7c0-1.66-1.34-3-3-3S1 5.34 1 7v14h10v-5c0-.55.45-1 1-1s1 .45 1 1v5h10V7c0-1.66-1.34-3-3-3M5 19H3v-9h2zM5 8H3V7c0-.55.45-1 1-1s1 .45 1 1zm12 11h-2v-3c0-1.65-1.35-3-3-3s-3 1.35-3 3v3H7V9.92l5-4.29 5 4.29zm4 0h-2v-9h2zm0-11h-2V7c0-.55.45-1 1-1s1 .45 1 1z" />
    <circle cx={12} cy={10} r={1.5} />
  </svg>
);

export { SvgSynagogue };
