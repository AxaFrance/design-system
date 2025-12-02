import {
  ArticleRestitution,
  HeaderRestitution,
  Restitution,
  RestitutionList,
  SectionRestitution,
  SectionRestitutionColumn,
  SectionRestitutionRow,
} from "@axa-fr/canopee-react/distributeur";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Components/Restitution",
  component: Restitution,
  args: {
    classModifier: "",
  },
};
export default meta;

export const Default: StoryObj = {
  name: "Restitution",
  render: ({ ...args }) => (
    <ArticleRestitution {...args}>
      <HeaderRestitution
        title="Tarifs"
        subtitle="Tout adhérent, assuré, base (sans EAC ou sans PAC)"
        rightTitle={
          <a className="af-link af-link--hasIconLeft" href="/#">
            <i className="glyphicon glyphicon-pencil" />
            <span className="af-link__text">Modifier</span>
          </a>
        }
      />
      <SectionRestitution>
        <SectionRestitutionRow title="Base de calcul des prestations">
          <SectionRestitutionColumn>
            <Restitution label="TA">99,99 %</Restitution>
            <Restitution label="EURO">EURO</Restitution>
            <Restitution label="TT" />
            <Restitution
              label="Garanties complémentaires"
              classModifier="marge"
            >
              <RestitutionList
                values={[
                  "Vol au domicile",
                  "Vol étendu aux appareils nomades",
                  "Bris de glace",
                  "Plomberie et électricité",
                  "Jardin",
                ]}
              />
            </Restitution>
          </SectionRestitutionColumn>
          <SectionRestitutionColumn classModifier="test">
            <Restitution label="TA">99,99 %</Restitution>
            <Restitution label="EURO">EURO</Restitution>
            <Restitution label="TT" />
            <Restitution
              label="Garanties complémentaires"
              classModifier="marge"
            >
              <RestitutionList
                values={[
                  "Vol au domicile",
                  "Vol étendu aux appareils nomades",
                  "Bris de glace",
                  "Plomberie et électricité",
                  "Jardin",
                ]}
              />
            </Restitution>
          </SectionRestitutionColumn>
        </SectionRestitutionRow>

        <SectionRestitutionRow title="Base de calcul des prestations">
          <SectionRestitutionColumn>
            <Restitution label="TA">99,99 %</Restitution>
            <Restitution label="EURO">EURO</Restitution>
            <Restitution label="TT" />
            <Restitution
              label="Garanties complémentaires"
              classModifier="marge"
            >
              <RestitutionList
                values={[
                  "Vol au domicile",
                  "Vol étendu aux appareils nomades",
                  "Bris de glace",
                  "Plomberie et électricité",
                  "Jardin",
                ]}
              />
            </Restitution>
          </SectionRestitutionColumn>
          <SectionRestitutionColumn>
            <Restitution label="TA">99,99 %</Restitution>
            <Restitution label="EURO">
              <span style={{ textDecoration: "underline" }}>EURO</span>
            </Restitution>
            <Restitution
              label="Garanties complémentaires"
              classModifier="marge"
            >
              <RestitutionList
                values={[
                  "Vol au domicile",
                  "Vol étendu aux appareils nomades",
                  "Bris de glace",
                  "Plomberie et électricité",
                  "Jardin",
                ]}
              />
            </Restitution>
          </SectionRestitutionColumn>
        </SectionRestitutionRow>

        <SectionRestitutionRow>
          <SectionRestitutionColumn title="Base de calcul des prestations">
            <Restitution label="TA">99,99 %</Restitution>
            <Restitution label="EURO">EURO</Restitution>
          </SectionRestitutionColumn>
          <SectionRestitutionColumn title="Base de calcul des prestations">
            <Restitution label="TA">99,99 %</Restitution>
            <Restitution label="EURO">
              <span style={{ textDecoration: "underline" }}>EURO</span>
            </Restitution>
          </SectionRestitutionColumn>
        </SectionRestitutionRow>
      </SectionRestitution>
    </ArticleRestitution>
  ),
};
