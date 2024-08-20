import {
  Button as ButtonClient,
  ButtonVariants as ButtonClientVariants,
  Svg,
  TextInput,
} from "@axa-fr/design-system-look-and-feel-react/look-and-feel";
import acUnit from "@material-symbols/svg-400/outlined/ac_unit.svg";

const Client = () => (
  <section className="design-section">
    <header>
      <h1>Client sample</h1>
    </header>

    <article>
      <TextInput classModifier="error" label="Name" description="Description" error="This field is required" />
    </article>

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
);

export default Client;
