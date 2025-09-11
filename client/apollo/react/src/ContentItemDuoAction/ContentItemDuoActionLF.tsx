import "@axa-fr/design-system-apollo-css/dist/ContentItemDuoAction/ContentItemDuoActionCommon.scss";
import {
  ContentItemDuoActionCommon,
  ContentItemDuoActionProps,
} from "./ContentItemDuoActionCommon";
import { Button } from "../Button/ButtonLF";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoLF";

export const ContentItemDuoAction = (props: ContentItemDuoActionProps) => {
    const editButton = (
        <Button
            onClick={() => props.onEditButtonClick?.()}
            variant="ghost"
        >Modifier</Button>
    );
    const deleteButton = (
        <Button
            onClick={() => props.onDeleteButtonClick?.()}
            variant="ghost"
        >Supprimer</Button>
    );

    const contentItemMono = <ContentItemMono {...props.contentItemMonoProps} />;

    return (
        <ContentItemDuoActionCommon
            {...props}
            editButton={editButton}
            deleteButton={deleteButton}
            contentItemMono={contentItemMono}
        />
    );
};
