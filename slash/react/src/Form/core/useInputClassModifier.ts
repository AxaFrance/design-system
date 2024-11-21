export function useInputClassModifier(
  classModifier: string,
  disabled: boolean,
  hasChildren: boolean,
  required = false,
) {
  return {
    inputClassModifier: [
      classModifier ?? "",
      hasChildren ? "hasinfobulle" : "",
    ].join(" "),
    inputFieldClassModifier: [
      classModifier ?? "",
      disabled ? "disabled" : "",
      required ? "required" : "",
    ].join(" "),
  };
}
