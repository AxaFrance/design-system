import type { ViewportMap } from "@storybook/addon-viewport";

export const viewPorts: ViewportMap = {
  tabletPortrait: {
    name: "Tablet Portrait ",
    styles: {
      width: "772px",
      height: "100%",
    },
    type: "tablet",
  },
  tabletLandscape: {
    name: "Tablet Landscape",
    styles: {
      width: "1016px",
      height: "100%",
    },
    type: "tablet",
  },
  desktopS: {
    name: "Desktop S",
    styles: {
      width: "1272px",
      height: "100%",
    },
    type: "desktop",
  },
  desktopM: {
    name: "Desktop M",
    styles: {
      width: "1432px",
      height: "100%",
    },
    type: "desktop",
  },
  desktopL: {
    name: "Desktop L",
    styles: {
      width: "1672px",
      height: "100%",
    },
    type: "desktop",
  },
  desktopXL: {
    name: "Desktop XL",
    styles: {
      width: "1912px",
      height: "100%",
    },
    type: "desktop",
  },
};
