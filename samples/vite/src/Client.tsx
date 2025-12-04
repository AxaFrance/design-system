import {
  Button,
  CardCheckbox,
  CardRadio,
  Dropdown,
  Icon,
  InputText,
} from "@axa-fr/canopee-react/client";
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
            <InputText
              {...register("exampleTextInput", {
                required: "This field is required",
              })}
              label="Name"
              description="Description"
              message={errors.exampleTextInput?.message}
              messageType="error"
            />
          </article>

          <article>
            <Dropdown
              label="Name"
              {...register("exampleSelectInput", {
                required: "This field is required",
              })}
              description="Description"
              message={errors.exampleSelectInput?.message}
              messageType="error"
            >
              <option disabled value="">
                Select a country
              </option>
              <option value="FR">France</option>
              <option value="ES">Espagne</option>
              <option value="JP">Japon</option>
            </Dropdown>
          </article>

          <article>
            <CardRadio
              label="Card Radio Group"
              type="vertical"
              required
              message={errors.exampleRadioInput?.message}
              messageType="error"
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
              label="Card Checkbox Group"
              type="vertical"
              required
              message={errors.exampleCheckboxInput?.message}
              messageType="error"
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
            <Button
              id="button"
              variant="secondary"
              onClick={() => console.log("click")}
              type="submit"
              iconRight={<Icon src={acUnit} />}
            >
              Submit
            </Button>
          </article>
        </section>
      </form>
    </>
  );
};

export default Client;
