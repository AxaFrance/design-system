import {
  ExperimentalRestitution,
  ExperimentalRestitutionColumn,
  ExperimentalRestitutionLabelValue,
  ExperimentalRestitutionListDef,
  ExperimentalRestitutionRow,
  ExperimentalRestitutionSection,
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
      <ExperimentalRestitutionLabelValue label="item1" value="item value" />
      <ExperimentalRestitutionLabelValue label="item2" value="item value" />
      <ExperimentalRestitutionLabelValue label="item3" value="item value" />
      <ExperimentalRestitutionLabelValue
        label="item4"
        value={
          <ExperimentalRestitutionValueList
            items={["value 1", "value 2", "value 3"]}
          />
        }
      />
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
              <ExperimentalRestitutionLabelValue
                label="item1"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item2"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item3"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item4"
                value={
                  <ExperimentalRestitutionValueList
                    items={["value 1", "value 2", "value 3"]}
                  />
                }
              />
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionLabelValue
                label="item1"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item2"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item3"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item4"
                value={
                  <ExperimentalRestitutionValueList
                    items={["value 1", "value 2", "value 3"]}
                  />
                }
              />
              <ExperimentalRestitutionLabelValue
                label="item5"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item6"
                value="item value"
              />
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="a short title">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionLabelValue
                label="item1"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item2"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item3"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item4"
                value={
                  <ExperimentalRestitutionValueList
                    items={["value 1", "value 2", "value 3"]}
                  />
                }
              />
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
              <ExperimentalRestitutionLabelValue
                label="item1"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item2"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item3"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item4"
                value={
                  <ExperimentalRestitutionValueList
                    items={["value 1", "value 2", "value 3"]}
                  />
                }
              />
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="A very long title that should be be wrapped on several lines to test the layout of the header">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionLabelValue
                label="item1"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item2"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item3"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item4"
                value={
                  <ExperimentalRestitutionValueList
                    items={["value 1", "value 2", "value 3"]}
                  />
                }
              />
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="A short title">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionLabelValue
                label="item1"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item2"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item3"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item4"
                value={
                  <ExperimentalRestitutionValueList
                    items={["value 1", "value 2", "value 3"]}
                  />
                }
              />
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>

        <ExperimentalRestitutionSection title="A very long title that should be be wrapped on several lines to test the layout of the header">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionLabelValue
                label="item1"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item2"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item3"
                value="item value"
              />
              <ExperimentalRestitutionLabelValue
                label="item4"
                value={
                  <ExperimentalRestitutionValueList
                    items={["value 1", "value 2", "value 3"]}
                  />
                }
              />
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
            <ExperimentalRestitutionLabelValue label="item1" value="item value" />
            <ExperimentalRestitutionLabelValue label="item2" value="item value" />
            <ExperimentalRestitutionLabelValue label="item3" value="item value" />
            <ExperimentalRestitutionLabelValue label="item4" value="item value" />
          </ExperimentalRestitutionListDef>
        </ExperimentalRestitutionColumn>
      </ExperimentalRestitutionSection>
    </div>
  ),
};
