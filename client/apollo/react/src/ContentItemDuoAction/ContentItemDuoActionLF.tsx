import "@axa-fr/design-system-apollo-css/dist/ContentItemDuoAction/ContentItemDuoActionCommon.scss";
import {
  ContentItemDuoActionCommon,
  ContentItemDuoActionProps,
} from "./ContentItemDuoActionCommon";
import { Button } from "../Button/ButtonLF";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoLF";

export const ContentItemDuoAction = ({
  onEditButtonClick,
  onDeleteButtonClick,
  contentItemProps,
  ...props
}: ContentItemDuoActionProps) => {
  const editButton = (
    <Button onClick={() => onEditButtonClick?.()} variant="ghost">
      Modifier
    </Button>
  );
  const deleteButton = (
    <Button onClick={() => onDeleteButtonClick?.()} variant="ghost">
      Supprimer
    </Button>
  );

  const contentItemMono = <ContentItemMono {...contentItemProps} />;

  return (
    <ContentItemDuoActionCommon
      {...props}
      editButton={editButton}
      deleteButton={deleteButton}
      contentItemMono={contentItemMono}
    />
  );
};
