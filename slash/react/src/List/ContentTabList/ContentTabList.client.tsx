import { List } from "../../client";

import "@axa-fr/design-system-slash-css/dist/List/ContentTabList/ContentTabList.client.scss";
import { BREAKPOINT, useIsSmallScreen } from "../../utilities";
import { ContentTabItem, type TContentTabItem } from "./ContentTabItem";

type ContentTabListProps = {
  items: TContentTabItem[];
  classModifier?: string;
};

export const ContentTabList = ({
  items,
  classModifier,
}: ContentTabListProps) => {
  const isMobile = useIsSmallScreen(BREAKPOINT.SM);

  return (
    <List
      classModifier={`list large extra-padding content-tab-list ${classModifier}`}
      tabIndex={-1}
    >
      {items.map(({ id, ...item }) => (
        <ContentTabItem key={id ?? item.title} {...item} isMobile={isMobile} />
      ))}
    </List>
  );
};
