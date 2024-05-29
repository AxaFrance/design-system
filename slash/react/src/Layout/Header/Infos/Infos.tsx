import { Fragment, ReactNode } from "react";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Infos/Infos.scss";

export type TInfo = {
  definition: ReactNode;
  id?: string;
  word: ReactNode;
};

type InfosProps = {
  infos: TInfo[];
};

const Infos = ({ infos }: InfosProps) => (
  <div className="af-contrat">
    <i className="glyphicon glyphicon-info-sign" />
    <dl className="af-contrat__list">
      {infos.map((info) => (
        <Fragment key={`info-${info.id}`}>
          <dt className="af-contrat__word">{info.word}</dt>
          <dd className="af-contrat__def">{info.definition}</dd>
        </Fragment>
      ))}
    </dl>
  </div>
);

export { Infos };
