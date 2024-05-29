export const isDisabled = (
  option: { disabled?: boolean },
  disabled: boolean,
) => (option.disabled !== undefined ? option.disabled : disabled);

export const InputList = {
  isDisabled,
};
