// eslint-disable-next-line import/no-extraneous-dependencies
import { ContentItemDuo } from "@axa-fr/design-system-apollo-react/lf";
import { List } from "@axa-fr/design-system-look-and-feel-react";

export const MyList = () => (
  <List classModifier="extra-padding">
    {[...Array(6).keys()].map(() => (
      <ContentItemDuo
        key={crypto.randomUUID()}
        isVertical={false}
        buttonText="En savoir plus"
        classModifier="large"
        label="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, suscipit sint! Reiciendis, eos? Eveniet, aut qui. Autem reprehenderit"
        value="Réponse"
      />
    ))}
  </List>
);
