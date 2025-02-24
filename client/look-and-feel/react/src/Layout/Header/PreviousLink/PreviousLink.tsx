import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/PreviousLink/PreviousLink.scss";
import arrowBack from "@material-symbols/svg-400/outlined/arrow_back.svg";
import React, {
  ComponentPropsWithoutRef,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from "react";
import { Svg } from "../../../Svg";

type ChildrenProps = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
}>;

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
      {React.Children.map(validChildren, (child) =>
        React.cloneElement<ChildrenProps>(
          child as ReactElement<ChildrenProps>,
          {
            children: (
              <>
                <Svg src={arrowBack} />
                {(child as ReactElement<ChildrenProps>).props.children}
              </>
            ),
            className:
              "af-btn-client af-btn-client--ghost af-btn-client--header-previous-link",
            onClick: handleClick,
          },
        ),
      )}
    </div>
  );
};

export { PreviousLink };
