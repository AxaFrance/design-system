import classNames from "classnames";
import { ReactNode } from "react";
import edit from "@material-symbols/svg-400/sharp/edit-fill.svg";
import check from "@material-symbols/svg-400/sharp/check.svg";
import lock from "@material-symbols/svg-400/sharp/lock-fill.svg";
import { Title } from "../Title/Title";
import { Svg } from "../Svg";
import type { VerticalStepMode } from "./types";

import "@axa-fr/design-system-slash-css/dist/Steps/VerticalStep.css";
import { Button } from "../Button/Button";

type Props = {
  /**
   * title - The title of the step.
   */
  title: string;
  /**
   * id - The id of the step, used for accessibility.
   * It should be unique within the document.
   */
  id: string;
  /**
   * stepMode - The mode of the step, can be "edited", "validated", or "locked".
   */
  stepMode: VerticalStepMode;
  /**
   * onEdit - The function to call when the edit button is clicked.
   */
  onEdit: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * form - The content of the form to display when the step is in "edited" mode.
   */
  form: ReactNode;
  /**
   * restitution - The content to display when the step is in "validated" mode.
   */
  restitution: ReactNode;
  /**
   * editButtonLabel - The label of the edit button.
   */
  editButtonLabel?: string;
  /**
   * editButtonAriaLabel - The aria-label of the edit button.
   */
  editButtonAriaLabel?: string;
  /**
   * showRestitution - Whether to show the restitution content when the step is validated.
   */
  showRestitution?: boolean;
  /**
   * contentRight - Additional content to display on the right side of the title.
   */
  contentRight?: string;
};

const defaultClassName = "af-vertical-step";

export const VerticalStep = ({
  title,
  id,
  stepMode,
  editButtonLabel = "Modifier",
  editButtonAriaLabel = `Modifier l'étape ${title}`,
  onEdit,
  form,
  restitution,
  showRestitution = true,
  contentRight,
}: Props) => {
  const isStepInEdition = stepMode === "edited";
  const isStepValidated = stepMode === "validated";
  const isStepLocked = stepMode === "locked";

  return (
    <div
      className={classNames(defaultClassName, {
        [`${defaultClassName}--edition`]: isStepInEdition,
      })}
    >
      <div
        className={classNames("af-vertical-step-icon", {
          [`${defaultClassName}-icon--validated`]: isStepValidated,
          [`${defaultClassName}-icon--locked`]: isStepLocked,
          [`${defaultClassName}-icon--edited`]: isStepInEdition,
        })}
      >
        {isStepValidated ? <Svg role="presentation" src={check} /> : null}
        {isStepLocked ? <Svg role="presentation" src={lock} /> : null}
        {isStepInEdition ? <Svg role="presentation" src={edit} /> : null}
      </div>
      <Title
        id={id}
        contentLeft={
          isStepValidated ? (
            <Button
              aria-label={editButtonAriaLabel}
              onClick={onEdit}
              className="af-vertical-step-title-button"
            >
              <Svg role="presentation" src={edit} />
              {editButtonLabel}
            </Button>
          ) : undefined
        }
        contentRight={contentRight}
      >
        {title}
      </Title>

      {isStepInEdition ? <section>{form}</section> : null}
      {isStepValidated && showRestitution ? (
        <section>{restitution}</section>
      ) : null}

      {isStepInEdition ? (
        <div
          className={classNames(
            `${defaultClassName}-icon ${defaultClassName}-icon--lastIcon`,
          )}
        >
          <Svg role="presentation" src={check} />
        </div>
      ) : null}
    </div>
  );
};
