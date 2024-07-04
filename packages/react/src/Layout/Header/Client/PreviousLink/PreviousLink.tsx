import arrowBack from "@material-symbols/svg-400/outlined/arrow_back.svg";
import "@axa-fr/design-system-css/dist/Layout/Header/Client/PreviousLink/PreviousLink.scss";
import React, {
  ComponentPropsWithoutRef,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from "react";
import { Svg } from "../../../../Svg";

type PreviousLinkProps = {
  handleClick: () => void;
} & ComponentPropsWithoutRef<"div">;

const PreviousLink = ({
  handleClick,
  children,
  ...otherProps
}: PropsWithChildren<PreviousLinkProps>) => {
  const validChildren = useMemo<ReactElement[]>(
    () =>
      (
        React.Children.map(
          children,
          (child) => isValidElement(child) && child,
        ) ?? []
      ).filter((c) => Boolean(c)),
    [children],
  );

  return (
    <div className="af-header-previous-link-container" {...otherProps}>
      <Svg className="af-header-previous-link-icon" src={arrowBack} />
      {React.Children.map(validChildren, (child) =>
        React.cloneElement(child, {
          className: "af-header-previous-link",
          onClick: handleClick,
        }),
      )}
    </div>
  );
};

export { PreviousLink };
