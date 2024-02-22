import { Button, Title } from "@axa-fr/design-system-react/agent";
import { Button as ButtonClient } from "@axa-fr/design-system-react/client";
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
          <ButtonClient id="button" onClick={() => console.log("click")}>
            Button <AcUnit />
          </ButtonClient>
        </article>
      </section>

      <section className="design-section">
        <header>
          <Title heading="h2">Agent</Title>
        </header>

        <article>
          <Button>Button</Button>
        </article>
      </section>
    </>
  );
}

export default App;
