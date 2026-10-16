import "@axa-fr/canopee-css/distributeur/FormHelper/FormHelper.css";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  ItemFormHelper,
  type ItemFormHelperVariant,
} from "../ItemFormHelper/ItemFormHelper";
import { getClassName } from "../utilities/helpers/getClassName";
import type { FormHelperStateLabels } from "./types";

export type FormHelperProps = Omit<
  ComponentPropsWithoutRef<"aside">,
  "title"
> & {
  /** Title shown in the blue header, e.g. "Assistant de création". */
  title: string;
  /**
   * Heading level of the title.
   * @default "h2"
   */
  heading?: "h2" | "h3" | "h4";
  /** Texts of the legend, e.g. for another language. */
  stateLabels?: FormHelperStateLabels;
  /** Body of the helper, usually a `ListFormHelper`. */
  children: ReactNode;
};

const legendVariants: ItemFormHelperVariant[] = [
  "todo",
  "inprogress",
  "validated",
];

export const FormHelper = ({
  title,
  heading: Heading = "h2",
  stateLabels,
  children,
  className,
  "aria-label": ariaLabel = "Progression du formulaire",
  ...otherProps
}: FormHelperProps) => (
  <aside
    className={getClassName({ baseClassName: "af-form-helper", className })}
    aria-label={ariaLabel}
    {...otherProps}
  >
    <Heading className="af-form-helper__title">{title}</Heading>
    <ul className="af-form-helper__legend">
      {legendVariants.map((variant) => (
        <li key={variant}>
          <ItemFormHelper
            variant={variant}
            stateLabel={stateLabels?.[variant]}
          />
        </li>
      ))}
    </ul>
    <div className="af-form-helper__body">{children}</div>
  </aside>
);
