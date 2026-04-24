import {
  ExperimentalRestitution,
  ExperimentalRestitutionColumn,
  ExperimentalRestitutionItem,
  ExperimentalRestitutionListDef,
  ExperimentalRestitutionRow,
  ExperimentalRestitutionSection,
  ExperimentalRestitutionValue,
  ExperimentalRestitutionValueList,
} from "@axa-fr/canopee-react/distributeur-experimental";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Experimental/ExperimentalRestitution",
  component: ExperimentalRestitution,
  parameters: {
    viewport: {
      viewports: {
        fourColumns: {
          name: "4 columns",
          styles: {
            width: "1300px",
            height: "90vh",
          },
          type: "desktop",
        },
        twoColumns: {
          name: "2 columns",
          styles: {
            width: "1000px",
            height: "90vh",
          },
          type: "tablet",
        },
        oneColumns: {
          name: "1 column",
          styles: {
            width: "540px",
            height: "90vh",
          },
          type: "tablet",
        },
      },
    },
  },
} satisfies Meta<typeof ExperimentalRestitution>;

const Column = () => (
  <ExperimentalRestitutionColumn>
    <ExperimentalRestitutionListDef>
      <ExperimentalRestitutionItem>item1</ExperimentalRestitutionItem>
      <ExperimentalRestitutionValue>item value</ExperimentalRestitutionValue>
      <ExperimentalRestitutionItem>item2</ExperimentalRestitutionItem>
      <ExperimentalRestitutionValue>item value</ExperimentalRestitutionValue>
      <ExperimentalRestitutionItem>item3</ExperimentalRestitutionItem>
      <ExperimentalRestitutionValue>item value</ExperimentalRestitutionValue>
      <ExperimentalRestitutionItem>item4</ExperimentalRestitutionItem>
      <ExperimentalRestitutionValue>
        <ExperimentalRestitutionValueList
          items={["value 1", "value 2", "value 3"]}
        />
      </ExperimentalRestitutionValue>
    </ExperimentalRestitutionListDef>
  </ExperimentalRestitutionColumn>
);

export const Demo: StoryObj<typeof ExperimentalRestitution> = {
  name: "Complete restitution demo",
  render: () => (
    <ExperimentalRestitution
      title="General title of the restitution"
      subtitle="Subtitle of the restitution"
      rightElement={<div>Right title</div>}
    >
      <ExperimentalRestitutionRow>
        <ExperimentalRestitutionSection title="Cas 2 + 1">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionItem>item1</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item2</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item3</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item4</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                <ExperimentalRestitutionValueList
                  items={["value 1", "value 2", "value 3"]}
                />
              </ExperimentalRestitutionValue>
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionItem>item1</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item2</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item3</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item4</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                <ExperimentalRestitutionValueList
                  items={["value 1", "value 2", "value 3"]}
                />
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item5</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item6</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="a short title">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionItem>item1</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item2</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item3</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item4</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                <ExperimentalRestitutionValueList
                  items={["value 1", "value 2", "value 3"]}
                />
              </ExperimentalRestitutionValue>
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>
      </ExperimentalRestitutionRow>

      <ExperimentalRestitutionRow>
        <ExperimentalRestitutionSection title="Cas 3 + 1">
          <Column />
          <Column />
          <Column />
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="A very long title that should be be wrapped on several lines to test the layout of the header">
          <Column />
        </ExperimentalRestitutionSection>
      </ExperimentalRestitutionRow>

      <ExperimentalRestitutionRow>
        <ExperimentalRestitutionSection title="Cas 4 x 1">
          <Column />
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="A very long title that should be be wrapped on several lines to test the layout of the header">
          <Column />
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="A short title">
          <Column />
        </ExperimentalRestitutionSection>

        <ExperimentalRestitutionSection title="A very long title that should be be wrapped on several lines to test the layout of the header">
          <Column />
        </ExperimentalRestitutionSection>
      </ExperimentalRestitutionRow>

      <ExperimentalRestitutionRow>
        <ExperimentalRestitutionSection title="Cas 2x2">
          <Column />
          <Column />
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="A very long title that should be be wrapped on several lines to test the layout of the header">
          <Column />
          <Column />
        </ExperimentalRestitutionSection>
      </ExperimentalRestitutionRow>
    </ExperimentalRestitution>
  ),
};

export const Restitution4x1: StoryObj<typeof ExperimentalRestitution> = {
  name: "Restitution 4x1",
  render: () => (
    <ExperimentalRestitution
      title="General title of the restitution"
      subtitle="Subtitle of the restitution"
      rightElement={<div>Right title</div>}
    >
      <ExperimentalRestitutionRow>
        <ExperimentalRestitutionSection title="Cas 4 x 1">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionItem>item1</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item2</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item3</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item4</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                <ExperimentalRestitutionValueList
                  items={["value 1", "value 2", "value 3"]}
                />
              </ExperimentalRestitutionValue>
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="A very long title that should be be wrapped on several lines to test the layout of the header">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionItem>item1</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item2</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item3</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item4</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                <ExperimentalRestitutionValueList
                  items={["value 1", "value 2", "value 3"]}
                />
              </ExperimentalRestitutionValue>
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="A short title">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionItem>item1</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item2</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item3</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item4</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                <ExperimentalRestitutionValueList
                  items={["value 1", "value 2", "value 3"]}
                />
              </ExperimentalRestitutionValue>
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>

        <ExperimentalRestitutionSection title="A very long title that should be be wrapped on several lines to test the layout of the header">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionItem>item1</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item2</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item3</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                item value
              </ExperimentalRestitutionValue>
              <ExperimentalRestitutionItem>item4</ExperimentalRestitutionItem>
              <ExperimentalRestitutionValue>
                <ExperimentalRestitutionValueList
                  items={["value 1", "value 2", "value 3"]}
                />
              </ExperimentalRestitutionValue>
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>
      </ExperimentalRestitutionRow>
    </ExperimentalRestitution>
  ),
};

export const RestitutionSection: StoryObj<
  typeof ExperimentalRestitutionSection
> = {
  name: "Restitution section",
  render: () => (
    <div className="experimental-af-restitution">
      <ExperimentalRestitutionSection title="Section title">
        <ExperimentalRestitutionColumn>
          <ExperimentalRestitutionListDef>
            <ExperimentalRestitutionItem>item1</ExperimentalRestitutionItem>
            <ExperimentalRestitutionValue>
              item value
            </ExperimentalRestitutionValue>
            <ExperimentalRestitutionItem>item2</ExperimentalRestitutionItem>
            <ExperimentalRestitutionValue>
              item value
            </ExperimentalRestitutionValue>
            <ExperimentalRestitutionItem>item3</ExperimentalRestitutionItem>
            <ExperimentalRestitutionValue>
              item value
            </ExperimentalRestitutionValue>
            <ExperimentalRestitutionItem>item4</ExperimentalRestitutionItem>
          </ExperimentalRestitutionListDef>
        </ExperimentalRestitutionColumn>
      </ExperimentalRestitutionSection>
    </div>
  ),
};
