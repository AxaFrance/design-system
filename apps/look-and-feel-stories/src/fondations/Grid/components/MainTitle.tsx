import { Svg, Title } from "@axa-fr/design-system-look-and-feel-react";
import article from "@material-symbols/svg-400/outlined/article-fill.svg";

export const MainTitle = () => (
  <Title
    icon={<Svg src={article} aria-hidden />}
    firstSubtitle="Sous Titre 1"
    secondSubtitle="Sous Titre 2"
  >
    Titre de la page
  </Title>
);
