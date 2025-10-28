import { type GroupBase, type StylesConfig } from "react-select";

import { Option } from "./MultiSelect";

export const useMultiSelectStyle = () => {
  // The recommended way to provide custom styles to react-select is to use the styles prop
  // https://react-select.com/styles#the-styles-prop
  const styles: StylesConfig<Option, boolean, GroupBase<Option>> = {
    container: () => ({
      width: "100%",
    }),
    control: (provided, state) => ({
      ...provided,
      whiteSpace: "normal",
      borderRadius: "0",
      borderColor: state.isFocused ? "var(--axablue80)" : provided.borderColor,
      boxShadow: state.isFocused ? "0" : provided.boxShadow,
      width: "100%",
      cursor: state.isDisabled ? "not-allowed" : "pointer",
      ":hover": {
        borderColor: state.isFocused
          ? "var(--axablue80)"
          : provided.borderColor,
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "0",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor:
        (state.isSelected && !state.isMulti) || state.isFocused
          ? "var(--axablue30)"
          : "var(--white)",
      color:
        state.isSelected || state.isFocused
          ? "var(--axablue80)"
          : provided.color,
      cursor: state.isDisabled ? "not-allowed" : "pointer",
      padding: "0.406rem 0.75rem",
      ":hover": {
        backgroundColor: "var(--axablue30)",
        color: "var(--axablue80)",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      whiteSpace: "normal",
    }),
    multiValue: (provided) => ({
      ...provided,
      whiteSpace: "normal",
      flexDirection: "row-reverse",
      borderRadius: "0.25rem",
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      whiteSpace: "normal",
      backgroundColor: state.isDisabled
        ? provided.backgroundColor
        : "var(--axablue30)",
      color: state.isDisabled ? provided.backgroundColor : "var(--axablue80)",
      padding: "0.125rem 0.375rem 0.125rem 0.375rem",
      borderRadius: "0 0.25rem 0.25rem 0",
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      backgroundColor: state.isDisabled
        ? provided.backgroundColor
        : "var(--axablue30)",
      color: state.isDisabled ? provided.color : "var(--axablue80)",
      //   borderRadius: "0.25rem 0 0 0.25rem",
      ":hover": {
        backgroundColor: state.isDisabled
          ? provided.backgroundColor
          : "var(--axablue40)",
        color: state.isDisabled ? provided.color : "var(--axablue80)",
      },
    }),
  };

  return { styles };
};
