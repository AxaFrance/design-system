import { lazy } from "react";

export const icons = {
  Facebook: lazy(async () =>
    import("./Facebook").then((module) => ({ default: module.SvgFacebook })),
  ),
  Linkedin: lazy(async () =>
    import("./Linkedin").then((module) => ({ default: module.SvgLinkedin })),
  ),
  Twitterx: lazy(async () =>
    import("./Twitterx").then((module) => ({ default: module.SvgTwitterx })),
  ),
  Youtube: lazy(async () =>
    import("./Youtube").then((module) => ({ default: module.SvgYoutube })),
  ),
};
