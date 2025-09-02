import edit from "@material-symbols/svg-400/rounded/edit.svg";
import trash from "@material-symbols/svg-400/rounded/delete.svg";

import {
  Accordion,
  CheckboxItem,
  CollapseCard,
} from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";

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

        <CheckboxItem label="Check me" />

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
      <CollapseCard title="About insurance" id="t2" open>
        Insurance is a means of protection from financial loss. It is a form of
        risk management, primarily used to hedge against the risk of a
        contingent or uncertain loss.
      </CollapseCard>

      <CollapseCard
        title="With actions"
        id="t3"
        open
        actions={[
          {
            key: "edit",
            label: "Edit",
            leftIcon: edit,
            onClick: () => console.log("Edit clicked"),
          },
          {
            key: "delete",
            label: "Delete",
            rightIcon: trash,
            onClick: () => console.log("Delete clicked"),
          },
        ]}
      >
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

      <CollapseCard
        title="With actions"
        id="t3"
        open
        actions={[
          {
            key: "edit",
            label: "Edit",
            onClick: () => console.log("Edit clicked"),
          },
          {
            key: "delete",
            label: "Delete",
            onClick: () => console.log("Delete clicked"),
          },
        ]}
      >
        Insurance is a means of protection from financial loss. It is a form of
        risk management, primarily used to hedge against the risk of a
        contingent or uncertain loss.
      </CollapseCard>
    </Accordion>
  ),
  args: {
    onlyOne: false,
    classModifier: "light",
  },
};

export const White: StoryObj<typeof Accordion> = {
  name: "White accordion",
  render: ({ ...args }) => (
    <Accordion {...args}>
      <CollapseCard id="w1" title="Titre onglet 1">
        This is the content of the first white accordion item.
      </CollapseCard>
      <CollapseCard id="w2" title="Titre onglet 2">
        Erat sed option lorem vero at sit id. Sea aliquyam dolore no ipsum
        dolore feugiat suscipit ipsum sit aliquyam stet iriure diam eu dolor
        gubergren magna. Kasd ea et assum. Et sanctus dolor. Amet consequat amet
        option stet magna nonumy magna nonumy in ut no nibh. Voluptua labore
        kasd ipsum diam nulla et dolor ea nibh. Et dolore velit. Facilisi
        invidunt sed nonumy sea et commodo sit. Amet clita amet aliquam
        consequat dolor eu ipsum eu adipiscing sadipscing tempor consectetuer
        iriure. Dolores assum feugiat tempor. Nulla magna ipsum amet possim
        iusto facer at justo. Facilisis sadipscing labore ea ipsum elit diam eos
        duo. Ipsum sit ut et eum et sanctus vero veniam magna assum gubergren.
        Magna qui blandit aliquyam amet erat. Clita tation duo consetetur dolor
        qui magna consequat quod magna ut diam erat vero facilisi erat rebum
        duis diam. Luptatum sed eu nonummy ut lorem augue ipsum magna lorem nisl
        dolore. Ea ut nulla et sed volutpat kasd qui lorem justo erat lorem eos
        erat. Euismod est ut stet elit dolores labore at. Gubergren enim sanctus
        dolore ut erat dolore nihil eirmod clita ipsum. Erat vero erat. Ipsum
        sit dolor dolore magna molestie sed diam sit ipsum kasd dolor elit et
        dolor consectetuer elit. Ipsum amet sanctus dolor nulla eos qui.
        Consetetur dolores illum nulla doming. Invidunt justo diam. No nulla
        elitr takimata facilisis ea erat labore ut te rebum et no lorem duo
        tempor diam clita. Sit luptatum volutpat. Clita clita at nonumy accusam
        amet aliquyam. Erat voluptua eu kasd voluptua magna vero. Invidunt et
        sit eirmod at eirmod sed takimata nulla sadipscing sadipscing lorem
        kasd.
      </CollapseCard>

      <CollapseCard
        title="With actions"
        id="t3"
        open
        actions={[
          {
            key: "edit",
            label: "Edit",
            onClick: () => console.log("Edit clicked"),
          },
          {
            key: "delete",
            label: "Delete",
            onClick: () => console.log("Delete clicked"),
          },
        ]}
      >
        Insurance is a means of protection from financial loss. It is a form of
        risk management, primarily used to hedge against the risk of a
        contingent or uncertain loss.
      </CollapseCard>
    </Accordion>
  ),
  args: {
    onlyOne: false,
    classModifier: "white",
  },
};
