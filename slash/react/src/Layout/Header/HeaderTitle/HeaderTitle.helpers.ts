export const getClassModifier = (
  classModifier?: string,
  isSticky?: boolean,
) => {
  if (isSticky) {
    return !classModifier ? "sticky" : `${classModifier} sticky`.trim();
  }

  return classModifier;
};
