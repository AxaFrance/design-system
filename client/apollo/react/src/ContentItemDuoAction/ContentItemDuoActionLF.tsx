import "@axa-fr/design-system-apollo-css/dist/ContentItemDuoAction/ContentItemDuoActionCommon.scss";
import "@axa-fr/design-system-apollo-css/dist/ContentItemMono/ContentItemMonoLF.scss";
import {
  ContentItemDuoActionCommon,
  ContentItemDuoActionProps,
  EditProps,
} from "./ContentItemDuoActionCommon";
import { Button } from "../Button/ButtonLF";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoLF";
import { Toggle } from "../Toggle/ToggleLF";

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
