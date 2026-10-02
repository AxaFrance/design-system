import "@axa-fr/canopee-css/distributeur/FormHelper/ListFormHelper.css";
import type { ComponentPropsWithoutRef, MouseEventHandler } from "react";
import {
  ItemFormHelper,
  type ItemFormHelperVariant,
} from "../ItemFormHelper/ItemFormHelper";
import { getClassName } from "../utilities/helpers/getClassName";
import type { FormHelperStateLabels } from "./types";

export type ListFormHelperStep = {
  /** Name of the form section, e.g. "Tarification". */
  label: string;
  /** State of the section. */
  variant: ItemFormHelperVariant;
  /** Link to the section, e.g. "#tarification". Makes the step clickable. */
  href?: string;
  /** Called when the step link is clicked (only with `href`). */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export type ListFormHelperProps = Omit<
  ComponentPropsWithoutRef<"ol">,
  "children"
> & {
  /** Sections of the form, in order. */
  steps: ListFormHelperStep[];
  /**
   * Accessible name of the navigation, used when a step has a link.
   * @default "étapes du formulaire"
   */
  navAriaLabel?: string;
  /** Texts of the states read after each step name. */
  stateLabels?: FormHelperStateLabels;
};

export const ListFormHelper = ({
  steps,
  navAriaLabel = "étapes du formulaire",
  stateLabels,
  className,
  ...otherProps
}: ListFormHelperProps) => {
  const currentIndex = steps.findIndex(
    ({ variant }) => variant === "inprogress",
  );
  const hasLinks = steps.some(({ href }) => Boolean(href));

  const list = (
    <ol
      className={getClassName({
        baseClassName: "af-list-form-helper",
        className,
      })}
      {...otherProps}
    >
      {steps.map(({ label, variant, href, onClick }, index) => {
        const ariaCurrent = index === currentIndex ? "step" : undefined;
        const item = (
          <ItemFormHelper
            variant={variant}
            label={label}
            stateLabel={stateLabels?.[variant]}
          />
        );

        return (
          <li
            key={href ?? label}
            className="af-list-form-helper__step"
            aria-current={href ? undefined : ariaCurrent}
          >
            {href ? (
              <a
                className="af-list-form-helper__link"
                href={href}
                onClick={onClick}
                aria-current={ariaCurrent}
              >
                {item}
              </a>
            ) : (
              item
            )}
          </li>
        );
      })}
    </ol>
  );

  return hasLinks ? <nav aria-label={navAriaLabel}>{list}</nav> : list;
};
