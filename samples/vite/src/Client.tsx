import {
  Button as ButtonClient,
  buttonVariants as ButtonClientVariants,
  RadioCard,
  Select,
  Svg,
  TextInput,
} from "@axa-fr/design-system-look-and-feel-react";
import acUnit from "@material-symbols/svg-400/outlined/ac_unit.svg";

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  exampleTextInput: string;
  exampleSelectInput: string;
  exampleRadioInput: string;
};

const Client = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      exampleTextInput: "",
      exampleSelectInput: "",
      exampleRadioInput: "",
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
            {...register("exampleSelectInput", {
              required: "This field is required",
            })}
            description="Description"
            error={errors.exampleSelectInput?.message}
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
          <RadioCard
            type="vertical"
            isRequired
            options={[
              {
                label: "Option 1",
                value: "option1",
                description: "Description for option 1",
              },
              {
                label: "Option 2",
                value: "option2",
                description: "Description for option 2",
              },
            ]}
            labelGroup="Card Radio Group"
            {...register("exampleRadioInput", {
              required: "This field is required",
            })}
            error={errors.exampleRadioInput?.message}
          />
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
