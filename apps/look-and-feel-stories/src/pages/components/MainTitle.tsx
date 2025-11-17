// eslint-disable-next-line import/no-extraneous-dependencies
import { Heading } from "@axa-fr/design-system-apollo-react/lf";

import article from "@material-symbols/svg-400/outlined/article-fill.svg";

export const MainTitle = () => (
  <Heading
    icon={article}
    firstSubtitle="Sous Titre 1"
    secondSubtitle="Sous Titre 2"
  >
    Titre de la page
  </Heading>
);
