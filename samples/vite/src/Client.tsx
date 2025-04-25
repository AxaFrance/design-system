import {
  Button as ButtonClient,
  buttonVariants as ButtonClientVariants,
  Svg,
  TextInput,
  Select,
} from "@axa-fr/design-system-look-and-feel-react";
import acUnit from "@material-symbols/svg-400/outlined/ac_unit.svg";

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  exampleTextInput: string;
  exampleSelect: string;
};

const Client = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      exampleTextInput: "",
      exampleSelect: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="design-section">
        <header>
          <h1>Client sample</h1>
        </header>
        <p className="af-test-token-css">Test de token CSS</p>
        <article>
          <TextInput
            {...register("exampleTextInput", {
              required: "This field is required",
            })}
            label="Name"
            description="Description"
            error={errors.exampleTextInput?.message}
          />
        </article>

        <article>
          <Select
            label="Name"
            {...register("exampleSelect", {
              required: "This field is required",
            })}
            description="Description"
            error={errors.exampleSelect?.message}
          >
            <option disabled value="">
              Select a country
            </option>
            <option value="FR">France</option>
            <option value="ES">Espagne</option>
            <option value="JP">Japon</option>
          </Select>
        </article>

        <article>
          <ButtonClient
            id="button"
            variant={ButtonClientVariants.secondary}
            onClick={() => console.log("click")}
            type="submit"
          >
            Submit <Svg src={acUnit} />
          </ButtonClient>
        </article>
      </section>
    </form>
  );
};

export default Client;
