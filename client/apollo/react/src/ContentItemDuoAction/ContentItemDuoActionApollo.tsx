import "@axa-fr/design-system-apollo-css/dist/ContentItemDuoAction/ContentItemDuoActionCommon.scss";
import {
  ContentItemDuoActionCommon,
  ContentItemDuoActionProps,
} from "./ContentItemDuoActionCommon";
import { Button } from "../Button/ButtonApollo";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoApollo";

export const ContentItemDuoAction = ({
  onDeleteButtonClick,
  onEditButtonClick,
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
  console.log({ ...contentItemProps });
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
