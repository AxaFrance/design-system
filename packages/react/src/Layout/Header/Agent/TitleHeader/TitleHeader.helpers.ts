export const getClassModifier = (
  classModifier?: string,
  isSticky?: boolean,
) => {
  if (isSticky) {
    return classModifier !== undefined
      ? "sticky"
      : `${classModifier} sticky`.trim();
  }

  return classModifier;
};
