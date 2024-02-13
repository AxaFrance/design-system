export const handleLinkFocus = (
  refToFocusOn: HTMLElement | null,
  hasFocus?: boolean,
  isMenuOpen?: boolean,
) => {
  if (!refToFocusOn) {
    return;
  }

  if (hasFocus && !isMenuOpen) {
    refToFocusOn.focus();
  } else if (!hasFocus && !isMenuOpen) {
    refToFocusOn.blur();
  }
};
