import infoIcon from "@material-symbols/svg-400/outlined/info-fill.svg";
import { Fragment, ReactNode } from "react";
import { getComponentClassName } from "../../../utilities";
import { generateId } from "../../../utilities/helpers/generateId";

import "@axa-fr/canopee-css/distributeur/Layout/Header/Infos/Infos.css";
import { Svg } from "../../../Svg";

const defaultClassName = "af-contrat";

export type TInfo = {
  definition: ReactNode;
  id?: string;
  word: ReactNode;
};

type InfosProps = {
  classModifier?: string;
  className?: string;
  infos: TInfo[];
};

const Infos = ({ infos, className, classModifier }: InfosProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName,
  );

  return (
    <div className={componentClassName}>
      <Svg className="af-contrat__icon" src={infoIcon} aria-hidden="true" />

      <dl className={`${defaultClassName}__list`}>
        {infos.map((info) => {
          const idTerm = info.id ?? `info-${generateId(info)}`;
          return (
            <Fragment key={idTerm}>
              <dt id={idTerm} className={`${defaultClassName}__word`}>
                {info.word}
              </dt>
              <dd
                className={`${defaultClassName}__def`}
                aria-labelledby={idTerm}
              >
                {info.definition}
              </dd>
            </Fragment>
          );
        })}
      </dl>
    </div>
  );
};

export { Infos };
