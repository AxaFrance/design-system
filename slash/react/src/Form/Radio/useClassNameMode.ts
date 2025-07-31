import { RadioModes } from "./Radio";

export const useClassNameMode = (mode: keyof typeof RadioModes) => {
  switch (mode) {
    case RadioModes.classic:
      return { className: "af-form__radio", suffix: "radio" };
    case RadioModes.inline:
      return { className: "af-form__radio-inline", suffix: "radio-inline" };
    default:
      return { className: "af-form__radio-custom", suffix: "radio-custom" };
  }
};
