import type { Meta, StoryObj } from "@storybook/react";
import { Card, FormLayout, Link } from "@axa-fr/canopee-react/prospect";
import type { ComponentProps } from "react";
import { LayoutDemo } from "../LayoutDemo/LayoutDemo";

const meta: Meta = {
  title: "Layouts/Form Layout",
  parameters: { layout: "fullscreen" },
  argTypes: {
    title: { control: "text" },
    firstSubtitle: { control: "text" },
    showAgent: { control: "boolean" },
    actions: {
      control: "number",
      min: 1,
    },
    content: {
      control: "number",
      min: 1,
    },
  },
};

export default meta;

type StoryProps = ComponentProps<typeof FormLayout>;

const Demo = () => (
  <LayoutDemo title="Form Layout Title">
    <FormLayout>
      <FormLayout.Header>
        <Card>
          <p>
            <strong>Slot HEADER :</strong> for header content
          </p>
          <p>
            By default, the header takes up the full width of the container and
            12 columns of the grid in small desktop.
          </p>
        </Card>
      </FormLayout.Header>
      <FormLayout.Body>
        <Card>
          <p>
            <strong>Slot BODY :</strong> for fields or other content
          </p>
          <p>
            By default, fields take up the full width of the container and 5
            columns of the grid in small desktop.
          </p>
        </Card>
        <Card
          data-cols-mobile="2"
          data-cols-tablet="5"
          data-cols-desktop-small="7"
          data-cols-desktop-medium="6"
          data-cols-desktop-large="4"
        >
          <strong>(Slot BODY) Custom Responsive example</strong>
          <p>
            This card demonstrates how to use the responsive grid system of the
            Form Layout. The number of columns can be defined for each
            breakpoint using data attributes.
          </p>
          <code>
            <p>data-cols-mobile=&quot;2&ldquo;</p>
            <p>data-cols-tablet=&quot;5&ldquo;</p>
            <p>data-cols-desktop-small=&quot;7&ldquo;</p>
            <p>data-cols-desktop-medium=&quot;6&ldquo;</p>
            <p>data-cols-desktop-large=&quot;4&ldquo;</p>
          </code>
        </Card>

        <Card
          data-cols-mobile="2"
          data-cols-tablet="5"
          data-cols-desktop-small="7"
          data-cols-desktop-medium="6"
          data-cols-desktop-large="4"
        >
          <strong>(Slot BODY) Custom Responsive example for FIELDS</strong>
          <p>
            Because the inputs are wrapped by containers, we have to pass the
            responsive attributes to the containerProps of the input components
            to make them responsive.
          </p>
          <p />
          <code>
            <p>{"containerProps={{"}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;data-cols-mobile=&quot;2&quot;,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;data-cols-tablet=&quot;5&quot;,</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;data-cols-desktop-small=&quot;7&quot;,
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;data-cols-desktop-medium=&quot;6&quot;,
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;data-cols-desktop-large=&quot;4&quot;</p>
            <p>{"}}"}</p>
          </code>
          <p>
            You can play with them on this demo{" "}
            <Link href="/?path=/story/pages-form--form-story">here</Link>.
          </p>
        </Card>

        {Array.from({ length: 5 }, (_, i) => (
          <Card key={i}>
            <strong>(Slot BODY)</strong> FIELD {i + 1}
          </Card>
        ))}
      </FormLayout.Body>
      <FormLayout.Footer>
        <Card>
          <strong>Slot FOOTER </strong>: for actions
        </Card>
        <Card>
          (<strong>Slot FOOTER </strong>) mobile : 4 cols, tablet : 4 cols, over
          : 3 cols
        </Card>
      </FormLayout.Footer>
    </FormLayout>
  </LayoutDemo>
);

export const FormLayoutStory: StoryObj<StoryProps> = {
  name: "FormLayout",
  render: Demo,
};
