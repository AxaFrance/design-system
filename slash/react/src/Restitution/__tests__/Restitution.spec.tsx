import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Restitution } from "../Restitution";
import { SectionRestitution } from "../SectionRestitution";
import { SectionRestitutionRow } from "../SectionRestitutionRow";
import { SectionRestitutionColumn } from "../SectionRestitutionColumn";
import { RestitutionList } from "../RestitutionList";
import { ArticleRestitution } from "../ArticleRestitution";
import { HeaderRestitution } from "../HeaderRestitution";

describe("Restitution", () => {
  it("shouldn't have an accessibility violation <ArticleRestitution/>", async () => {
    // Act
    const { container } = render(
      <ArticleRestitution classModifier="lg">
        <HeaderRestitution title="Tarifs" />
        <SectionRestitution>
          <SectionRestitutionRow>
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
        </SectionRestitution>
      </ArticleRestitution>,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Header Restitution with rightTitle and subtitle", async () => {
    // Act
    render(
      <ArticleRestitution classModifier="lg">
        <HeaderRestitution
          title="Tarifs"
          subtitle="Tout adhérent, assuré, base (sans EAC ou sans PAC)"
          rightTitle="Modifier"
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
            <SectionRestitutionColumn classModifier="test" title="Prix">
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
        </SectionRestitution>
      </ArticleRestitution>,
    );

    // Assert
    const rightTitle = screen.getByText("Modifier");
    expect(rightTitle).toBeInTheDocument();
    const subTitle = screen.getByText(
      "Tout adhérent, assuré, base (sans EAC ou sans PAC)",
    );
    expect(subTitle).toBeInTheDocument();
  });

  it("Column restitution with title", async () => {
    // Act
    render(
      <SectionRestitution>
        <SectionRestitutionRow title="Base de calcul des prestations">
          <SectionRestitutionColumn title="Différents types de garanties">
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
      </SectionRestitution>,
    );

    // Assert
    const titleColumn = screen.getByText("Différents types de garanties");
    expect(titleColumn).toBeInTheDocument();
  });

  it("Row restitution with title", async () => {
    // Act
    render(
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
        </SectionRestitutionRow>
      </SectionRestitution>,
    );

    // Assert
    const titleRow = screen.getByText("Base de calcul des prestations");
    expect(titleRow).toBeInTheDocument();
  });
});
