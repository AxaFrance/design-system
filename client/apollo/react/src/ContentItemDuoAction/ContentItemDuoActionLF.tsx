import "@axa-fr/design-system-apollo-css/dist/ContentItemDuoAction/ContentItemDuoActionCommon.scss";
import "@axa-fr/design-system-apollo-css/dist/ContentItemMono/ContentItemMonoLF.scss";
import {
  ActionMode,
  ContentItemDuoActionCommon,
  ContentItemDuoActionProps,
} from "./ContentItemDuoActionCommon";
import { Button } from "../Button/ButtonLF";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoLF";
import { Toggle } from "../Toggle/ToggleLF";

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
      action={createAction()}
    />
  );
};
