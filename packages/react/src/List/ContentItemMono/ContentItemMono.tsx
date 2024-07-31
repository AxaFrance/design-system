import { useMemo, type ReactNode } from "react";
import { getComponentClassName } from "../../Form/core";

type ContentItemMonoProps = {
  children: ReactNode;
  className?: string;
  classModifier?: string;
  secondaryText?: string;
  tertiaryText?: string;
  leftElement?: ReactNode;
  isXlText?: boolean;
  isLeftElementCentered?: boolean;
  hasStick?: boolean;
};

export const ContentItemMono = ({
  children,
  className,
  classModifier,
  secondaryText,
  tertiaryText,
  leftElement,
  isXlText = false,
  isLeftElementCentered = false,
  hasStick = false,
}: ContentItemMonoProps) => {
  const componentClassName = useMemo(
    () =>
      getComponentClassName(className, classModifier, "af-content-item-mono"),
    [classModifier, className],
  );

  return (
    <div className={componentClassName}>
      {hasStick && (
        <div className="af-content-item-mono__stick" role="presentation" />
      )}
      {leftElement && (
        <div
          className={`af-content-item-mono__left-container${
            isLeftElementCentered
              ? " af-content-item-mono__left-container--center"
              : ""
          }`}
        >
          {leftElement}
        </div>
      )}
      <div
        className={`af-content-item-mono__text-container${isXlText ? " af-content-item-mono__text-container--xl" : ""}`}
      >
        <p className="af-content-item-mono__main-text"> {children}</p>
        {secondaryText && (
          <p className="af-content-item-mono__secondary-text">
            {secondaryText}
          </p>
        )}
        {tertiaryText && (
          <p className="af-content-item-mono__tertiary-text">{tertiaryText}</p>
        )}
      </div>
    </div>
  );
};
