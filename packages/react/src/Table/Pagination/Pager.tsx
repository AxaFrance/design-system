import "@axa-fr/design-system-css/dist/Table/Pager.agent.scss";
import { ComponentPropsWithoutRef } from "react";
import { getComponentClassName } from "../../agent";
import { Li } from "./Li";
import { LiPoint } from "./LiPoint";
import { PaginationButton } from "./PaginationButton";

export type PagerComponentProps = Pick<
  ComponentPropsWithoutRef<typeof PaginationButton>,
  "onChange"
> & {
  className?: string;
  classModifier?: string;
  /**
   * Total number of pages in the table
   */
  numberPages?: number;
  /**
   * Current page
   */
  currentPage?: number;
  /**
   * "default" or "light".
   * Default displays the first, last, previous and next pages.
   * Light displays only previous and next buttons, and "{currentPage} {ofLabel} {numberPages}"
   * @default "default"
   */
  mode?: "default" | "light";
  /**
   * Label for the previous button
   */
  previousLabel?: string;
  /**
   * Label for the next button
   */
  nextLabel?: string;
  /**
   * Label for text betweeen current page a total number of pages. Only used in "light" mode
   * @default "sur"
   */
  ofLabel?: string;
};

const Pager = ({
  className,
  classModifier,
  numberPages = 1,
  currentPage = 1,
  onChange,
  mode = "default",
  previousLabel = "« Précédent",
  nextLabel = "Suivant »",
  ofLabel = "sur",
}: PagerComponentProps) => {
  const hasNext = currentPage < numberPages;
  const hasPrevious = currentPage > 1;

  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-pager",
  );

  if (mode === "light") {
    return (
      <nav className={componentClassName}>
        <ul className="af-pager__pagination">
          <PaginationButton
            onChange={onChange}
            value={currentPage - 1}
            active={hasPrevious}
            isVisible
          >
            <i
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            />
          </PaginationButton>
          <LiPoint isVisible>
            {currentPage} {ofLabel} {numberPages}
          </LiPoint>
          <PaginationButton
            onChange={onChange}
            value={currentPage + 1}
            active={hasNext}
            isVisible
          >
            <i
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            />
          </PaginationButton>
        </ul>
      </nav>
    );
  }

  return (
    <nav className={componentClassName}>
      <ul className="af-pager__pagination">
        <PaginationButton
          onChange={onChange}
          value={currentPage - 1}
          active={hasPrevious}
          isVisible
        >
          {previousLabel}
        </PaginationButton>

        <Li
          onChange={onChange}
          value={1}
          isVisible={numberPages > 1 && currentPage > 1}
        />
        <LiPoint isVisible={currentPage > 3}>...</LiPoint>
        <Li
          onChange={onChange}
          value={currentPage - 1}
          isVisible={numberPages > 2 && currentPage > 2}
        />
        <Li
          onChange={onChange}
          value={currentPage}
          active
          isVisible={numberPages > 0}
        />
        <Li
          onChange={onChange}
          value={currentPage + 1}
          isVisible={currentPage < numberPages - 1}
        />
        <LiPoint isVisible={currentPage < numberPages - 2}>...</LiPoint>
        <Li
          onChange={onChange}
          value={numberPages}
          isVisible={currentPage < numberPages}
        />

        <PaginationButton
          onChange={onChange}
          value={currentPage + 1}
          active={hasNext}
          isVisible
        >
          {nextLabel}
        </PaginationButton>
      </ul>
    </nav>
  );
};

export { Pager };
