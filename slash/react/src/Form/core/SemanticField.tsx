import classNames from "classnames";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { getComponentClassName } from "../../utilities";
import { FieldError } from "./FieldError";
import { FieldForm } from "./FieldForm";
import { MessageTypes } from "./MessageTypes";

// Composant similaire à LegacyField
// mais tirant partie de l'html sémantique

type FieldProps = Omit<
  ComponentPropsWithoutRef<typeof FieldForm>,
  "children"
> & {
  label: ReactNode;
  children?: ReactNode;
  classModifier?: string;
  classNameContainerLabel?: string;
  classNameContainerInput?: string;
  isVisible?: boolean;
  roleContainer?: string;
  ariaLabelContainer?: string;
  errorId?: string;
};

export const SemanticField = ({
  label,
  message = "",
  messageType = MessageTypes.error,
  children,
  forceDisplayMessage,
  classModifier = "",
  className,
  classNameContainerLabel = "col-md-2",
  classNameContainerInput = "col-md-10",
  isVisible = true,
  roleContainer,
  ariaLabelContainer,
  errorId,
}: FieldProps) => {
  if (!isVisible) {
    return null;
  }

  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "row af-form__fieldset",
  );

  return (
    <fieldset
      className={componentClassName}
      role={roleContainer}
      aria-label={ariaLabelContainer}
    >
      <legend
        className={classNames(
          {
            "af-form__legend--required": classModifier.includes("required"),
          },
          "af-form__legend",
        )}
      >
        {label}
      </legend>
      <div
        className={classNames(classNameContainerLabel, "af-form__placeholder")}
      />
      <FieldForm
        className={classNameContainerInput}
        message={message}
        messageType={messageType}
        forceDisplayMessage={forceDisplayMessage}
      >
        {children}
        <FieldError
          message={message}
          messageType={messageType}
          errorId={errorId}
        />
      </FieldForm>
    </fieldset>
  );
};
