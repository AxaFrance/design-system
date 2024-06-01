import { Fragment, ReactNode } from "react";
import "@axa-fr/design-system-css/dist/Layout/Header/Infos/Infos.scss";
import { getComponentClassName } from "../../../../agent";

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
      <i className="glyphicon glyphicon-info-sign" />
      <dl className={`${defaultClassName}__list`}>
        {infos.map((info) => (
          <Fragment key={`info-${info.id}`}>
            <dt className={`${defaultClassName}__word`}>{info.word}</dt>
            <dd className={`${defaultClassName}__def`}>{info.definition}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
};

export { Infos };
