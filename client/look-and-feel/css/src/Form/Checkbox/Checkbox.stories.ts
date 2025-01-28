import type { Meta, StoryObj } from "@storybook/html";
import "./Checkbox.scss";
import { render, renderBasic } from "./render";

const meta: Meta = {
  title: "Components/Form/Input/Checkbox",
};

export default meta;

export type TTitle = {
  title: string;
  subtitle?: string;
  description?: string;
};

export type TCheckboxValue = {
  label?: string;
  name: string;
  group?: TTitle;
  withIcon?: boolean;
  checked?: boolean;
  disabled?: boolean;
};

export const Basic: StoryObj = {
  render: renderBasic,
  args: {
    name: "checkbox1",
    label:
      "J'accepte la convention de preuve relative à ma demande de versement complémentaire sur internet et déclare en accepter expressément les conditions. Je déclare être pleinement informé(e) qu'AXA, en sa qualité d'organisme financier, est soumise aux obligations légales issues principalement du code monétaire et financier en matière de lutte contre le blanchiment des capitaux et le financement du terrorisme.",
    disabled: false,
    checked: false,
    error: "",
  },
  argTypes: {},
};

export const Select: StoryObj = {
  render,
  args: {
    label: "Quelle ville ?",
    isRequired: true,
    error: "",
    vertical: true,
    disableParis: false,
    disableBruxelles: false,
    disableLille: true,
    checkParis: false,
    checkBruxelles: true,
    checkLille: true,
    showIconParis: true,
    showIconBruxelles: true,
    showIconLille: true,
    checkboxList: [
      {
        name: "Paris",
        labelGroup: {
          title: "Paris",
          subtitle: "Capitale de la France",
          description: "Nord",
        },
      },
      {
        name: "Bruxelles",
        labelGroup: { title: "Bruxelles", subtitle: "Capitale de la Belgique" },
      },
      {
        name: "Lille",
        labelGroup: { title: "Lille" },
      },
    ],
  },
  argTypes: {
    checkboxList: { control: false },
  },
  decorators: [
    (story, { args }) => {
      const {
        disableParis,
        disableBruxelles,
        disableLille,
        checkParis,
        checkBruxelles,
        checkLille,
        showIconParis,
        showIconBruxelles,
        showIconLille,
        checkboxList,
        ...restArgs
      } = args;
      checkboxList[0] = {
        ...checkboxList[0],
        disabled: disableParis,
        checked: checkParis,
        withIcon: showIconParis,
      };
      checkboxList[1] = {
        ...checkboxList[1],
        disabled: disableBruxelles,
        checked: checkBruxelles,
        withIcon: showIconBruxelles,
      };
      checkboxList[2] = {
        ...checkboxList[2],
        disabled: disableLille,
        checked: checkLille,
        withIcon: showIconLille,
      };
      return story({ args: { checkboxList, ...restArgs } });
    },
  ],
};
