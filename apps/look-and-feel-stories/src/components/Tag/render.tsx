import { type Args } from "storybook/internal/types";
import { Tag, tagVariants } from "@axa-fr/canopee-react/client";

export const renderTagAll = (args: Args) => (
  <div className="af-tag-client-demo">
    {Object.values(tagVariants).map((variant) => (
      <Tag {...args} key={variant} variant={variant} />
    ))}
  </div>
);
