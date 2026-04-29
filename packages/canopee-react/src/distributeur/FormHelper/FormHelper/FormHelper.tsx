import "@axa-fr/canopee-css/distributeur/FormHelper/FormHelper.css";
import classNames from "classnames";
import {
  ArticleRestitution,
  HeaderRestitution,
  SectionRestitution,
} from "../../Restitution";
import { ItemFormHelper } from "../ItemFormHelper/ItemFormHelper";

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
        <li>
          <ItemFormHelper label="à compléter" mode="locked" />
        </li>
        <li>
          <ItemFormHelper label="en cours" mode="edited" />
        </li>
        <li>
          <ItemFormHelper label="validé" mode="validated" />
        </li>
      </ul>
    </SectionRestitution>
    <SectionRestitution
      className={classNames("af-restitution", "af-form-helper__main-content")}
    >
      {sections.map((section, idx) => (
        <div key={section.title || idx}>
          {section.title ? (
            <h3 className={classNames("af-form-helper__section-title")}>
              {section.title}
            </h3>
          ) : null}
          <ul>
            {section.items.map((item) => (
              <li key={item.label}>
                <ItemFormHelper
                  label={item.label}
                  mode={item.mode}
                  anchor={item.anchor}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </SectionRestitution>
  </ArticleRestitution>
);
