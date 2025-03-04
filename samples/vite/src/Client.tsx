import {
  Button,
  Svg,
  TextInput,
} from "@axa-fr/design-system-look-and-feel-react";
import acUnit from "@material-symbols/svg-400/outlined/ac_unit.svg";

const Client = () => (
  <section className="design-section">
    <header>
      <h1>Client sample</h1>
    </header>
    <p className="af-test-token-css">Test de token CSS</p>
    <article>
      <TextInput
        classModifier="error"
        label="Name"
        description="Description"
        error="This field is required"
      />
    </article>

    <article>
      <Button
        id="button"
        variant="secondary"
        onClick={() => console.log("click")}
      >
        Button <Svg src={acUnit} />
      </Button>
    </article>
  </section>
);

export default Client;
