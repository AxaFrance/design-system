export const handleLinkFocus = (
  refToFocusOn: HTMLElement | null,
  hasFocus?: boolean,
  isMenuOpen?: boolean,
) => {
  if (!refToFocusOn || isMenuOpen) {
    return;
  }

  if (hasFocus) {
    refToFocusOn.focus();
  } else {
    refToFocusOn.blur();
  }
};
