import { ItemFormHelper } from "../ItemFormHelper/ItemFormHelper";
import "@axa-fr/design-system-slash-css/dist/FormHelper/FormHelper.css";

type ItemFormHelperProps = {
  label: string;
  mode: string;
  ancre?: string;
};

type Section = {
  titre?: string;
  items: ItemFormHelperProps[];
};

type FormHelperProps = {
  sections: Section[];
};

export const FormHelper = ({ sections }: FormHelperProps) => (
  <>
    {sections.map((section, idx) => (
      <ul key={section.titre || idx}>
        {section.titre ? <h3>{section.titre}</h3> : null}
        {section.items.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <ItemFormHelper
            label={item.label}
            mode={item.mode}
            ancre={item.ancre}
          />
        ))}
      </ul>
    ))}
  </>
);
