import "@axa-fr/design-system-look-and-feel-css/dist/Form/Radio/Radio.scss";
import type { Meta, StoryObj } from "@storybook/html";
import { render, renderBasic } from "./RadioRender";

const meta: Meta = {
  title: "Components/Form/Input/Radio",
};

export default meta;

export type TTitle = {
  title: string;
  subtitle?: string;
  description?: string;
};

export type TRadioValue = {
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
    name: "radio1",
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
    showIconParis: true,
    showIconBruxelles: true,
    showIconLille: true,
    radioList: [
      {
        name: "cities",
        labelGroup: {
          title: "Paris",
          subtitle: "Capitale de la France",
          description: "Nord",
        },
      },
      {
        name: "cities",
        labelGroup: { title: "Bruxelles", subtitle: "Capitale de la Belgique" },
      },
      {
        name: "cities",
        labelGroup: { title: "Lille" },
      },
    ],
  },
  argTypes: {
    radioList: { control: false },
    check: {
      control: "inline-radio",
      options: ["Paris", "Bruxelles", "Lille"],
    },
  },
  decorators: [
    (story, { args }) => {
      const {
        check,
        disableParis,
        disableBruxelles,
        disableLille,
        showIconParis,
        showIconBruxelles,
        showIconLille,
        radioList,
        ...restArgs
      } = args;
      radioList[0] = {
        ...radioList[0],
        disabled: disableParis,
        checked: check === "Paris",
        withIcon: showIconParis,
      };
      radioList[1] = {
        ...radioList[1],
        disabled: disableBruxelles,
        checked: check === "Bruxelles",
        withIcon: showIconBruxelles,
      };
      radioList[2] = {
        ...radioList[2],
        disabled: disableLille,
        checked: check === "Lille",
        withIcon: showIconLille,
      };
      return story({ args: { radioList, ...restArgs } });
    },
  ],
};
