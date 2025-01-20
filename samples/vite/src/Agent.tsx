import {
  Action,
  Button,
  FileInput,
  MultiSelectInput,
  Paging,
  Popover,
  SliderInput,
  THead,
  Table,
  Td,
  Th,
  Title,
  Tr,
} from "@axa-fr/design-system-slash-react";
import { useState } from "react";

const Agent = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <section className="design-section">
      <header>
        <Title heading="h2">Agent</Title>
      </header>

      <article>
        <Title heading="h3">Action</Title>
        <Action icon="plus" onClick={() => console.log("hello")} />
      </article>

      <article>
        <Button>Button</Button>
      </article>

      <article style={{ margin: "unset" }}>
        <Title heading="h3">Table component</Title>

        <Table>
          <THead>
            <Tr>
              <Th colSpan={3}>Some text</Th>
            </Tr>
            <Tr>
              <Th rowSpan={2}>Some text</Th>
              <Td>
                <strong>Some bold text</strong>
              </Td>
              <Td>Some text</Td>
            </Tr>
            <Tr>
              <Td>Some text</Td>
              <Td>Some text</Td>
            </Tr>
            <Tr>
              <Table.Td>Some text</Table.Td>
              <Table.Td>Some text</Table.Td>
              <Table.Td>Some text</Table.Td>
            </Tr>
          </THead>
        </Table>
        <Paging
          currentPage={5}
          numberItems={15}
          numberPages={22}
          mode="default"
          items={[5, 15, 50, 100]}
        />
      </article>

      <article>
        <Title heading="h3">Popover</Title>
        <Popover mode="hover" popoverElement={"hello friends"}>
          <p
            style={{
              padding: "1rem",
              backgroundColor: "#f1f1f1",
              border: "1px solid #ccc",
            }}
          >
            Hover me! ❤️
          </p>
        </Popover>
      </article>

      <article>
        <Title heading="h3">Popover</Title>
        <SliderInput
          id="slider"
          name="slider"
          value={sliderValue}
          onChange={(e) => setSliderValue(e.value)}
          label="Slider"
          options={[
            {
              value: 10,
              label: "ten",
            },
            {
              value: 50,
              label: "fifty",
            },
            {
              value: 100,
              label: "one hundred",
            },
          ]}
        />
      </article>

      <article>
        <Title heading="h3">Select component</Title>
        <MultiSelectInput
          id="select"
          name="select"
          label="Select"
          options={[
            {
              label: "Option 1",
              value: "option-1",
            },
            {
              label: "Option 2",
              value: "option-2",
            },
            {
              label: "Option 3",
              value: "option-3",
            },
          ]}
        />
      </article>

      <article>
        <Title heading="h3">FileInput component</Title>
        <FileInput
          id="fileInput"
          name="fileInput"
          label="FileInput"
          onChange={() => {}}
        />
      </article>
    </section>
  );
};

export default Agent;
