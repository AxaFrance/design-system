import type { SVGProps } from "react";

const SvgLandslide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M8.57 12.09 7 10H4v2.28l2 .67zM12.53 14.77l-2.58-1.03L6 15.05l-2-.66v1.89l2 .67zM15 4.65V2.64l-2.58-.52-1.42.95v1.86l1.23.82zM6 19.05l-2-.66V20h14l-2.97-3.96zM18 9.96v1.08l.8.64 2.2-.98V9.6l-2-.44z"
      opacity={0.3}
    />
    <path d="M11 12 8 8H2v14h20l-6-8zm-7-2h3l1.57 2.09-2.57.86-2-.67zm0 4.39 2 .67 3.95-1.32 2.58 1.03L6 16.95l-2-.67zM4 20v-1.61l2 .67 9.03-3.01L18 20zM17 6V1l-5-1-3 2v4l3 2zm-6-2.93 1.42-.95 2.58.52v2.01l-2.77 1.11L11 4.93zM18.5 7 16 9v3l2.5 2 4.5-2V8zm2.5 3.7-2.2.98-.8-.64V9.96l1-.8 2 .44z" />
  </svg>
);

export { SvgLandslide };
