import type { SVGProps } from "react";

const SvgBlind = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={11.5} cy={3.5} r={2} />
    <path d="M12.13 7.12c-.17-.35-.44-.65-.8-.85a1.98 1.98 0 0 0-1.93-.03v-.01L4 9.3V14h2v-3.54l1.5-.85C7.18 10.71 7 11.85 7 13v5.33L4.4 21.8 6 23l3-4 .22-3.54L11 18v5h2v-6.5l-1.97-2.81c-.04-.52-.14-1.76.45-3.4.75 1.14 1.88 1.98 3.2 2.41L20.63 23l.87-.5-5.48-9.5H17v-2c-.49 0-2.88.17-4.08-2.21" />
  </svg>
);

export { SvgBlind };
