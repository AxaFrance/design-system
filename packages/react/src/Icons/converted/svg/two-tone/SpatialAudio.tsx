import type { SVGProps } from "react";

const SvgSpatialAudio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M15.48 17.34C14.29 16.73 12.37 16 10 16s-4.29.73-5.48 1.34c-.32.16-.52.5-.52.88V19h12v-.78c0-.38-.2-.72-.52-.88"
      opacity={0.3}
    />
    <circle cx={10} cy={9} r={2} opacity={0.3} />
    <path d="M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16s4.29.73 5.48 1.34c.32.16.52.5.52.88zM16 1h-2a9 9 0 0 0 9 9V8c-3.86 0-7-3.14-7-7" />
    <path d="M20 1h-2c0 2.76 2.24 5 5 5V4c-1.65 0-3-1.35-3-3" />
  </svg>
);

export { SvgSpatialAudio };
