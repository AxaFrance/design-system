import "@axa-fr/design-system-apollo-css/dist/ContentItemDuoAction/ContentItemDuoActionCommon.scss";
import {
  ContentItemDuoActionCommon,
  ContentItemDuoActionProps,
} from "./ContentItemDuoActionCommon";
import { Button } from "../Button/ButtonApollo";


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

    return (
        <ContentItemDuoActionCommon
            {...props}
            editButton={editButton}
            deleteButton={deleteButton}
        />
    );
};
