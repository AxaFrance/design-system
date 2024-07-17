import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { ContentTabList } from "./ContentTabList.client";

const meta: Meta<typeof ContentTabList> = {
  title: "Client/Components/List/ContentTabList",
  component: ContentTabList,
};
export default meta;

const template = (args: ComponentProps<typeof ContentTabList>) => (
  <ContentTabList {...args} />
);

export const ContentTabListWithButtons: StoryObj<
  ComponentProps<typeof ContentTabList>
> = {
  name: "ContentTabList with buttons",
  render: template,
  args: {
    items: [
      {
        id: "1",
        title: "Remboursement soins",
        subtitle: "Titre onglet",
        tag: "En attente",
        date: "01/01/2024",
        onDownload: () => {},
      },
      {
        id: "2",
        title: "Remboursement soins",
        tag: "En attente",
        onDownload: () => {},
        onDisplay: () => {},
      },
    ],
    classModifier: "",
  },
};

export const ContentTabListWithValue: StoryObj<
  ComponentProps<typeof ContentTabList>
> = {
  name: "ContentTabList with value",
  render: template,
  args: {
    items: [
      {
        id: "1",
        title: "Remboursement soins",
        subtitle: "Titre onglet",
        date: "01/01/2024",
        value: "+ 11,86 €",
      },
      {
        id: "2",
        title: "Remboursement soins",
        tag: "En attente",
        value: "+ 11,86 €",
      },
    ],
  },
};
