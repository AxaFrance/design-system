import {
  Skeleton,
  skeletonSizeVariants,
  skeletonVariants,
  type SkeletonCircleSizeVariant,
  type SkeletonSizeVariant,
} from "@axa-fr/canopee-react/client";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(skeletonVariants),
    },
    size: {
      control: "select",
      options: Object.keys(skeletonSizeVariants),
    },
    colSize: {
      control: { type: "number", min: 1, max: 12, step: 1 },
    },
    rowSize: {
      control: { type: "number", min: 1, max: 12, step: 1 },
    },
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

const rectangleSizes = Object.keys(
  skeletonSizeVariants,
) as SkeletonSizeVariant[];
const circleSizes: SkeletonCircleSizeVariant[] = ["S", "M", "L"];

const renderCircle = () => (
  <div className="skeleton-variant-demo">
    {circleSizes.map((size) => (
      <section key={size} className="skeleton-demo-card">
        <h4 className="skeleton-demo-title">Taille {size}</h4>
        <div className="skeleton-story-grid">
          <Skeleton variant={skeletonVariants.circle} size={size} colSize={1} />
        </div>
      </section>
    ))}
  </div>
);

const renderAction = () => (
  <div className="skeleton-variant-demo">
    <section className="skeleton-demo-card">
      <h4 className="skeleton-demo-title">Taille M</h4>
      <div className="skeleton-story-grid">
        <Skeleton variant={skeletonVariants.action} size="M" colSize={12} />
      </div>
    </section>
  </div>
);

const renderRectangle = () => (
  <div className="skeleton-variant-demo">
    {rectangleSizes.map((size) => (
      <section key={size} className="skeleton-demo-card">
        <h4 className="skeleton-demo-title">Taille {size}</h4>
        <div className="skeleton-story-grid">
          <Skeleton
            variant={skeletonVariants.rectangle}
            size={size}
            colSize={12}
          />
        </div>
      </section>
    ))}
  </div>
);

export const Circle: Story = {
  render: () => renderCircle(),
};

export const Playground: Story = {
  args: {
    variant: skeletonVariants.rectangle,
    size: "M",
    colSize: 12,
    rowSize: 1,
  },
  render: (args) => <Skeleton {...args} />,
};

export const Action: Story = {
  render: () => renderAction(),
};

export const Rectangle: Story = {
  render: () => renderRectangle(),
};
