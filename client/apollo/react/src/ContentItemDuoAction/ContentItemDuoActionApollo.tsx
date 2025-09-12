import "@axa-fr/design-system-apollo-css/dist/ContentItemDuoAction/ContentItemDuoActionCommon.scss";
import {
  ActionMode,
  ContentItemDuoActionCommon,
  ContentItemDuoActionProps,
} from "./ContentItemDuoActionCommon";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoApollo";
import { Toggle } from "../Toggle/ToggleApollo";
import { Button } from "../Button/ButtonApollo";

export const ContentItemDuoAction = ({
  onEditButtonClick,
  onDeleteButtonClick,
  contentItemProps,
  toggleProps,
  mode,
  ...props
}: ContentItemDuoActionProps) => {
  const createAction = () => {
    if (mode === ActionMode.edit) {
      return (
        <div className="grid">
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
      action={createAction()}
    />
  );
};
