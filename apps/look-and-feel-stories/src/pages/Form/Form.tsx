import {
  Button,
  CardRadioGroup,
  Link,
  FormLayout,
  Icon,
  InputDate,
  InputText,
  InputPhone,
  CheckboxText,
  Dropdown,
  CardCheckbox,
  TextArea,
  FileUpload,
  ItemFile,
} from "@axa-fr/canopee-react/client";
import arrowLeftAlt from "@material-symbols/svg-400/outlined/arrow_left_alt.svg";
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";
import type { GridContainerProps } from "@axa-fr/canopee-react/client";
import { LayoutDemo } from "../../layouts/LayoutDemo/LayoutDemo";
import { flagsList } from "./FlagUtils";

export const Form = ({
  "data-cols-mobile": dataColsMobile,
  "data-cols-tablet": dataColsTablet,
  "data-cols-desktop-small": dataColsDesktopSmall,
  "data-cols-desktop-medium": dataColsDesktopMedium,
  "data-cols-desktop-large": dataColsDesktopLarge,
}: GridContainerProps) => {
  const containerProps = {
    "data-cols-mobile": dataColsMobile,
    "data-cols-tablet": dataColsTablet,
    "data-cols-desktop-small": dataColsDesktopSmall,
    "data-cols-desktop-medium": dataColsDesktopMedium,
    "data-cols-desktop-large": dataColsDesktopLarge,
  };

  return (
    <LayoutDemo title="Form with all fields">
      <FormLayout>
        <FormLayout.Body>
          <InputText
            name="nom"
            label="Input Text"
            placeholder="Doe"
            required
            containerProps={containerProps}
          />

          <InputDate
            name="naissance"
            label="Input Date"
            placeholder="JJ/MM/AAAA"
            description="Exemple: 22/03/1990"
            max="01-01-2010"
            min="01-01-1900"
            containerProps={containerProps}
          />

          <InputPhone
            name="telephone"
            label="InputPhone"
            description="Exemple: 06 07 08 09 10"
            placeholder="06 07 08 09 10"
            inputMode="tel"
            showSelect
            countryCodeOptions={flagsList}
            containerProps={containerProps}
          />

          <Dropdown
            name="dropdown"
            label="Dropdown"
            placeholder="Sélectionnez une option"
            required
            containerProps={containerProps}
          >
            {[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
            ].map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Dropdown>

          <TextArea
            name="textarea"
            label="Text Area"
            placeholder="Votre message"
            containerProps={containerProps}
          />

          <CheckboxText
            name="consentement"
            id="consentement"
            value="consentement-ok"
            required
            label="J'accepte de fournir à AXA mes coordonnées ainsi que les données  relatives à mon projet et ma situation. Ces dernières seront transmises à mon conseiller AXA qui pourra  me contacter pour m'accompagner."
            containerProps={containerProps}
          />

          <CardCheckbox
            label="Card Checkbox horizontal"
            description="description"
            name="card-checkbox"
            type="horizontal"
            options={[
              {
                label: "option 1",
                description: "description 1",
                subtitle: "subtitle 1",
                value: "1",
                icon: homeIcon,
              },
              {
                label: "option 2",
                description: "description 2",
                subtitle: "subtitle 2",
                value: "2",
                icon: homeIcon,
              },
            ]}
            containerProps={containerProps as GridContainerProps<"fieldset">}
          />
          <CardCheckbox
            label="Card Checkbox vertical"
            description="description"
            name="card-checkbox"
            type="vertical"
            options={[
              {
                label: "option 1",
                description: "description 1",
                subtitle: "subtitle 1",
                value: "1",
                icon: homeIcon,
              },
              {
                label: "option 2",
                description: "description 2",
                subtitle: "subtitle 2",
                value: "2",
                icon: homeIcon,
              },
            ]}
            containerProps={containerProps as GridContainerProps<"fieldset">}
          />

          <CardRadioGroup
            position="line"
            cardStyle="horizontal"
            label="Card Radio Group line horizontal"
            name="logement"
            options={[
              { label: "Une maison", value: "maison" },
              { label: "Un appartement", value: "appartement" },
              { label: "Une chambre individuelle", value: "chambre" },
            ]}
            containerProps={containerProps}
          />

          <CardRadioGroup
            position="column"
            cardStyle="vertical"
            label="Card Radio Group column vertical"
            name="profil"
            options={[
              { label: "Propriétaire", value: "proprietaire" },
              { label: "Locataire", value: "locataire" },
              { label: "Propriétaire non occupant", value: "non_occupant" },
            ]}
            containerProps={containerProps as GridContainerProps<"fieldset">}
          />
          <CardRadioGroup
            position="line"
            cardStyle="vertical"
            label="Card Radio Group line vertical"
            name="usage-logement"
            options={[
              {
                label: "Résidence secondaire",
                value: "residence_secondaire",
              },
              {
                label: "Résidence principale",
                value: "residence_principale",
              },
            ]}
            containerProps={containerProps as GridContainerProps<"fieldset">}
          />

          <CardRadioGroup
            position="column"
            cardStyle="horizontal"
            label="Card Radio Group column horizontal"
            name="location"
            options={[
              {
                label: "Oui",
                value: "oui",
              },
              {
                label: "Non",
                value: "non",
              },
            ]}
            containerProps={containerProps as GridContainerProps<"fieldset">}
          />

          <FileUpload
            name="file-upload"
            dropzoneLabels={{
              dropzone: "'dropzone' label",
              or: "'or' label",
              button: "'button' label",
            }}
            fileListLabel="fileListLabel"
            description="description"
            helper="helper"
            label="File Upload"
            message="message"
            containerProps={containerProps}
          >
            <ItemFile
              file={
                new File([new Uint8Array(1_496)], "Wallpaper.jpg", {
                  type: "image/jpg",
                })
              }
            />
            <ItemFile
              file={
                new File([new Uint8Array(5_159_852)], "Document.pdf", {
                  type: "application/pdf",
                })
              }
              errorMessage="Le fichier que vous souhaitez importer est supérieur à 5 Mo."
            />
          </FileUpload>
        </FormLayout.Body>
        <FormLayout.Footer>
          <Link
            href="/"
            className="af-btn-client af-btn-client--secondary"
            leftIcon={<Icon src={arrowLeftAlt} />}
          >
            Précédent
          </Link>
          <Button variant="primary">Suivant</Button>
        </FormLayout.Footer>
      </FormLayout>
    </LayoutDemo>
  );
};
