import classnames from "classnames";

import "@axa-fr/design-system-slash-css/dist/Divider/Divider.css";

type DividerProps = {
  mode?: "horizontal" | "vertical";
  classModifier?: string;
};

export const Divider = ({
  mode = "horizontal",
  classModifier,
}: DividerProps) => {
  const componentClassName = classnames("af-divider", classModifier, {
    "af-divider--horizontal": mode === "horizontal",
    "af-divider--vertical": mode === "vertical",
  });

  return <hr className={componentClassName} />;
};
