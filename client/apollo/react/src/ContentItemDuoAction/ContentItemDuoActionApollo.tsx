import "@axa-fr/design-system-apollo-css/dist/ContentItemDuoAction/ContentItemDuoActionCommon.scss";
import {
  ContentItemDuoActionCommon,
  ContentItemDuoActionProps,
  EditProps,
} from "./ContentItemDuoActionCommon";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoApollo";
import { Toggle } from "../Toggle/ToggleApollo";
import { Button } from "../Button/ButtonApollo";

export const ContentItemDuoAction = ({
  editProps,
  contentItemProps,
  toggleProps,
  mode,
  ...props
}: ContentItemDuoActionProps) => {
  const createAction = ({
    onEditButtonClick,
    onDeleteButtonClick,
  }: EditProps) => {
    if (mode === "edit") {
      return (
        <div className="af-action-edit-buttons-container">
          <Button onClick={() => onEditButtonClick?.()} variant="ghost">
            Modifier
          </Button>
          <Button onClick={() => onDeleteButtonClick?.()} variant="ghost">
            Supprimer
          </Button>
        </div>
      );
    }
    return <Toggle {...toggleProps} />;
  };

  const contentItemMono = <ContentItemMono {...contentItemProps} />;

  return (
    <ContentItemDuoActionCommon
      {...props}
      contentItemMono={contentItemMono}
      action={createAction({ ...editProps })}
    />
  );
};
