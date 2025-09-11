import "@axa-fr/design-system-apollo-css/dist/ContentItemDuoAction/ContentItemDuoActionCommon.scss";
import {
  ContentItemDuoActionCommon,
  ContentItemDuoActionProps,
} from "./ContentItemDuoActionCommon";
import { Button } from "../Button/ButtonApollo";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoApollo";


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
    const contentItemMono = <ContentItemMono {...props.contentItemProps} />;
    return (
        <ContentItemDuoActionCommon
            {...props}
            editButton={editButton}
            deleteButton={deleteButton}
            contentItemMono={contentItemMono}
        />
    );
};
