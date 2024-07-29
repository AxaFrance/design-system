import { List } from "../../client";

import "@axa-fr/design-system-css/dist/List/ContentTabList/ContentTabList.client.scss";
import { useIsSmallScreen } from "../../utilities";
import { ContentTabItem, type TContentTabItem } from "./ContentTabItem";

type ContentTabListProps = {
  items: TContentTabItem[];
  classModifier?: string;
};

const BREAKPOINT_SMALL = 668;

export const ContentTabList = ({
  items,
  classModifier,
}: ContentTabListProps) => {
  const isMobile = useIsSmallScreen(BREAKPOINT_SMALL);

  return (
    <List
      classModifier={`list large content-tab-list ${classModifier}`}
      tabIndex={-1}
    >
      {items.map(({ id, ...item }) => (
        <ContentTabItem key={id ?? item.title} {...item} isMobile={isMobile} />
      ))}
    </List>
  );
};
