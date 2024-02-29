import { Fragment, ReactNode } from "react";
import { createId } from "@paralleldrive/cuid2";
import "@axa-fr/design-system-css/dist/Header/Infos/Infos.scss";

import { getComponentClassName } from "../../agent";

const defaultClassName = "af-contrat";

type TInfo = {
  definition: ReactNode;
  id?: string;
  word: ReactNode;
};

type InfosProps = {
  classModifier?: string;
  className?: string;
  infos: TInfo[];
};

const Infos = ({ classModifier, className, infos }: InfosProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName,
  );

  return (
    <div className={componentClassName}>
      <i className="glyphicon glyphicon-info-sign" />
      <dl className={`${defaultClassName}__list`}>
        {infos.map((info) => (
          <Fragment key={info.id ?? createId()}>
            <dt className={`${defaultClassName}__word`}>{info.word}</dt>
            <dd className={`${defaultClassName}__def`}>{info.definition}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
};

export { Infos };
