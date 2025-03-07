export const getFieldContainerClassName = (
  defaultClassName: string,
  value?: string | number | readonly string[] | undefined,
) => defaultClassName + (value ? ` ${defaultClassName}--filled` : "");
