import { type Args } from "storybook/internal/types";
import { Tag, tagVariants } from "@axa-fr/canopee-react/prospect";

export const renderTagAll = () => (
  <div className="af-tag-client-demo">
    {Object.values(tagVariants).map((variant) => (
      <Tag key={variant} variant={variant}>
        {variant}
      </Tag>
    ))}
  </div>
);

export const renderTag = ({ children, variant, ...args }: Args) => (
  <Tag variant={variant} {...args}>
    {children} {variant}
  </Tag>
);
