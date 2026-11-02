import type { Meta, StoryObj } from "@storybook/react";
import { CardMarketing } from "@axa-fr/canopee-react/prospect";

const meta = {
  title: "Components/CardMarketing",
  component: CardMarketing,
  parameters: { layout: "centered" },
  decorators: [
    (Story, { args }) => (
      <div
        style={{
          width:
            args.variant === "horizontal"
              ? "min(40rem, calc(100vw - 2rem))"
              : "min(18rem, calc(100vw - 2rem))",
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    image: {
      src: "https://dummyimage.com/282x130/edf/00008F",
      alt: "",
      sizes: "(max-width: 667px) 100vw, 400px",
    },
    title: "Découvrez nos offres d'assurance",
    text: "Des garanties adaptées à votre quotidien pour vous accompagner dans tous vos projets.",
    linkProps: {
      href: "https://www.axa.fr/",
      children: "Découvrir l'offre",
    },
    variant: "vertical",
  },
  argTypes: {
    variant: { control: "radio", options: ["vertical", "horizontal"] },
  },
} satisfies Meta<typeof CardMarketing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {};

export const Horizontal: Story = {
  args: { variant: "horizontal" },
};

export const PrimaryBusinessLink: Story = {
  name: "Primary business link",
  args: {
    linkProps: {
      ...meta.args.linkProps,
      variant: "button-primary-business",
    },
  },
};
