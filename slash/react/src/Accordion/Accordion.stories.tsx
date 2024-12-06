import { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
import { CollapseCard } from "./CollapseCard";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
};
export default meta;

export const Default: StoryObj<typeof Accordion> = {
  name: "Regular Accordion",
  render: ({ ...args }) => (
    <Accordion {...args}>
      <CollapseCard title="About AXA" id="t1" open classModifier="test">
        <p>
          AXA is a French multinational insurance firm headquartered in the 8th
          arrondissement of Pars that engages in global insurance, investment
          management, and other financial services.
        </p>

        <p>
          The AXA Group operates primarily in Western Europe, North America, the
          Asia Pacific region, and the Middle East, with a presence also in
          Africa. AXA is a conglomerate of independently run businesses,
          operated according to the laws and regulations of many different
          countries.
        </p>

        <p>
          AXA&apos;s main business is insurance, which includes life, health,
          and other types of insurance. The company also provides investment
          management services and has a strong presence in the asset management
          industry.
        </p>
      </CollapseCard>
      <CollapseCard title="About insurance" id="t2" open className="maClasse">
        Insurance is a means of protection from financial loss. It is a form of
        risk management, primarily used to hedge against the risk of a
        contingent or uncertain loss.
      </CollapseCard>
    </Accordion>
  ),
  args: {
    onlyOne: false,
  },
};

export const Light: StoryObj<typeof Accordion> = {
  name: "Light accordion",
  render: ({ ...args }) => (
    <Accordion {...args}>
      <CollapseCard id="t2" title="Titre lorem ipsum">
        Content 1
      </CollapseCard>
      <CollapseCard id="t1" title="Title 2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eligendi
        recusandae dolore est sunt ducimus tenetur sapiente accusamus, nihil
        ullam, nulla illo asperiores soluta officia rerum, provident voluptate
        nesciunt quos.
      </CollapseCard>
    </Accordion>
  ),
  args: {
    onlyOne: false,
    classModifier: "light",
  },
};
