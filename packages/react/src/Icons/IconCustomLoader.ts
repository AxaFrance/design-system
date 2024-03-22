import { lazy } from "react";

export const icons = {
  facebook: lazy(async () => import("./svg_custom/facebook.svg?react")),
  twitterx: lazy(async () => import("./svg_custom/twitterx.svg?react")),
  linkedin: lazy(async () => import("./svg_custom/linkedin.svg?react")),
  youtube: lazy(async () => import("./svg_custom/youtube.svg?react")),
};
