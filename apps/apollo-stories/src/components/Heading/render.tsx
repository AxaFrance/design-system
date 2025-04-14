import { Heading } from "@axa-fr/design-system-apollo-react";

export const renderAllHeading = (
  args: React.ComponentProps<typeof Heading>,
) => (
  <div className="af-heading-client-demo">
    {([1, 2, 3] as (typeof args)["level"][]).map((level) => (
      <Heading key={`story-heading-${level}`} {...args} level={level} />
    ))}
  </div>
);
