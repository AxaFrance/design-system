import {
  FormHelper,
  type FormHelperProps,
  ListFormHelper,
  type ListFormHelperStep,
} from "@axa-fr/canopee-react/distributeur";
import preview from "../../.storybook/preview";

type StoryProps = Omit<FormHelperProps, "children"> & {
  steps: ListFormHelperStep[];
};

const meta = preview.type<{ args: StoryProps }>().meta({
  title: "Components/Form/FormHelper",
  argTypes: {
    heading: {
      options: ["h2", "h3", "h4"],
      control: { type: "select" },
    },
    steps: { control: { type: "object" } },
    stateLabels: { control: { type: "object" } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "22rem" }}>
        <Story />
      </div>
    ),
  ],
  render: ({ steps, stateLabels, ...args }) => (
    <FormHelper stateLabels={stateLabels} {...args}>
      <ListFormHelper steps={steps} stateLabels={stateLabels} />
    </FormHelper>
  ),
});
export default meta;

export const Playground = meta.story({
  name: "FormHelper",
  args: {
    title: "Assistant de création",
    heading: "h2",
    steps: [
      {
        label: "Informations clients",
        variant: "validated",
        href: "#informations-clients",
      },
      { label: "Tarification", variant: "inprogress", href: "#tarification" },
      {
        label: "Informations complémentaires",
        variant: "todo",
        href: "#informations-complementaires",
      },
      {
        label: "Signature du contrat",
        variant: "todo",
        href: "#signature-du-contrat",
      },
    ],
  },
});
