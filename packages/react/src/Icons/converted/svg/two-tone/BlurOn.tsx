import type { SVGProps } from "react";

const SvgBlurOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={14} cy={10} r={1.5} />
    <circle cx={14} cy={18} r={1} />
    <circle cx={14} cy={14} r={1.5} />
    <circle cx={14} cy={6} r={1} />
    <path d="M3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5M14.5 3c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5M21 14.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5" />
    <circle cx={18} cy={18} r={1} />
    <path d="M13.5 21c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5M21 10.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5" />
    <circle cx={18} cy={14} r={1} />
    <circle cx={18} cy={6} r={1} />
    <circle cx={6} cy={18} r={1} />
    <circle cx={6} cy={14} r={1} />
    <path d="M3.5 14c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5" />
    <circle cx={10} cy={6} r={1} />
    <circle cx={6} cy={10} r={1} />
    <circle cx={6} cy={6} r={1} />
    <path d="M9.5 21c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5" />
    <circle cx={10} cy={18} r={1} />
    <path d="M10.5 3c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5" />
    <circle cx={10} cy={14} r={1.5} />
    <circle cx={10} cy={10} r={1.5} />
    <circle cx={18} cy={10} r={1} />
  </svg>
);

export { SvgBlurOn };
