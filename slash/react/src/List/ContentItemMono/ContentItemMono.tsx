import { useMemo, type ReactNode } from "react";
import { getComponentClassName } from "../../Form/core";
import { ContentItemMonoSize } from "./constants";

type ContentItemMonoProps = {
  children: ReactNode;
  className?: string;
  classModifier?: string;
  secondaryText?: string;
  tertiaryText?: string;
  leftElement?: ReactNode;
  size?: ContentItemMonoSize;
  isDisabled?: boolean;
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
  size = ContentItemMonoSize.M,
  isDisabled = false,
  isLeftElementCentered = false,
  hasStick = false,
}: ContentItemMonoProps) => {
  const componentClassName = useMemo(() => {
    const classModifiers = [size, classModifier];

    if (isDisabled) {
      classModifiers.push("disabled");
    }

    return getComponentClassName(
      className,
      classModifiers.filter(Boolean).join(" "),
      "af-content-item-mono",
    );
  }, [classModifier, isDisabled, size, className]);

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
      <div className="af-content-item-mono__text-container">
        <p className="af-content-item-mono__main-text">{children}</p>
        {secondaryText && (
          <p className="af-content-item-mono__secondary-text">
            {secondaryText}
          </p>
        )}
        {tertiaryText && size !== ContentItemMonoSize.XL && (
          <p className="af-content-item-mono__tertiary-text">{tertiaryText}</p>
        )}
      </div>
    </div>
  );
};
