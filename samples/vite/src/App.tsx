import { Button, Title } from "@axa-fr/design-system-slash-react/agent";
import {
  Button as ButtonClient,
  ButtonVariants as ButtonClientVariants, Svg,
} from "@axa-fr/design-system-slash-react/client";
import acUnit from "@material-design-icons/svg/outlined/ac_unit.svg";

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
            Button <Svg src={acUnit} />
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
