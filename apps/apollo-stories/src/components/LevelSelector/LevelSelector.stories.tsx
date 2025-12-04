import { LevelSelector } from "@axa-fr/canopee-react/prospect";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof LevelSelector> = {
  title: "Components/LevelSelector",
  component: LevelSelector,
};
export default meta;

export const Default: StoryObj<typeof LevelSelector> = {
  render: ({ ...args }) => {
    const [value, setValue] = useState(args.value || 0);
    return (
      <div style={{ maxWidth: 500 }}>
        <LevelSelector {...args} value={value} onChange={setValue} />
      </div>
    );
  },
  args: {
    stepsCount: 3,
    title: "Titre du niveau actif",
    description:
      "Texte secondaire dynamique sur le niveau actif avec un contenu plus ou moins long selon le besoin",
    value: 0,
  },
  argTypes: {
    onChange: { action: "onClick" },
  },
};
