import type { SVGProps } from "react";

const SvgChildFriendly = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 3.08V10h8a8 8 0 0 0-6.86-7.92c-.6-.09-1.14.39-1.14 1m6.32 12.81A7.95 7.95 0 0 0 21 11H6.44l-.68-1.43a.99.99 0 0 0-.9-.57H3c-.55 0-1 .45-1 1s.45 1 1 1h1.22s1.89 4.07 2.12 4.42a3.505 3.505 0 0 0-1.74 3.94c.3 1.26 1.34 2.27 2.6 2.55 2.1.46 3.98-.96 4.25-2.91h2.08a3.5 3.5 0 0 0 4.22 2.92 3.49 3.49 0 0 0 2.63-2.53c.35-1.39-.14-2.68-1.06-3.5M8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20m9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20" />
  </svg>
);

export { SvgChildFriendly };
