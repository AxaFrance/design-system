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
  title: string;
  id: string;
  stepMode: VerticalStepMode;
  onEdit: React.MouseEventHandler<HTMLButtonElement>;
  form: ReactNode;
  restitution: ReactNode;
  editButtonLabel?: string;
  editButtonAriaLabel?: string;
  showRestitution?: boolean;
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
        className={classNames("af-title", `${defaultClassName}-title`)}
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
