export const getClassModifier = (
  classModifier?: string,
  isSticky?: boolean,
) => {
  if (isSticky) {
    return classModifier ? `${classModifier} sticky`.trim() : "sticky";
  }

  return classModifier;
};
