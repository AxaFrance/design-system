/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />

/*
 */

/* eslint-disable import/no-default-export */
declare module "*.svg" {
  const src: string;
  export default src;
}
