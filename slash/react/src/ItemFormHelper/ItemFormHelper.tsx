import React from "react";
import { Svg } from "@axa-fr/design-system-slash-react";
import checkSvg from "@material-symbols/svg-400/outlined/check.svg";
import toDoSvg from "@material-symbols/svg-400/outlined/circle.svg";
import wipSvg from "@material-symbols/svg-400/outlined/circle-fill.svg";

import "@axa-fr/design-system-slash-css/dist/ItemFormHelper/ItemFormHelper.scss";

interface Helper {
  id: number;
  itemSrc?: string;
  name: string;
  state: string;
}

export const ItemFormHelper: React.FC = () => {
  const helpers: Helper[] = [
    { id: 1, name: "à compléter", itemSrc: toDoSvg, state: "to-do" },
    { id: 2, name: "en cours", itemSrc: wipSvg, state: "wip" },
    { id: 3, name: "validé", itemSrc: checkSvg, state: "validation" },
  ];

  return (
    <div className="helper">
      {helpers.map((helper) => (
        <p className={`item__${helper.state}`} key={helper.id}>
          <Svg
            src={helper.itemSrc}
            width={12}
            height={12}
            style={{ marginRight: 8 }}
          />
          {helper.name}
        </p>
      ))}
    </div>
  );
};
