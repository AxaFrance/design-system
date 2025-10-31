import classNames from "classnames";
import {
  ArticleRestitution,
  HeaderRestitution,
  SectionRestitution,
} from "../../Restitution";
import { ItemFormHelper } from "../ItemFormHelper/ItemFormHelper";
import "@axa-fr/design-system-slash-css/dist/FormHelper/FormHelper.css";

type ItemFormHelperProps = {
  label: string;
  mode: string;
  anchor?: string;
};

type Section = {
  title?: string;
  items: ItemFormHelperProps[];
};

type FormHelperProps = {
  formTitle: string;
  sections: Section[];
};

export const FormHelper = ({ formTitle, sections }: FormHelperProps) => (
  <ArticleRestitution>
    <HeaderRestitution title={formTitle} />
    <SectionRestitution className="af-form-helper__legend">
      <ul>
        <ItemFormHelper label="à compléter" mode="locked" />
        <ItemFormHelper label="en cours" mode="edited" />
        <ItemFormHelper label="validé" mode="validated" />
      </ul>
    </SectionRestitution>
    <SectionRestitution
      className={classNames("af-restitution", "af-form-helper__main-content")}
    >
      {sections.map((section, idx) => (
        <ul key={section.title || idx}>
          {section.title ? (
            <h3 className={classNames("af-form-helper__section-title")}>
              {section.title}
            </h3>
          ) : null}
          {section.items.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <ItemFormHelper
              label={item.label}
              mode={item.mode}
              anchor={item.anchor}
            />
          ))}
        </ul>
      ))}
    </SectionRestitution>
  </ArticleRestitution>
);
