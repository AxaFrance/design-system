import article from "@material-symbols/svg-400/outlined/article-fill.svg";
import { Svg, Title } from "../..";

export const MainTitle = () => (
  <Title
    icon={<Svg src={article} aria-hidden />}
    firstSubtitle="Sous Titre 1"
    secondSubtitle="Sous Titre 2"
  >
    Titre de la page
  </Title>
);
