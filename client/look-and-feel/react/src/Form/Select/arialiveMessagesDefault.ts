import {
  AriaGuidanceProps,
  AriaOnChangeProps,
  AriaOnFilterProps,
  AriaOnFocusProps,
  GroupBase,
  OptionsOrGroups,
} from "react-select";

export const defaultAriaLiveMessages = {
  guidance: (props: AriaGuidanceProps) => {
    const { isSearchable, isMulti, tabSelectsValue, context, isInitialFocus } =
      props;
    switch (context) {
      case "menu":
        return `Utilisez les flèches Haut et Bas pour choisir des options, appuyez sur Entrée pour sélectionner l'option actuellement mise au point, appuyez sur Échap pour quitter le menu${tabSelectsValue ? ", appuyez sur Tab pour sélectionner l'option et quitter le menu" : ""}.`;
      case "input":
        return isInitialFocus
          ? `${props["aria-label"] || "Sélectionner"} est sélectionné ${isSearchable ? ", tapez du texte pour affiner la liste" : ""}, appuyez sur Bas pour ouvrir le menu, ${isMulti ? " appuyez sur Gauche pour mettre au point les valeurs sélectionnées" : ""}`
          : "";
      case "value":
        return "Utilisez les flèches Gauche et Droite pour basculer entre les valeurs sélectionnées, appuyez sur Retour arrière pour supprimer la valeur actuellement sélectionnée.";
      default:
        return "";
    }
  },

  onChange: <Option, IsMulti extends boolean>(
    props: AriaOnChangeProps<Option, IsMulti>,
  ) => {
    const { action, label = "", labels, isDisabled } = props;
    switch (action) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return `option ${label}, désélectionnée.`;
      case "clear":
        return "Toutes les options sélectionnées ont été effacées.";
      case "initial-input-focus":
        return `${labels.length > 1 ? "les " : "l'"}option${labels.length > 1 ? "s" : ""} ${labels.join(",")} ${labels.length > 1 ? "sont" : "est"} sélectionnée${labels.length > 1 ? "s" : ""}.`;
      case "select-option":
        return isDisabled
          ? `l'option ${label} est désactivée. Sélectionnez une autre option.`
          : `l'option ${label} est sélectionnée.`;
      default:
        return "";
    }
  },

  onFocus: <Option, Group extends GroupBase<Option>>(
    props: AriaOnFocusProps<Option, Group>,
  ) => {
    const {
      context,
      focused,
      options,
      label = "",
      selectValue,
      isDisabled,
      isSelected,
      isAppleDevice,
    } = props;

    const getArrayIndex = (
      arr: OptionsOrGroups<Option, Group>,
      item: Option,
    ) =>
      arr && arr.length ? `${arr.indexOf(item) + 1} sur ${arr.length}` : "";

    if (context === "value" && selectValue) {
      return `la valeur ${label} est sélectionnée, ${getArrayIndex(selectValue, focused)}.`;
    }

    if (context === "menu" && isAppleDevice) {
      const disabled = isDisabled ? " désactivé" : "";
      const status = `${isSelected ? " sélectionné" : ""}${disabled}`;
      return `${label}${status}, ${getArrayIndex(options, focused)}.`;
    }
    return "";
  },

  onFilter: (props: AriaOnFilterProps) => {
    const { inputValue, resultsMessage } = props;
    return `${resultsMessage}${inputValue ? ` pour le terme de recherche : ${inputValue}` : ""}.`;
  },
};
