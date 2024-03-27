import type { SVGProps } from "react";

const SvgCarRepair = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M17 9.01V9H7v3h10zM9 11.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
      opacity={0.3}
    />
    <circle cx={9} cy={10.5} r={1} />
    <circle cx={15} cy={10.5} r={1} />
    <path d="M5.78 16h.44c.43 0 .78-.36.78-.81V14h10v1.19c0 .45.34.81.78.81h.44c.43 0 .78-.36.78-.81v-6.5L17.44 4c-.05-.16-.12-.29-.19-.4-.02-.02-.03-.04-.05-.07-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06-.07.11-.14.24-.19.4L5 8.69v6.5c0 .45.35.81.78.81M8.33 5h7.34l.23.69.43 1.31H7.67zM7 9.01V9h10v3H7zM4 17.01V19h7v3h2v-3h7v-1.99z" />
  </svg>
);

export { SvgCarRepair };
