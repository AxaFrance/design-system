import logoAxa from "@axa-fr/design-system-slash-css/logo-axa.svg";

import {
  Action,
  BooleanModal,
  Button,
  Checkbox,
  CheckboxInput,
  Field,
  FileInput,
  Infos,
  Link,
  Message,
  MessageTypes,
  MultiSelectInput,
  Name,
  Paging,
  Popover,
  SelectBase,
  SliderInput,
  Svg,
  THead,
  Table,
  Td,
  Th,
  Title,
  Tr,
  User,
} from "@axa-fr/design-system-slash-react";
import openInNew from "@material-symbols/svg-400/outlined/open_in_new.svg";
import { useRef, useState } from "react";
import { NavLink } from "react-router";

const Agent = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <NavLink id="backlink" to="/client">
        ← Retour à la partie client
      </NavLink>
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
          <Popover mode="hover" popoverElement="hello friends">
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
        <form className="af-form">
          <article>
            <Title heading="h3">Slider</Title>
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
            <Title heading="h3">Checkbox component</Title>
            <CheckboxInput
              name="checkboxes"
              label="CheckboxInput"
              message="This is a message"
              values={["option-2"]}
              messageType={MessageTypes.error}
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

            <Field label="Manual Checkboxes">
              <Checkbox
                mode="inline"
                values={["option-2"]}
                options={[
                  {
                    label: "Option 1",
                    value: "option-1",
                  },
                  {
                    label: "Option 2",
                    value: "option-2",
                    checked: true,
                  },
                  {
                    label: "Option 3",
                    value: "option-3",
                  },
                ]}
              />
            </Field>
          </article>

          <article>
            <Title heading="h3">FileInput component</Title>
            <FileInput
              id="fileInput"
              name="fileInput"
              label="FileInput"
              onChange={({ fileAction }) => {
                console.log(fileAction);
              }}
            />
          </article>
        </form>
        <article>
          <Title heading="h3">Link component</Title>
          <Link
            href="https://axafrance.github.io/design-system/slash/react/latest/"
            target="_blank"
            rightIcon={<Svg src={openInNew} />}
          >
            This is an anchor tag going to the Slash storybook
          </Link>
          <br />
          <Link
            render={(props) => (
              <button
                {...props}
                type="button"
                // eslint-disable-next-line no-alert
                onClick={() => alert("Button clicked")}
              >
                Click me, i&apos;m a button
              </button>
            )}
          >
            Display an alert
          </Link>
        </article>
        <article>
          <Title heading="h3">Infos component</Title>
          <Infos
            infos={[
              {
                word: "Name",
                definition: "John Doe",
              },
            ]}
          />
        </article>
        <article>
          <Title heading="h3">Name component</Title>
          <Name
            title="Name of the application"
            img={logoAxa}
            subtitle="Subtitle of the app"
          />
        </article>
        <article>
          <Title heading="h3">User component</Title>
          <User name="Jean Agent [AGA]" />
        </article>
        <article>
          <Message
            title="my alert"
            closeButtonAriaLabel="Close this alert"
            variant="error"
          >
            <ul>
              <li>Le nom est obligatoire</li>
              <li>Le prénom est obligatoire</li>
              <li>L&apos;email est obligatoire</li>
              <li>Le format de date est invalide</li>
            </ul>
          </Message>
        </article>
        <article>
          <Title
            heading="h3"
            contentLeft={<Button variant="ghost">Go Back</Button>}
            contentRight={<Link href="https://www.axa.fr">axa.fr</Link>}
          >
            Title with content
          </Title>
        </article>
        <article>
          <Title heading="h3">Deprecated stuff</Title>
          <SelectBase />
        </article>
        <BooleanModal
          ref={modalRef}
          id="boolean-modal"
          title="Boolean Modal title"
          onCancel={() => modalRef.current?.close()}
          onSubmit={() => modalRef.current?.close()}
          cancelTitle="Annuler"
          submitTitle="Valider"
          size="lg"
        >
          <p>
            Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo
            in aliquip consectetur nulla sit anim. Pariatur minim commodo enim
            ea eu laborum culpa laboris. Labore labore irure ipsum consequat
            enim officia anim ipsum aliqua excepteur qui sint. Duis sint do
            culpa adipisicing dolor adipisicing ea dolore aute nisi quis ullamco
            aliquip occaecat. Aute ut mollit amet.
          </p>
        </BooleanModal>
      </section>
    </>
  );
};

export default Agent;
