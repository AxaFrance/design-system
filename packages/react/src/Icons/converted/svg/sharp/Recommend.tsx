import type { SVGProps } from "react";

const SvgRecommend = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m6 10.05L15.46 18H7v-7.56L12 5l1 1v.53L12.41 10H18z" />
  </svg>
);

export { SvgRecommend };
