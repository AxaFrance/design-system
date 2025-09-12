import {
  Button as ButtonClient,
  buttonVariants as ButtonClientVariants,
  CardCheckbox,
  RadioCard,
  Select,
  Svg,
  TextInput,
} from "@axa-fr/design-system-look-and-feel-react";
import acUnit from "@material-symbols/svg-400/outlined/ac_unit.svg";

import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router";

type Inputs = {
  exampleTextInput: string;
  exampleSelectInput: string;
  exampleRadioInput: string;
  exampleCheckboxInput: string[];
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
      exampleCheckboxInput: [],
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <NavLink id="backlink" to="/agent">
        ← Retour à la partie agent
      </NavLink>
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
              labelGroup="Card Radio Group"
              type="vertical"
              isRequired
              error={errors.exampleRadioInput?.message}
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
              {...register("exampleRadioInput", {
                required: "This field is required",
              })}
            />
          </article>

          <article>
            <CardCheckbox
              labelGroup="Card Checkbox Group"
              type="vertical"
              isRequired
              error={errors.exampleCheckboxInput?.message}
              options={[
                {
                  label: "Checkbox 1",
                  value: "checkbox1",
                  description: "Description for checkbox 1",
                },
                {
                  label: "Checkbox 2",
                  value: "checkbox2",
                  description: "Description for checkbox 2",
                },
              ]}
              {...register("exampleCheckboxInput", {
                required: "This field is required",
              })}
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
    </>
  );
};

export default Client;
