import {
  Button,
  Paging,
  THead,
  Table,
  Td,
  Th,
  Title,
  Tr,
} from "@axa-fr/design-system-react/agent";
import {
  Button as ButtonClient,
  ButtonVariants as ButtonClientVariants,
} from "@axa-fr/design-system-react/client";
import { AcUnit } from "@axa-fr/design-system-react/icons";

import "./App.css";
import "./Reset.css";

function App() {
  return (
    <>
      <section className="design-section">
        <header>
          <h1>Client sample</h1>
        </header>

        <article>
          <ButtonClient
            id="button"
            variant={ButtonClientVariants.secondary}
            onClick={() => console.log("click")}
          >
            Button <AcUnit />
          </ButtonClient>
        </article>
      </section>

      <section className="design-section">
        <header>
          <Title heading="h2">Agent</Title>
        </header>

        <article>
          <Title heading="h3">Button component</Title>

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
      </section>
    </>
  );
}

export default App;
