import logoAxa from "@axa-fr/canopee-css/logo-axa.svg";
import {
  ArticleRestitution,
  Button,
  CheckboxInput,
  Footer,
  Header,
  HeaderRestitution,
  HeaderTitle,
  Infos,
  MainContainer,
  Name,
  PassInput,
  RadioInput,
  Restitution,
  RestitutionList,
  SectionRestitution,
  SectionRestitutionColumn,
  SectionRestitutionRow,
  SelectInput,
  Step,
  Steps,
  TextareaInput,
  TextInput,
  User,
  VerticalStep,
} from "@axa-fr/canopee-react/distributeur";

import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

type DemoFormValues = {
  "text-input": string;
  "text-disabled": string;
  "text-error": string;
  password: string;
  comments: string;
  "select-example": string;
  accept: string[];
  delivery: string;
};

const meta: Meta<StoryProps> = {
  title: "Layout/Demo Page",
  parameters: {
    options: {
      withAnchorNavBar: true,
    },
  },
  argTypes: {
    withAnchorNavBar: {
      control: "boolean",
      description: "Whether to display the anchor navigation bar",
      defaultValue: false,
    },
  },
  tags: ["!autodocs"],
};

type StoryProps = {
  withAnchorNavBar?: boolean;
};

export default meta;

export const DemoStory: StoryObj<StoryProps> = {
  name: "Demo",
  render: ({ withAnchorNavBar }) => {
    const [stepMode, setStepMode] = useState<"edited" | "validated" | "locked">(
      "edited",
    );
    const [values, setValues] = useState<Partial<DemoFormValues>>({});

    const defaultValues: DemoFormValues = {
      "text-input": "Default text",
      "text-disabled": "Disabled default",
      "text-error": "Error default",
      password: "secret",
      comments: "Default comment",
      "select-example": "2",
      accept: ["yes"],
      delivery: "std",
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const data = new FormData(form);
      const obj: Partial<DemoFormValues> = {};
      for (const [k, v] of data.entries()) {
        if (Object.prototype.hasOwnProperty.call(obj, k)) {
          // @ts-expect-error: on utilise du any ici pour pas s'embeter
          if (Array.isArray(obj[k])) obj[k].push(v);
          // @ts-expect-error: on utilise du any ici pour pas s'embeter
          else obj[k] = [obj[k], v];
        } else {
          // @ts-expect-error: on utilise du any ici pour pas s'embeter
          obj[k] = v;
        }
      }

      // Merge defaults for missing keys
      Object.keys(defaultValues).forEach((k) => {
        // @ts-expect-error: on utilise du any ici pour pas s'embeter
        if (obj[k] === undefined) {
          // @ts-expect-error: on utilise du any ici pour pas s'embeter
          obj[k] = defaultValues[k as keyof DemoFormValues];
        }
      });

      setValues(obj as DemoFormValues);
      setStepMode("validated");
    };

    const handleEdit = () => {
      setStepMode("edited");
    };

    return (
      <>
        <Header>
          <>
            <Name
              alt=""
              img={logoAxa}
              onClick={() => {}}
              title="Demo application"
              subtitle="Demonstrating our layout"
            />
            <Infos
              infos={[
                {
                  definition: "0123456789 - NOM",
                  word: "Customer :",
                },
                {
                  definition: "000123456789",
                  word: "Wallet:",
                },
                {
                  definition: "New business",
                  word: "Status :",
                },
              ]}
            />
            <User name="Jean Agent" profile="AGA" />
          </>
        </Header>
        <HeaderTitle
          title="Demo page"
          anchorNavBarItems={
            withAnchorNavBar
              ? [
                  { name: "Accueil", link: "#accueil", isActive: true },
                  { name: "À Propos", link: "#apropos" },
                  { name: "Services", link: "/services", externalLink: true },
                  { name: "Contact", link: "#contact" },
                ]
              : undefined
          }
        />
        <Steps>
          <Step id="step-risk" title="Risk analysis" number={1} mode="active" />
          <Step id="step-price" title="Offers" number={2} mode="disabled" />
          <Step
            id="step-contract"
            title="Contract information"
            number={3}
            mode="disabled"
          />
          <Step id="step-confirmation" title="Confirmation" mode="disabled" />
        </Steps>
        <MainContainer>
          <ArticleRestitution classModifier="lg">
            <HeaderRestitution
              title="Policy details"
              subtitle="Contract n° 000123456789"
              rightTitle="Based on last update: 12/03/2024"
            />
            <SectionRestitution>
              <SectionRestitutionRow title="Client information">
                <SectionRestitutionColumn>
                  <Restitution label="Adress">
                    168 High Holborn, London WC1V 7AA, UK
                  </Restitution>
                  <Restitution label="Job">Alchemist</Restitution>
                  <Restitution label="Beverages" classModifier="marge">
                    <RestitutionList
                      values={[
                        "Hoppiness manager",
                        "Tea maker",
                        "Coffee brewer",
                        "Juice extractor",
                      ]}
                    />
                  </Restitution>
                </SectionRestitutionColumn>
                <SectionRestitutionColumn classModifier="test">
                  <Restitution label="Favorite color">Blue</Restitution>
                  <Restitution label="Favorite movie">
                    The Lord of the Rings
                  </Restitution>
                  <Restitution label="Favorite series">
                    Game of Thrones
                  </Restitution>
                </SectionRestitutionColumn>
              </SectionRestitutionRow>
            </SectionRestitution>
          </ArticleRestitution>

          <VerticalStep
            form={
              <form onSubmit={handleSubmit}>
                <TextInput
                  label="Text input"
                  name="text-input"
                  placeholder="Type here"
                  defaultValue={defaultValues["text-input"]}
                />
                <TextInput
                  label="Text input (disabled)"
                  name="text-disabled"
                  disabled
                  defaultValue={defaultValues["text-disabled"]}
                />
                <TextInput
                  label="Text input (error)"
                  name="text-error"
                  message="This field has an error"
                  classModifier="error"
                  defaultValue={defaultValues["text-error"]}
                />

                <PassInput
                  label="Password"
                  name="password"
                  placeholder="••••••"
                  defaultValue={defaultValues.password}
                />

                <TextareaInput
                  label="Comments"
                  name="comments"
                  placeholder="Write a comment"
                  defaultValue={defaultValues.comments}
                />

                <SelectInput
                  label="Choose option"
                  name="select-example"
                  options={[
                    { label: "One", value: "1" },
                    { label: "Two", value: "2" },
                  ]}
                  defaultValue={defaultValues["select-example"]}
                />

                <CheckboxInput
                  label="Accept terms"
                  name="accept"
                  options={[{ label: "I accept", value: "yes" }]}
                  values={defaultValues.accept}
                />

                <RadioInput
                  label="Delivery"
                  name="delivery"
                  options={[
                    { label: "Standard", value: "std" },
                    { label: "Express", value: "exp" },
                  ]}
                  value={defaultValues.delivery}
                />

                <Button type="submit" variant="validated">
                  Submit
                </Button>
              </form>
            }
            title="Client information"
            stepMode={stepMode}
            onEdit={handleEdit}
            restitution={
              <ArticleRestitution>
                <SectionRestitution>
                  <SectionRestitutionRow>
                    <SectionRestitutionColumn>
                      <Restitution label="Text input">
                        {values["text-input"]}
                      </Restitution>
                      <Restitution label="Comments">
                        {values.comments}
                      </Restitution>
                      <Restitution label="Choose option">
                        {values["select-example"]}
                      </Restitution>
                    </SectionRestitutionColumn>
                    <SectionRestitutionColumn>
                      <Restitution label="Accept terms">
                        {Array.isArray(values.accept)
                          ? values.accept.join(", ")
                          : String(values.accept)}
                      </Restitution>
                      <Restitution label="Delivery">
                        {values.delivery}
                      </Restitution>
                    </SectionRestitutionColumn>
                  </SectionRestitutionRow>
                </SectionRestitution>
              </ArticleRestitution>
            }
          />
        </MainContainer>
        <Footer>© AXA 2040 - All rights reserved</Footer>
      </>
    );
  },
};
